import { DefaultSeo } from 'next-seo'
import { type AppType } from 'next/app'

import { api } from '~/utils/api'

import { SeoConfig } from 'next-seo.config'
import Theme from '~/components/Theme'

import { Space_Grotesk } from 'next/font/google'
import '~/styles/globals.css'

const spaceGt = Space_Grotesk({ subsets: ['latin'] })

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Theme>
      <DefaultSeo {...SeoConfig} />
      <main className={spaceGt.className}>
        <Component {...pageProps} />
      </main>
    </Theme>
  )
}

export default api.withTRPC(MyApp)
