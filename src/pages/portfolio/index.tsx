import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '../_app'
import { NextSeo } from 'next-seo'
import { LayoutPortfolio } from '@/components/organisms/Layout'
import ProjectsGrid from '@/components/organisms/ProjectsGrid/ProjectsGrid.component'

function Portfolio<NextPageWithLayout>() {
  return (
      <>
          <NextSeo
            title="Marik Tech | Portfolio"
            description="Boost your business with enhanced web development and design solutions from Marik Tech."
          />
          <main className="flex min-h-screen flex-col items-center justify-between">
            <ProjectsGrid />
          </main>
      </>
  )
}

Portfolio.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutPortfolio>
      {page}
    </LayoutPortfolio>
  )
}

export default Portfolio