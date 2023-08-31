import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '../_app'
import { LayoutPortfolio } from '@/components/organisms/Layout'
import projectImg from 'public/project-imgs/neovida-project-logo.jpg'
import { ProjectLayout } from '@/components/organisms/Layout/ProjectLayout.component'

// Change above projectImg and below projectDetails values
const projectDetails = {
  title: 'Neovida',
  description: 'Shopify 2.0 custom theme build for speed and engagement. Coffee cherries never looked better. ',
  link: 'https://www.neovidawellness.com/',
  tech: ['Shopify','Liquid','javascript'],
  nextProjectLink: '/portfolio/3dviewer'
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
    >
       {/* <ReviewSection> */}
            <section className="w-full relative quote-graphic jagged-before bg-slate-950 text-white mt-20 md:mt-40 px-6 md:px-10 lg:px-20 py-20 md:min-h-[650px]">
                <p className="text-xl text-color-300 mt-16 relative z-10 quote-start-graphic">About this project.</p>
                <h2 className="text-2xl md:title-clamp mb-4 relative z-10">Client Review</h2>
                  <q className="max-w-[75ch] inline-block relative z-10">
                  I recently contracted Paul at Marik Tech for website development and was thoroughly impressed with his ability to take an idea and translate it into a visually appealing and dynamic website. Mr. Marik was able to combine functionality with simplicity, especially when it came to setting up a CMS so I could manage my site. He made it effortless to edit content! I am extremely happy with his work and appreciate his professional etiquette and diligence.
                  </q>
                  <p className="relative z-10">Simon Roca
                    <br/>
                    Founder Neovida Wellness
                  </p>
              </section>
          {/* </ReviewSection> */}
    </ProjectLayout>
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
