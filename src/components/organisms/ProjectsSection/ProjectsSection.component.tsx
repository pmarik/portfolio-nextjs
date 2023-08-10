import Image from 'next/image'
import Link from "next/link"
import lucidworksImg from 'public/lucidworks-project.jpg'
import tradetrackerImg from 'public/trade-tracker-project.jpg'
import applecoreImg from 'public/applecore-project.jpg'


const ProjectsSection:React.FC = () => {
    return (
        <>
            <p className="pt-10 md:pt-20 bg-white w-full text-center text-color-400">Featured Projects</p>
            <div className="relative bg-white w-full px-6 md:px-10 lg:px-20 text-center md:text-left max-w-maximum  min-w-minimum ">
                <div className="text-gray-950 grid grid-cols-1 md:grid-cols-6 mt-10 mb-10 md:mt-20 md:mb-40 md:grid-rows-[repeat(3,auto)]">
                    <h2 className="text-2xl md:title-clamp row-start-1 mb-4 mt-8 col-start-1 col-end-3">Lucidworks</h2>
                    <p className="leading-relaxed col-start-1 col-end-4 row-start-2 md:row-start-2 md:pr-8 lg:pr-24 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <Link href='/portfolio/lucidworks' className="mt-8 md:mt-[unset] row-start-4 md:row-start-3 col-start-1 text-color-400 "><span className="border-b border-color-400">View Project</span></Link>
                    {/* <div className="border-l border-color-400 z-10 h-[100px] md:h-[150px] grid-cols-1 row-start-4 mt-7 mb-5"/> */}
                    <Image
                        src={lucidworksImg}
                        alt="lucidworks image"
                        className="row-start-3 md:col-end-7 md:col-start-4 md:row-start-1 md:row-end-5 md:pl-8 w-full "
                    />
                </div>

                <div className="text-gray-950 grid grid-cols-1 md:grid-cols-6 mt-10 mb-10 md:my-40 md:grid-rows-[repeat(3,auto)]">
                    <h2 className="text-2xl md:title-clamp row-start-1 mb-4 mt-8 col-start-1 col-end-3">Trade Tracker</h2>
                    <p className="leading-relaxed col-start-1 col-end-4 row-start-2 md:row-start-2 md:pr-8 lg:pr-24 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <Link href='/' className="mt-8 md:mt-[unset] row-start-4 md:row-start-3 col-start-1 text-color-400 "><span className="border-b border-color-400">View Project</span></Link>
                    {/* <div className="border-l border-color-400 z-10 h-[100px] md:h-[150px] grid-cols-1 row-start-4 mt-7 mb-5"/> */}
                    <Image
                        src={tradetrackerImg}
                        alt="placeholder Image"
                        className="row-start-3 md:col-end-7 md:col-start-4 md:row-start-1 md:row-end-5 md:pl-8 w-full"
                    />
                </div>

                <div className="text-gray-950 grid grid-cols-1 md:grid-cols-6 mt-10 mb-24 md:my-40 md:grid-rows-[repeat(3,auto)]">
                    <h2 className="text-2xl md:title-clamp row-start-1 mb-4 mt-8 col-start-1 col-end-3">Applecore</h2>
                    <p className="leading-relaxed col-start-1 col-end-4 row-start-2 md:row-start-2 md:pr-8 lg:pr-24 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <Link href='/' className="mt-8 md:mt-[unset] row-start-4 md:row-start-3 col-start-1 text-color-400 "><span className="border-b border-color-400">View Project</span></Link>
                    {/* <div className="border-l border-color-400 z-10 h-[100px] md:h-[150px] grid-cols-1 row-start-4 mt-7 mb-5"/> */}
                    <Image
                        src={applecoreImg}
                        alt="placeholder Image"
                        className="row-start-3 md:col-end-7 md:col-start-4 md:row-start-1 md:row-end-5 md:pl-8 w-full"
                    />
                </div>

            </div>
        </>
    )
}

export default ProjectsSection