import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '../_app'
import CustomHead from '@/components/molecules/Head/Head.component'
import { LayoutPortfolio } from '@/components/organisms/Layout'
import ProjectsGrid from '@/components/organisms/ProjectsGrid/ProjectsGrid.component'

function Portfolio<NextPageWithLayout>() {
  return (
      <>
          <CustomHead
            title="Marik Tech | Portfolio"
            description='Boost your business with enhanced web development and design solutions from Marik Tech.'
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