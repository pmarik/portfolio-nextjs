import ButtonLink from "@/components/atoms/ButtonLink/ButtonLink.component"
import Image from 'next/image'
import Orangebg from '@/assets/orange-jagged.svg'
import heroImg from 'public/paul-hero-4.png'

const HeroSection:React.FC = () => {
    return (
        <div className="relative grid overflow-hidden grid-cols-1 md:grid-cols-12 grid-rows-6 w-full max-h-[900px] h-[105vh] bg-dark-gradient bg-cover pl-6 md:pl-10 lg:pl-20 pt-5 md:pt-36 lg:px-20 min-h-[850px] lg:max-h-[1050px] lg:min-h-[700px] jagged-after max-w-maximum min-w-minimum ">
            <div className=" max-w-prose row-start-2 col-start-1 col-end-7 z-20 pr-6 md:pr-[unset]">
                <h1 className="text-2xl md:title-clamp font-bold tracking-widest mt-4 text-center md:text-left">Full-Stack Development & User-Centered Design</h1>
                <p className="mt-5 text-center md:text-left leading-relaxed" >I work with innovators to create and enhance websites that amplify business growth</p>
                <div className="flex space-x-8 mt-11 justify-center md:justify-start">
                    <ButtonLink
                        to="#projects"
                        display="primary"
                        variant={'main'}
                    >
                        See my work
                    </ButtonLink>
                    <ButtonLink
                        to="#services"
                        display="secondary"
                        variant={'default'}
                    >
                        View Services
                    </ButtonLink>
                </div>
            </div>
            <div className="relative w-full z-10 col-start-1 md:col-start-6 col-end-13 row-start-4 md:row-start-1 row-end-7">
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
            <Orangebg className="absolute w-full  top-[50%] bottom-[-35vh] md:bottom-[unset] md:top-0 right-0 rotate-90 md:rotate-[unset] md:h-[105vh] md:w-[42vw]"/>
            <div className="md:border-r md:border-white md:z-10 md:h-2/3 md:col-end-13 md:row-start-1 md:row-end-7"/>
        </div>
    )
}

export default HeroSection