import { genSaltSync, hashSync } from 'bcrypt-ts'
import { db } from '~/server/db'

export enum PasswordChangeResponse {
  UserNotFound = '🚨 User does not exist in the database.',
  PasswordChanged = '✅ Password changed successfully.',
}

/**
 * @name changeUserPassword
 * @description changes the password of an existing user
 *
 * The user has the option to update their current password. This
 * async function checks if the user exists in the database by the
 * user's unique identifier, and if so, updates the user's password.
 * The new password is hashed before being stored in the database.
 *
 * @param {string} uuid the unique identifier of the user
 * @param {string} newPassword the new password to be stored in the database
 * @returns {Promise<PasswordChangeResponse>} the response from the database
 */
export const changeUserPassword = async (
  uuid: string,
  newPassword: string
): Promise<PasswordChangeResponse> => {
  const user = await db.user.findUnique({ where: { id: uuid } })
  if (!user) return PasswordChangeResponse.UserNotFound

  const salt = genSaltSync(10)
  const hashedPassword = hashSync(newPassword, salt)

  await db.user.update({
    where: { id: uuid },
    data: { password: hashedPassword },
  })
  return PasswordChangeResponse.PasswordChanged
}
