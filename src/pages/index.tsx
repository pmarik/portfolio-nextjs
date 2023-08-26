import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import RootLayout from '@/components/organisms/Layout/Layout.component'
import HeroSection from '@/components/organisms/HeroSection/HeroSection.component'
import ProjectsSection from '@/components/organisms/ProjectsSection/ProjectsSection.component'
import ServicesSection from '@/components/organisms/ServicesSection/ServicesSection.component'
import ReviewSection from '@/components/organisms/ReviewSection/ReviewSection.component'

function Home<NextPageWithLayout>() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between ">
        <HeroSection />
        <ProjectsSection />
        <ServicesSection />
        <ReviewSection />
      </main>
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
