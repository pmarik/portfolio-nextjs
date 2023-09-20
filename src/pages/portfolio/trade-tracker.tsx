import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '../_app'
import { LayoutPortfolio } from '@/components/organisms/Layout'
import projectImg from 'public/project-imgs/trade-tracker-project-logo.jpg'
import { ProjectLayout } from '@/components/organisms/Layout/ProjectLayout.component'

// Change above projectImg and below projectDetails values
const projectDetails = {
  title: 'Trade Tracker',
  description: 'Tracker Tracker is a project that aims to automate the tedious task of analyzing personal capital investments. Through interactive charts, notes, and habit-forming psychology, this project guides a user to steady consistency and performance in the markets.',
  link: 'https://tradetracker.ai',
  tech: ['Next.js','React','TRPC','Radix UI'],
  nextProjectLink: '/portfolio/applecore'
}


function Project<NextPageWithLayout>() {
  return (
    <ProjectLayout
      title={projectDetails.title}
      description={projectDetails.description}
      link={projectDetails.link}
      tech={projectDetails.tech}
      img={projectImg}
      nextProjectLink={projectDetails.nextProjectLink}
    />
  )
}

Project.getLayout = function getLayout(page: ReactElement){
  return (
    <LayoutPortfolio>
      {page}
    </LayoutPortfolio>
  )
}

export default Project
