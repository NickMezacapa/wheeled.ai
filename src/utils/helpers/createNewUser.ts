import { db } from '~/server/db'
import { type BaseUserData } from '~/utils/types'

import { genSaltSync, hashSync } from 'bcrypt-ts'

const salt = genSaltSync(10)

/**
 * @name createNewUser
 * @description Creates a new user in the database
 *
 * The async function takes in a UserData object and returns a new user.
 * If the user already exists, an error is thrown and a new user is not
 * created.
 *
 * @param {UserData} input - The user data to be stored in the database
 * @returns {Promise<CreateUserResponse>} - The new user and a message (password is omitted)
 */

type CreateUserResponse = {
  newUser: Omit<BaseUserData, 'password'>
  message: string
  status: number
}

export const createNewUser = async (
  input: BaseUserData
): Promise<CreateUserResponse> => {
  const existingUser = await db.user.findUnique({
    where: { email: input.email },
  })
  if (existingUser) throw new Error('🚨 User already exists in the database.')

  const hashedPassword = hashSync(input.password, salt)
  const newUser = await db.user.create({
    data: {
      ...input,
      password: hashedPassword,
    },
  })
  const { password: newUserPassword, ...rest } = newUser
  return {
    newUser: rest,
    message: '✅ New user created successfully.',
    status: 201,
  }
}
