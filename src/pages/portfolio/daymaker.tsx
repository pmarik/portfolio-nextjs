import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '../_app'
import { LayoutPortfolio } from '@/components/organisms/Layout'
import projectImg from 'public/project-imgs/daymaker-project-logo.jpg'
import { ProjectLayout } from '@/components/organisms/Layout/ProjectLayout.component'

// Change above projectImg and below projectDetails values
const projectDetails = {
  title: 'Daymaker Touring',
  description: 'Shopify site enhancements for the easy-to-use ski touring adapters. Increased customer satisfaction and decrease of customer questions. ',
  link: 'https://www.daymakertouring.com/',
  tech: ['Shopify','Liquid','javascript'],
  nextProjectLink: '/portfolio/neovida'
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
                  Working with Marik Tech was a perfect, easy solution for my small business. I built my own shopify website but certain items were very difficult to customize in the end. Paul was able to quickly diagnose web errors and within hours perform fixes that would have taken a full week of my time to research and implement. Marik Tech's professional services and flexibility has allowed me to focus on what I do best at Daymaker Touring rather than wasting countless hours in the rabit hole.
                  </q>
                  <p className="relative z-10">Giray Dadali
                    <br/>
                    Co-founder Daymaker Touring LLC
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
