import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '../_app'
import { LayoutPortfolio } from '@/components/organisms/Layout'
import projectImg from 'public/project-imgs/lucidworks-project-logo.jpg'
import { ProjectLayout } from '@/components/organisms/Layout/ProjectLayout.component'

const projectDetails = {
  title: 'Lucidworks',
  description: 'Revamp of Lucidworks documenation site. Interactive documentation built upon Gatsby.js sourced from asciidoc files and powered by internal tools from Lucidworks.',
  link: 'https://doc.lucidworks.com',
  tech: ['Gatsby.js','React','Styled Components','Radix UI'],
  nextProjectLink: '/portfolio/trade-tracker'
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
              <section className="w-full relative quote-graphic jagged-before bg-slate-950 text-white mt-20 md:mt-40 px-6 md:px-10 lg:px-20 py-20">
                <p className="text-xl text-color-300 mt-16 relative z-10 quote-start-graphic">About this project.</p>
                <h2 className="text-2xl md:title-clamp mb-4 relative z-10">Client Review</h2>
                  <q className="max-w-[75ch] inline-block relative z-10">
                    I’m thrilled to have a chance to work with Paul and be one of his clients. Paul possesses a unique ability to balance his technical expertise with the requirements of his customers. He guides his customers towards their goals, while remaining flexible to the nuances of the project. 
                    <br/><br/>
                    Paul stepped into an unfinished project from a previous contractor that was far behind schedule. He focused us towards a release in no time. From there, he’s taken the project above and beyond where we expected to be. We have consistently striven towards creative and innovative approaches in order to surprise and delight our users, and Paul has been instrumental in making that happen. 
                    <br/><br/>
                    Despite project challenges, shifting scope and priorities, and tight deadlines, Paul maintains his positive approach to getting the work done. He has blended seamlessly into the team, contributing far more than just code. I am appreciative of how he supports each individual member of the team, in addition to the team’s overall project goals. 
                    <br/><br/>
                    I give Paul my highest recommendation. Hire him, and you’ll quickly find that Paul is a key component to your project’s success.
                  </q>
                  <p className="relative z-10"><br/>Dustin Guericke
                    <br/>
                    Director of Product Documentation at Lucidworks
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
