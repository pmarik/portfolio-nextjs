import Image from 'next/image'
import lucidworksImg from 'public/lucidworks-square.jpg'
import tradetrackerImg from 'public/tradetracker-square.jpg'
import applecoreImg from 'public/applecore-square.jpg'
import daymakerImg from 'public/daymaker-square.jpg'
import unaffiliatedImg from 'public/unaffiliated-square.jpg'
import neovidaImg from 'public/neovida-square.jpg'
import viewerImg from 'public/viewer-square.jpg'

const ProjectsGrid:React.FC = () => {
    return (
        <div className="relative bg-white w-full px-6 md:px-10 lg:px-20 text-center md:text-left max-w-maximum  min-w-minimum 
            grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-[20px] object-cover mt-[200px]
        ">
            <div className=" bg-white">
                <Image
                        src={lucidworksImg}
                        alt="lucidworks image"
                        className="row-start-3 md:col-end-7 md:col-start-4 md:row-start-1 md:row-end-5 md:pl-8 w-full "
                    />
            </div>
            <div className=" bg-white">
                <Image
                        src={tradetrackerImg}
                        alt="lucidworks image"
                        className="row-start-3 md:col-end-7 md:col-start-4 md:row-start-1 md:row-end-5 md:pl-8 w-full "
                    />
            </div>
            <div className=" bg-white">
                <Image
                        src={applecoreImg}
                        alt="lucidworks image"
                        className="row-start-3 md:col-end-7 md:col-start-4 md:row-start-1 md:row-end-5 md:pl-8 w-full "
                    />
            </div>
            <div className=" bg-white">
                <Image
                        src={unaffiliatedImg}
                        alt="lucidworks image"
                        className="row-start-3 md:col-end-7 md:col-start-4 md:row-start-1 md:row-end-5 md:pl-8 w-full "
                    />
            </div>
            <div className=" bg-white">
                <Image
                        src={daymakerImg}
                        alt="lucidworks image"
                        className="row-start-3 md:col-end-7 md:col-start-4 md:row-start-1 md:row-end-5 md:pl-8 w-full "
                    />
            </div>
            <div className=" bg-white">
                <Image
                        src={neovidaImg}
                        alt="lucidworks image"
                        className="row-start-3 md:col-end-7 md:col-start-4 md:row-start-1 md:row-end-5 md:pl-8 w-full "
                    />
            </div>
            <div className=" bg-white">
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