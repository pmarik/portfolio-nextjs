import ButtonLink from "@/components/atoms/ButtonLink/ButtonLink.component"
import Image from 'next/image'

const HeroSection:React.FC = () => {
    return (
        <div className="flex justify-between w-full h-screen bg-hero-img bg-cover px-20 pt-36">
            <div className="space-y-5 max-w-prose">
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
            <div className="relative w-full">
                <Image
                    src="/marik-tech-hero.png"
                    alt="Marik Tech Hero Image"
                    // width={467}
                    // height={488}
                    fill={true}
                    priority
                    className="object-contain"
                />
            </div>
        </div>
    )
}

export default HeroSection