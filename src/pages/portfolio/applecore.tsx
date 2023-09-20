import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '../_app'
import { LayoutPortfolio } from '@/components/organisms/Layout'
import projectImg from 'public/project-imgs/applecore-project-logo.jpg'
import { ProjectLayout } from '@/components/organisms/Layout/ProjectLayout.component'

// Change above projectImg and below projectDetails values
const projectDetails = {
  title: 'Applecore',
  description: 'Ecommerce site for the innovative cord organizer. Blazing fast Gatsby site utilizing the headless Shopify API with powerful animations and engaging user-flow.',
  link: 'https://www.myapplecore.com/',
  tech: ['Gatsby.js','React','Shopify','Styled Components'],
  nextProjectLink: '/portfolio/unaffiliated'
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
