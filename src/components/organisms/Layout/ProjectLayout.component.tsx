import { NextSeo } from 'next-seo'
import Image, { StaticImageData} from 'next/image'
import ButtonLink from "@/components/atoms/ButtonLink/ButtonLink.component"


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
          <div className=" px-6 md:px-10 lg:px-20">
            <div className="flex flex-col justify-between lg:flex-row-reverse">
              <div>
                <Image
                    src={img}
                    alt={`${title} product image`}
                    className="row-start-3 md:col-end-7 md:col-start-4 md:row-start-1 md:row-end-5 lg:pl-8 md:w-full "
                />
              </div>
            
              {/* <ProjectHero> */}
                <div className="mt-8 lg:mt-[unset] lg:mr-8 lg:w-[40%]">
                  <h1 className="text-2xl md:title-clamp md:mt-8">{title}</h1>
                  <section>
                    <h2 className="bg-[#333] text-color-300 pl-4 mt-8">About</h2>
                    <p className="my-8 ml-4">{description}</p>
                    <ButtonLink
                          to={link}
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
                      {tech.map(item => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </section>
                </div>
              {/* </ProjectHero> */}
            </div>
          </div>
          {children}

          <section className="my-40 md:my-60 w-full">
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



