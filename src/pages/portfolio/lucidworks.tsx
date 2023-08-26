import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '../_app'
import Link from "next/link";
import { LayoutPortfolio } from '@/components/organisms/Layout'
import Image from 'next/image'
// import { ExternalButtonLink } from "@/components/atoms/ButtonLink/ButtonLink.component"
import ButtonLink, { ExternalButtonLink, buttonVariants } from "@/components/atoms/ButtonLink/ButtonLink.component"
import lucidworksImg from 'public/project-imgs/lucidworks-project.jpg'

function Lucidworks<NextPageWithLayout>() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between pt-32 md:pt-40 text-black">
        <div className=" px-6 md:px-10 lg:px-20">
          <div className="flex flex-col justify-between lg:flex-row-reverse">
            <div>
              <Image
                  src={lucidworksImg}
                  alt='lucidworks img'
                  className="row-start-3 md:col-end-7 md:col-start-4 md:row-start-1 md:row-end-5 lg:pl-8 md:w-full "
              />
            </div>
          
            {/* <ProjectHero> */}
              <div className="mt-8 lg:mt-[unset] lg:mr-8 lg:w-[40%]">
                <h1 className="text-2xl md:title-clamp md:mt-8">Lucidworks</h1>
                <section>
                  <h2 className="bg-[#333] text-color-300 pl-4 mt-8">About</h2>
                  <p className="my-8 ml-4">Revamp of Lucidworks documenation site. Interactive documentation built upon Gatsby.js sourced from asciidoc files and powered by internal tools from Lucidworks.</p>
                  {/* <ExternalButtonLink
                      to="www.doc.lucidworks.com"
                      display="primary"
                      variant={'whiteMain'}
                  >
                      View site
                  </ExternalButtonLink> */}
                   <ButtonLink
                        to="https://doc.lucidworks.com"
                        display="primary"
                        variant={'whiteMain'}
                        target="_blank"
                    >
                      View Site
                    </ButtonLink>
                </section>
                <section>
                <h2 className="bg-[#333] text-color-300 pl-4 mt-8">Tech</h2>
                  <ul className="my-8 ml-4">
                    <li>Gatsby.js</li>
                    <li>React</li>
                    <li>Styled Components</li>
                    <li>Radix UI</li>
                  </ul>
                </section>
              </div>
            {/* </ProjectHero> */}
          </div>

        </div>


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
                <p className="relative z-10">Dustin Guericke
                  <br/>
                  Director of Product Documentation at Lucidworks
                </p>
              </section>
          {/* </ReviewSection> */}

          <section className="my-40 md:my-60 w-full">

                  <h3 className="text-2xl mb-6 text-center px-6">Looking for help with your next project?</h3>

                  <div className="flex justify-center flex-col md:flex-row gap-8">
                    <ButtonLink
                        to="/#contact"
                        display="primary"
                        variant={'whiteMainLarge'}
                    >
                      contact now
                    </ButtonLink>
                    <ButtonLink
                        to="portfolio"
                        display="primary"
                        variant={'whiteMainSmall'}
                    >
                      view next project
                    </ButtonLink>
                  </div>
          </section>
      </main>
  )
}

Lucidworks.getLayout = function getLayout(page: ReactElement){
  return (
    <LayoutPortfolio>
      {page}
    </LayoutPortfolio>
  )
}

export default Lucidworks
