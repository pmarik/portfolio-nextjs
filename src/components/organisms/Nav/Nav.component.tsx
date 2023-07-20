import Image from 'next/image'
import NavLinks from '@/components/molecules/NavLinks/NavLinks.component'

const Nav:React.FC = () => {
    return (
        <div className="w-full absolute flex justify-between px-6 md:px-20 py-10 z-20">
            <Image
                src="/logo-script.svg"
                alt="Marik Tech logo"
                width={150}
                height={24}
                priority
            />
            <NavLinks/>
        </div>
    )
}

export default Nav