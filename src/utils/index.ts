import { PrismaClient } from '@prisma/client'
import { type UserData } from '~/utils/types'

import { genSaltSync, hashSync } from 'bcrypt-ts'

const salt = genSaltSync(10)
const prisma = new PrismaClient()

/**
 * @name createNewUser
 * @description Creates a new user in the database
 *
 * The async function takes in a UserData object and returns a new user.
 * If the user already exists, an error is thrown and a new user is not
 * created.
 *
 * @param {UserData} input - The user data to be stored in the database
 * @returns {Promise<UserData>} - The user data that was stored in the database
 */
export const createNewUser = async (input: UserData): Promise<UserData> => {
  const existingUser = await prisma.user.findUnique({
    where: { email: input.email },
  })
  if (existingUser) throw new Error('User already exists')

  const hashedPassword = hashSync(input.password, salt)
  const newUser = await prisma.user.create({
    data: {
      firstName: input.firstName,
      lastName: input.lastName,
      email: input.email,
      password: hashedPassword,
    },
  })
  return newUser
}

export const getUserById = async (id: number) => {
  const user = await prisma.user.findUnique({
    where: { id },
  })
  if (!user) throw new Error('User not found')

  return user
}
