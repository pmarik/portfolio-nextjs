import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '../_app'
import { LayoutPortfolio } from '@/components/organisms/Layout'
import projectImg from 'public/project-imgs/3dviewer-project-logo.jpg'
import { ProjectLayout } from '@/components/organisms/Layout/ProjectLayout.component'

// Change above projectImg and below projectDetails values
const projectDetails = {
  title: '3D Viewer',
  description: '3D model viewing in your browser. This is a project to test out some of the capabilities of Three.js, a JavaScript framework for displaying 3D content on the web harnessing the power of WebGL',
  link: 'https://3d-viewer-demo.netlify.app/',
  tech: ['Three.js','js','css'],
  nextProjectLink: '/portfolio/lucidworks'
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
