import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import { NextSeo } from 'next-seo'
import RootLayout from '@/components/organisms/Layout/Layout.component'
import HeroSection from '@/components/organisms/HeroSection/HeroSection.component'
import ProjectsSection from '@/components/organisms/ProjectsSection/ProjectsSection.component'
import ServicesSection from '@/components/organisms/ServicesSection/ServicesSection.component'
import ReviewSection from '@/components/organisms/ReviewSection/ReviewSection.component'

function Home<NextPageWithLayout>() {
  return (
    <>
      <NextSeo
        title="Marik Tech | Software Engineer"
        description="Boost your business with enhanced web development and design solutions from Marik Tech."
      />
      <main className="flex min-h-screen flex-col items-center justify-between ">
        <HeroSection />
        <ProjectsSection />
        <ServicesSection />
        <ReviewSection />
      </main>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}

export default Home
