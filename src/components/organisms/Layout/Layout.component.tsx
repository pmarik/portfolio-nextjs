import type { Metadata } from 'next'
import Nav from '@/components/organisms/Nav/Nav.component'
import Footer from '@/components/organisms/Footer/Footer.component'


export const metadata: Metadata = {
  title: 'Marik Tech',
  description: 'Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {


  return (
    <>
        <Nav classNames='bg-transparent' baseUrl="."/>
          {children}
        <Footer />
    </>
  )
}
