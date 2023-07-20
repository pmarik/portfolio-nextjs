import Image from 'next/image'
import Link from "next/link"
import placeholderImg from 'public/placeholder.jpg'

const ProjectsSection:React.FC = () => {
    return (
        <div className="relative bg-white w-full px-6 md:px-20 py-12 text-center md:text-left">
            <div className="text-gray-950 grid grid-cols-1 md:grid-cols-6 my-40 md:grid-rows-[repeat(3,auto)]">
                <h2 className="title-clamp row-start-1">placeholder</h2>
                <p className="col-start-1 col-end-4 row-start-2 md:row-start-2 md:pr-8 lg:pr-24">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <Link href='/' className=" row-start-4 md:row-start-3 col-start-1 text-color-400">Home</Link>
                <Image
                    src={placeholderImg}
                    alt="placeholder Image"
                    className="row-start-3 md:col-end-7 md:col-start-4 md:row-start-1 md:row-end-5 md:pl-8 w-full md:border-l-[1px] md:border-color-400"
                />
            </div>

            <div className="text-gray-950 grid grid-cols-1 md:grid-cols-6 my-40 md:grid-rows-[repeat(3,auto)]">
                <h2 className="title-clamp row-start-1">placeholder</h2>
                <p className="col-start-1 col-end-4 row-start-2 md:row-start-2 md:pr-8 lg:pr-24">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <Link href='/' className=" row-start-4 md:row-start-3 col-start-1 text-color-400">Home</Link>
                <Image
                    src={placeholderImg}
                    alt="placeholder Image"
                    className="row-start-3 md:col-end-7 md:col-start-4 md:row-start-1 md:row-end-5 md:pl-8 w-full md:border-l-[1px] md:border-color-400"
                />
            </div>

            <div className="text-gray-950 grid grid-cols-1 md:grid-cols-6 my-40 md:grid-rows-[repeat(3,auto)]">
                <h2 className="title-clamp row-start-1">placeholder</h2>
                <p className="col-start-1 col-end-4 row-start-2 md:row-start-2 md:pr-8 lg:pr-24">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <Link href='/' className=" row-start-4 md:row-start-3 col-start-1 text-color-400">Home</Link>
                <Image
                    src={placeholderImg}
                    alt="placeholder Image"
                    className="row-start-3 md:col-end-7 md:col-start-4 md:row-start-1 md:row-end-5 md:pl-8 w-full md:border-l-[1px] md:border-color-400"
                />
            </div>

        </div>
    )
}

export default ProjectsSection