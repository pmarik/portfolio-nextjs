import Image from 'next/image'
import NavLinks from '@/components/molecules/NavLinks/NavLinks.component'

const Nav:React.FC = () => {
    return (
        <div className="w-full bg-gray-400 flex justify-between px-20 py-4">
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