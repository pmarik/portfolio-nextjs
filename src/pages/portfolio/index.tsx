import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '../_app'
import { LayoutPortfolio } from '@/components/organisms/Layout'
import ProjectsGrid from '@/components/organisms/ProjectsGrid/ProjectsGrid.component'

function Portfolio<NextPageWithLayout>() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between">
        <ProjectsGrid />
      </main>
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