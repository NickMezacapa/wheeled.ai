/* eslint-disable @typescript-eslint/no-explicit-any */
import { type OAuthConfig } from 'next-auth/providers'

export type OAuthProviderOptions = Pick<
  OAuthConfig<any>,
  'clientId' | 'clientSecret'
>

export type BaseUserData = {
  id: string
  password: string
  firstName: string
  lastName: string
  email: string
}
