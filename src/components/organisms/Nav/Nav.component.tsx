import Image from 'next/image'
import NavLinks from '@/components/molecules/NavLinks/NavLinks.component'

type NavProps = {
    classNames: string
}

const Nav:React.FC<NavProps> = ({
    classNames
}) => {
    return (
        <div className={`w-full absolute flex justify-between px-6 md:px-10 lg:px-20 py-10 z-20 ${classNames}`}>
            <div 
                className="picture-img-wrap w-[40px] md:w-[unset]"
            >
                <picture>
                    <source type="image/svg+xml" srcSet='/logoSmall.svg' media="(max-width: 768px)" />
                    <Image
                        src="/logo-script.svg"
                        alt="Marik Tech logo"
                        width={150}
                        height={24}
                    />
                </picture>
            </div>
            <NavLinks/>
        </div>
    )
}

export default Nav