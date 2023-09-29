import { createTRPCRouter, publicProcedure } from '~/server/api/trpc'

import { changeUserPassword } from '~/utils/helpers/changeUserPassword'
import { createNewUser } from '~/utils/helpers/createNewUser'
import { deleteUser } from '~/utils/helpers/deleteUser'

import { baseUserSchema } from '~/utils/z.schemas'

export const userRouter = createTRPCRouter({
  // Creates a new user
  register: publicProcedure
    .input(baseUserSchema)
    .query(async ({ input }) => await createNewUser(input)),

  // Deletes an existing user
  deleteAccount: publicProcedure
    .input(baseUserSchema.pick({ id: true }))
    .query(async ({ input }) => await deleteUser(input.id)),

  // Updates a user's password
  changePassword: publicProcedure
    .input(baseUserSchema.pick({ id: true, password: true }))
    .query(
      async ({ input }) => await changeUserPassword(input.id, input.password)
    ),
})
