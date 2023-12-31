import { NextSeo } from 'next-seo'
import Image, { StaticImageData} from 'next/image'
import ButtonLink from "@/components/atoms/ButtonLink/ButtonLink.component"
import Link from "next/link"
import { motion, useAnimation } from 'framer-motion'


export function ProjectLayout({
  title,
  description,
  link,
  tech,
  img,
  nextProjectLink,
  children
}: {
  children?: React.ReactNode,
  title: string,
  description: string,
  link: string,
  tech: string[],
  img: StaticImageData,
  nextProjectLink: string
}) {


  return (
    <>
        <NextSeo
          title={`Marik Tech | Portfolio | ${title}`}
          description="Boost your business with enhanced web development and design solutions from Marik Tech."
        />
        <main className="flex min-h-screen flex-col items-center justify-between pt-32 md:pt-40 text-black">
          <div className=" px-6 md:px-10 lg:px-20 max-w-maximum min-w-minimum">
            <div className="flex flex-col justify-between lg:flex-row-reverse">
              <motion.div
                  layoutId={title}
                  animate={{scale:1}}
                  layout
                //   transition={{
                //     layout: {
                //         duration: 0.3,
                //         type: 'spring',
                //     }
                // }}
              >
                <motion.span
                    layout='preserve-aspect'
                >
                  <Image
                      src={img}
                      alt={`${title} product image`}
                      className="row-start-3 md:col-end-7 md:col-start-4 md:row-start-1 md:row-end-5 lg:pl-8 overflow-hidden "
                      width={1510}
                      height={924}
                      quality={90}
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 40vw, 30vw"
                  />
                </motion.span>
              </motion.div>
            
              {/* <ProjectHero> */}
                <div className="mt-8 lg:mt-[unset] lg:mr-8 lg:w-[80%] text-focus-in">
                  <h1 className="text-2xl md:title-clamp md:mt-8">{title}</h1>
                  <section>
                    <h2 className="bg-[#333] text-color-300 pl-4 mt-8">About</h2>
                    <p className="my-7 ml-4 mb-3">{description}</p>
                    {/* <ButtonLink
                          to={link}
                          display="primary"
                          variant={'whiteMain'}
                          target="_blank"
                      >
                        View Site
                    </ButtonLink> */}
                    <Link href={link} target="_blank" className="ml-4 mt-8 md:mt-[unset] row-start-4 md:row-start-3 col-start-1 text-color-400 "><span className=" underline">View Site</span></Link>

                  </section>
                  <section>
                  <h2 className="bg-[#333] text-color-300 pl-4 mt-9">Tech</h2>
                    <ul className="my-7 ml-4">
                      {tech.map(item => (
                        <li className="inline mr-4" key={item}>{item}</li>
                      ))}
                    </ul>
                  </section>
                    {
                      children ? 
                        <div className="mt-4 md:max-w-[250px]">
                          <ButtonLink
                                  to="#review"
                                  display="primary"
                                  variant={'whiteMainSmall'}
                              >
                              See Review
                          </ButtonLink>
                        </div>
                        : 
                        null
                    }
                </div>
              {/* </ProjectHero> */}
            </div>
          </div>
          {children}

          <section className="my-40 md:my-60 w-full max-w-maximum min-w-minimum">
                  <h3 className="text-2xl mb-6 text-center px-6">Looking for help with your next project?</h3>

                  <div className="flex justify-center flex-col md:flex-row gap-8">
                    <ButtonLink
                        to="#contact"
                        display="primary"
                        variant={'whiteMainLarge'}
                    >
                      Contact Now
                    </ButtonLink>
                    <ButtonLink
                        to={nextProjectLink}
                        display="primary"
                        variant={'whiteMainSmall'}
                    >
                      View Next Project
                    </ButtonLink>
                  </div>
          </section>
        </main>
    </>
  )
}



