import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '../_app'
import { LayoutPortfolio } from '@/components/organisms/Layout'
// import projectImg from 'public/project-imgs/unaffiliated-project-logo.jpg'
import projectImg from 'public/project-imgs/unaffiliated-project-logo-transparent.png'
import { ProjectLayout } from '@/components/organisms/Layout/ProjectLayout.component'

// Change above projectImg and below projectDetails values
const projectDetails = {
  title: 'Unaffiliated Productions',
  description: 'Fast no-nonsense static site showcasing the full work of the Unaffiliated Productions team. Content and video forward.',
  link: 'https://unaffiliatedproductions.com',
  tech: ['Node','CSS','Javascript'],
  nextProjectLink: '/portfolio/daymaker'
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
            <section id="review"  className="w-full relative quote-graphic jagged-before bg-slate-950 text-white mt-20 md:mt-40 px-6 md:px-10 lg:px-20 py-20 md:min-h-[650px] max-w-maximum min-w-minimum">
                <p className="text-xl text-color-300 mt-16 relative z-10 quote-start-graphic">About this project.</p>
                <h2 className="text-2xl md:title-clamp mb-4 relative z-10">Client Review</h2>
                  <q className="max-w-[75ch] inline-block relative z-10">
                  Paul was quick to understand what my needs and priorities were. He was detail oriented and worked quickly to make the changes that I was looking for.
                  </q>
                  <p className="relative z-10"><br/>Zach Lastrilla
                    <br/>
                    Unaffiliated Productions
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
