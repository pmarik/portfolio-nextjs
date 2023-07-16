import ButtonLink from "@/components/atoms/ButtonLink/ButtonLink.component"
import Image from 'next/image'
import Orangebg from '@/assets/orange-jagged.svg'

const HeroSection:React.FC = () => {
    return (
        <div className="relative grid grid-cols-12 grid-rows-6 w-full h-screen bg-dark-gradient bg-cover px-20 pt-36">
            <div className="space-y-5 max-w-prose row-start-2 col-start-1 col-end-6">
                <h1 className="text-5xl font-bold">Full-Stack Development & User-Centered Design</h1>
                <p>I work with innovators to create and enhance websites that amplify business growth</p>
                <div className="flex">
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
            <div className="relative w-full z-10 col-start-5 col-end-13 row-start-1 row-end-7">
                <Image
                    src="/marik-tech-hero.png"
                    alt="Marik Tech Hero Image"
                    fill={true}
                    priority
                    className="object-contain"
                />
            </div>
            <Orangebg className="absolute top-0 right-0 h-screen w-[45vw]"/>
            <div className="border-r border-white z-10 h-2/3 col-end-13 row-start-1 row-end-7"/>
        </div>
    )
}

export default HeroSection