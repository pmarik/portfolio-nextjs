import '../globals.css'
import type { Metadata } from 'next'
import { Kanit } from 'next/font/google'
import Nav from '@/components/organisms/Nav/Nav.component'
import Footer from '@/components/organisms/Footer/Footer.component'

const kanit = Kanit({ subsets: ["latin"], weight: ["400", "700"]})

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
    <html lang="en">
      <body className={kanit.className}>
        <Nav classNames='bg-transparent'/>
        {children}
        <Footer />
      </body>
    </html>
  )
}
