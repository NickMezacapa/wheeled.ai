import { db } from '~/server/db'

export enum DeleteUserResponse {
  UserNotFound = '🚨 User does not exist in the database.',
  UserDeleted = '✅ User deleted successfully.',
}

/**
 * @name deleteUser
 * @description deletes an existing user from the database
 *
 * The user has the choice to delete their account. This async function
 * checks if the user exists in the database by the users unique identifier,
 * and if so, deletes the user.
 *
 * @param {string} userId the unique identifier of the user
 * @returns {Promise<DeleteUserResponse>} the response from the database
 */
export const deleteUser = async (
  userId: string
): Promise<DeleteUserResponse> => {
  const user = await db.user.findUnique({ where: { id: userId } })
  if (!user) return DeleteUserResponse.UserNotFound

  await db.user.delete({ where: { id: userId } })
  return DeleteUserResponse.UserDeleted
}
