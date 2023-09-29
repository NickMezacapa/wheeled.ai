import { z } from 'zod'
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc'

import { createNewUser, getUserById } from '~/utils'

export const userRouter = createTRPCRouter({
  register: publicProcedure
    .input(
      z.object({
        firstName: z.string(),
        lastName: z.string(),
        email: z.string(),
        password: z.string(),
      })
    )
    .query(async ({ input }) => {
      const user = await createNewUser(input)
      return user
    }),
  getUserById: publicProcedure.input(z.number()).query(async ({ input }) => {
    const user = await getUserById(input)
    return { fullName: user.firstName + ' ' + user.lastName }
  }),
})
