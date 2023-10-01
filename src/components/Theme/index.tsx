import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import clsx from 'clsx'

interface LayoutProps {
  children: React.ReactNode
  classNames?: string
}

const Theme = ({ children, classNames }: LayoutProps) => (
  <>
    <Head>
      <title>WheeledAI - AI-Powered Vehicle Inspection Done in Minutes!</title>
      <meta
        content='An innovative AI-powered vehicle inspection system designed to automate and simplify the inspection process for rideshare drivers, ensuring safety and efficiency.'
        name='description'
      />
      <link href='/favicon.ico' rel='icon' />
      <link
        href='/apple-touch-icon.png'
        rel='apple-touch-icon'
        sizes='180x180'
      />
      <link
        href='/favicon-32x32.png'
        rel='icon'
        sizes='32x32'
        type='image/png'
      />
      <link
        href='/favicon-16x16.png'
        rel='icon'
        sizes='16x16'
        type='image/png'
      />
      <link href='/site.webmanifest' rel='manifest' />
      <link color='#5bbad5' href='/safari-pinned-tab.svg' rel='mask-icon' />
      <meta content='#da532c' name='msapplication-TileColor' />
      <meta content='#eae8ed' name='theme-color' />
    </Head>
    <ThemeProvider attribute='dark' enableSystem={true}>
      <main
        className={clsx(
          `ease dark h-auto min-h-screen w-screen max-w-full bg-themeDark text-light transition ${
            classNames ?? ''
          } MainApp`
        )}
      >
        {children}
      </main>
    </ThemeProvider>
  </>
)

export default Theme
