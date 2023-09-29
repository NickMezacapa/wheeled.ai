import { createTRPCRouter, publicProcedure } from '~/server/api/trpc'

import { createNewUser } from '~/utils'
import { baseUserSchema } from '~/utils/schemas'

export const userRouter = createTRPCRouter({
  register: publicProcedure
    .input(baseUserSchema)
    .query(async ({ input }) => await createNewUser(input)),
})
