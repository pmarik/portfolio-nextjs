import '@/pages/globals.css'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { Kanit } from 'next/font/google'
import { DefaultSeo, SocialProfileJsonLd } from 'next-seo'
import SEO from '../../next-seo.config';
import ContactContextProvider from '@/contexts/contact-context'

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
 
  return (
    <ContactContextProvider>
      {getLayout(
        <>
          <style jsx global>{`
          html {
              font-family: ${kanit.style.fontFamily};
          }
          `}</style>
          <DefaultSeo {...SEO}/>
          <SocialProfileJsonLd
            type="Person"
            name="Paul Marik"
            url="http://www.marik.tech"
            sameAs={[
              'http://instagram.com/paul_marik',
              'https://www.linkedin.com/in/paul-marik-web-developer/',
              'https://github.com/pmarik',
            ]}
          />
          <Component className={kanit.className} {...pageProps} />
        </>)}
    </ContactContextProvider>
  )
}