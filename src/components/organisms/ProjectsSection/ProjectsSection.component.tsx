import MainProjectSlot from "@/components/molecules/MainProjectSlot/MainProjectSlot.component" 
import ButtonLink from "@/components/atoms/ButtonLink/ButtonLink.component"
import lucidworksImg from 'public/project-imgs/lucidworks-project.jpg'
import tradetrackerImg from 'public/project-imgs/trade-tracker-project.jpg'
import applecoreImg from 'public/project-imgs/applecore-project.jpg'


const ProjectsSection:React.FC = () => {

    return (
        <>
            <p id="projects" className="pt-10 md:pt-20 bg-white w-full text-center text-color-400">Featured Projects</p>
            <div className="relative bg-white w-full px-6 md:px-10 lg:px-20 text-center md:text-left max-w-maximum  min-w-minimum ">

                <MainProjectSlot
                    title='Lucidworks'
                    description='Revamp of Lucidworks documenation site. Interactive documentation built upon Gatsby.js sourced from asciidoc files and powered by internal tools from Lucidworks.'
                    link='/portfolio/lucidworks' 
                    img={lucidworksImg}
                    imgAlt='lucidworks image'
                />

                <MainProjectSlot
                    title="Trade Tracker"
                    description='Tracker Tracker is a project that aims to automate the tedious task of analyzing personal capital investments. Through interactive charts, notes, and habit-forming psychology, this project guides a user to steady consistency and performance in the markets'
                    link='/portfolio/trade-tracker'
                    img={tradetrackerImg}
                    imgAlt='trade tracker image'
                />

                <MainProjectSlot
                    title="Applecore"
                    description='Ecommerce site for the innovative cord organizer. Blazing fast Gatsby site utilizing the headless Shopify API with powerful animations and engaging user-flow.'
                    link='/portfolio/applecore'
                    img={applecoreImg}
                    imgAlt='applecore image'
                />

            </div>
            {/* <Link href='/portfolio' className="mt-8 md:mt-[unset] mb-40 row-start-4 md:row-start-3 col-start-1 text-color-400 "><span className="border-b border-color-400">View All Projects</span></Link> */}
            <div className="mt-8 md:mt-[unset] mb-40 row-start-4 md:row-start-3 col-start-1">
                <ButtonLink
                            to="/portfolio"
                            display="primary"
                            variant={'whiteMainSmall'}
                        >
                        View All Projects
                </ButtonLink>
            </div>
        </>
    )
}

export default ProjectsSection