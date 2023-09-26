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
        name="description"
        content="An innovative AI-powered vehicle inspection system designed to automate and simplify the inspection process for rideshare drivers, ensuring safety and efficiency."
      />
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#eae8ed" />
    </Head>
    <ThemeProvider enableSystem={true} attribute="class">
      <main
        className={clsx(
          `h-auto min-h-screen w-screen max-w-full dark:bg-[#182633] bg-[#F6F5F8] text-[#eee] transition ease ${
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
