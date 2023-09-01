
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
import { motion } from 'framer-motion'

import { useRouter } from 'next/navigation'

const gridData = [
    {
        title: 'Lucidworks',
        destination: '/portfolio/lucidworks',
        layoutId: 'Lucidworks',
        img: lucidworksImg,
        alt: 'Lucidworks product image'
    },
    {
        title: 'Trade Tracker',
        destination: '/portfolio/trade-tracker',
        layoutId: 'Trade Tracker',
        img: tradetrackerImg,
        alt: 'Trade Tracker product image'
    },
    {
        title: 'Applecore',
        destination: '/portfolio/applecore',
        layoutId: 'Applecore',
        img: applecoreImg,
        alt: 'Applecore product image'
    },
    {
        title: 'Unaffiliated',
        destination: '/portfolio/unaffiliated',
        layoutId: 'Unaffiliated Productions',
        img: unaffiliatedImg,
        alt: 'Unaffiliated product image'
    },
    {
        title: 'Daymaker Touring',
        destination: '/portfolio/daymaker',
        layoutId: 'Daymaker Touring',
        img: daymakerImg,
        alt: 'Daymaker product image'
    },
    {
        title: 'Neovida',
        destination: '/portfolio/neovida',
        layoutId: 'Neovida',
        img: neovidaImg,
        alt: 'Neovida product image'
    },
    {
        title: '3D Viewer',
        destination: '/portfolio/3dviewer',
        layoutId: '3D Viewer',
        img: viewerImg,
        alt: '3D viewer product image'
    }
]

const ProjectsGrid:React.FC = () => {

    const router = useRouter()

    return (
        <div className="relative bg-white w-full px-6 md:px-20  text-center md:text-left max-w-maximum  min-w-minimum 
            grid grid-cols-[repeat(auto-fill,_minmax(380px,_1fr))] gap-[20px] object-cover py-40 h-full 
        ">
            {
                gridData.map(item => 
                    <motion.div
                        // layoutRoot
                        // layoutScroll
                        layout='preserve-aspect'
                        layoutId={item.layoutId}
                        title={item.title}
                        whileHover={{scale: 1.02}}
                        onClick={() => router.push(item.destination)} 
                        initial={{
                            width: '100%'
                        }} 
                        className=" bg-white cursor-pointer "
                        key={item.title}
                    >
                        <motion.span
                            layout='preserve-aspect'
                        >
                            <Image
                                src={item.img}
                                alt={item.alt}
                                className="row-start-3 md:col-end-7 md:col-start-4 md:row-start-1 md:row-end-5 w-full"
                            />
                        </motion.span>
                    </motion.div>
                )
            }
        </div>
    )
}

export default ProjectsGrid
