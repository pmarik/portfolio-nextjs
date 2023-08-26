import '@/pages/globals.css'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { Kanit } from 'next/font/google'


const kanit = Kanit({ subsets: ["latin"], weight: ["400", "700"]})
 
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
 
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
 
export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)
 
  return getLayout(
  <>
    <style jsx global>{`
    html {
        font-family: ${kanit.style.fontFamily};
    }
    `}</style>
    <Component className={kanit.className} {...pageProps} />
  </>)
}