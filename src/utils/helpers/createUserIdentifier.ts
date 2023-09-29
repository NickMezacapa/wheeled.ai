import { v4 as uuidv4 } from 'uuid'
import { db } from '~/server/db'

/**
 * @name createUserIdentifier
 * @description Creates a new unique identifier string
 *
 * Instead of using auto-incrementing integers as primary keys,
 * UUIDs are used and logic is moved from the server up the call stack.
 * This allows for a more flexible database schema and allows for asynchronous
 * database calls to be made without worrying about the order of operations.
 *
 * @returns {Promise<string>} - A unique identifier string
 */
export const createUserIdentifier = async (): Promise<string | void> => {
  const uuid: string = uuidv4()
  if (!uuid) throw new Error('🚨 Error creating user identifier.')

  const existingUser = await db.user.findUnique({
    where: { id: uuid },
  })

  return existingUser ? createUserIdentifier() : uuid
}
