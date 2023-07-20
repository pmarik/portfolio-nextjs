import ButtonLink from "@/components/atoms/ButtonLink/ButtonLink.component"
import Image from 'next/image'
import Orangebg from '@/assets/orange-jagged.svg'
import heroImg from 'public/paul-hero-4.png'

const HeroSection:React.FC = () => {
    return (
        <div className="relative grid grid-cols-1 md:grid-cols-12 grid-rows-6 w-full h-[105vh] bg-dark-gradient bg-cover px-6 md:pl-20 pt-5 md:pt-36 lg:px-20 jagged-after">
            <div className=" max-w-prose row-start-2 col-start-1 col-end-7">
                <h1 className="title-clamp font-bold tracking-widest mt-4">Full-Stack Development & User-Centered Design</h1>
                <p className="mt-6">I work with innovators to create and enhance websites that amplify business growth</p>
                <div className="flex space-x-8 mt-7">
                    <ButtonLink
                        to="#projects"
                        display="primary"
                    >
                        See my work
                    </ButtonLink>
                    <ButtonLink
                        to="#services"
                        display="secondary"
                    >
                        View Services
                    </ButtonLink>
                </div>
            </div>
            <div className="relative w-full z-10 col-start-1 md:col-start-6 col-end-13 row-start-1 row-end-7">
                <Image
                    src={heroImg}
                    alt="Marik Tech Hero Image"
                    fill={true}
                    priority
                    quality={100}
                    className="object-cover object-left-top"
                    sizes="50vw"
                    // unoptimized
                />
            </div>
            <Orangebg className="absolute top-0 right-0 w-full rotate-90 md:rotate-[unset] md:h-[105vh] md:w-[42vw]"/>
            <div className="border-r border-white z-10 h-2/3 col-end-13 row-start-1 row-end-7"/>
        </div>
    )
}

export default HeroSection