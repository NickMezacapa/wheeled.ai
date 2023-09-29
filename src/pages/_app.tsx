import { type Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { DefaultSeo } from 'next-seo'
import { type AppType } from 'next/app'

import { api } from '~/utils/api'

import { SeoConfig } from 'next-seo.config'
import Theme from '~/components/Theme'

import { Space_Grotesk } from 'next/font/google'
import '~/styles/globals.css'

const spaceGt = Space_Grotesk({ subsets: ['latin'] })

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <Theme>
      <SessionProvider session={session}>
        <DefaultSeo {...SeoConfig} />
        <main className={spaceGt.className}>
          <Component {...pageProps} />
        </main>
      </SessionProvider>
    </Theme>
  )
}

export default api.withTRPC(MyApp)
