
import Image from 'next/image'
// import lucidworksImg from 'public/lucidworks-square.jpg'
// import tradetrackerImg from 'public/tradetracker-square.jpg'
// import applecoreImg from 'public/applecore-square.jpg'

// ******************* 

// import lucidworksImg from 'public/project-imgs/lucidworks-project.jpg'
// import tradetrackerImg from 'public/project-imgs/trade-tracker-project.jpg'
// import applecoreImg from 'public/project-imgs/applecore-project.jpg'

// import daymakerImg from 'public/project-imgs/daymaker-square.jpg'
// import unaffiliatedImg from 'public/project-imgs/unaffiliated-square.jpg'
// import neovidaImg from 'public/project-imgs/neovida-square.jpg'
// import viewerImg from 'public/project-imgs/viewer-square.jpg'

import lucidworksImg from 'public/project-imgs/lucidworks-project-logo.jpg'
import tradetrackerImg from 'public/project-imgs/trade-tracker-project-logo.jpg'
import applecoreImg from 'public/project-imgs/applecore-project-logo.jpg'

import daymakerImg from 'public/project-imgs/daymaker-project-logo.jpg'
import unaffiliatedImg from 'public/project-imgs/unaffiliated-project-logo.jpg'
import neovidaImg from 'public/project-imgs/neovida-project-logo.jpg'
import viewerImg from 'public/project-imgs/3dviewer-project-logo.jpg'

import { useRouter } from 'next/navigation'

const ProjectsGrid:React.FC = () => {

    const router = useRouter()

    return (
        <div className="relative bg-white w-full px-6 md:px-10  text-center md:text-left max-w-maximum  min-w-minimum 
            grid grid-cols-[repeat(auto-fill,_minmax(380px,_1fr))] gap-[20px] object-cover py-40 h-full 
        ">
            <div title="Lucidworks" onClick={() => router.push('/portfolio/lucidworks')} className=" bg-white cursor-pointer transform transition duration-200 hover:scale-[1.02]">
                <Image
                        src={lucidworksImg}
                        alt="lucidworks image"
                        className="row-start-3 md:col-end-7 md:col-start-4 md:row-start-1 md:row-end-5 md:pl-8 w-full "
                    />
            </div>
            <div title="Trade Tracker" onClick={() => router.push('/portfolio/trade-tracker')} className=" bg-white cursor-pointer transform transition duration-200 hover:scale-[1.02]">
                <Image
                        src={tradetrackerImg}
                        alt="lucidworks image"
                        className="row-start-3 md:col-end-7 md:col-start-4 md:row-start-1 md:row-end-5 md:pl-8 w-full "
                    />
            </div>
            <div title="Applecore" onClick={() => router.push('/portfolio/applecore')} className=" bg-white cursor-pointer transform transition duration-200 hover:scale-[1.02]">
                <Image
                        src={applecoreImg}
                        alt="lucidworks image"
                        className="row-start-3 md:col-end-7 md:col-start-4 md:row-start-1 md:row-end-5 md:pl-8 w-full "
                    />
            </div>
            <div title="Unaffiliated" onClick={() => router.push('/portfolio/unaffiliated')} className=" bg-white cursor-pointer transform transition duration-200 hover:scale-[1.02]">
                <Image
                        src={unaffiliatedImg}
                        alt="lucidworks image"
                        className="row-start-3 md:col-end-7 md:col-start-4 md:row-start-1 md:row-end-5 md:pl-8 w-full "
                    />
            </div>
            <div title="Daymaker Touring" onClick={() => router.push('/portfolio/daymaker')} className=" bg-white cursor-pointer transform transition duration-200 hover:scale-[1.02]">
                <Image
                        src={daymakerImg}
                        alt="lucidworks image"
                        className="row-start-3 md:col-end-7 md:col-start-4 md:row-start-1 md:row-end-5 md:pl-8 w-full "
                    />
            </div>
            <div title="Neovida" onClick={() => router.push('/portfolio/neovida')} className=" bg-white cursor-pointer transform transition duration-200 hover:scale-[1.02]">
                <Image
                        src={neovidaImg}
                        alt="lucidworks image"
                        className="row-start-3 md:col-end-7 md:col-start-4 md:row-start-1 md:row-end-5 md:pl-8 w-full "
                    />
            </div>
            <div title="3D Viewer" onClick={() => router.push('/portfolio/3d-viewer')} className=" bg-white cursor-pointer transform transition duration-200 hover:scale-[1.02]">
                <Image
                        src={viewerImg}
                        alt="lucidworks image"
                        className="row-start-3 md:col-end-7 md:col-start-4 md:row-start-1 md:row-end-5 md:pl-8 w-full "
                    />
            </div>
        </div>
    )
}

export default ProjectsGrid