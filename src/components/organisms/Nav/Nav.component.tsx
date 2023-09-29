import Link from 'next/link'
import NavLinks from '@/components/molecules/NavLinks/NavLinks.component'

type NavProps = {
    classNames: string
    baseUrl: string
}

const Nav:React.FC<NavProps> = ({
    classNames,
    baseUrl
}) => {
    return (
        <div className={`w-full absolute flex justify-between right-0 left-0 px-6 md:px-10 lg:px-20 py-8 z-20 max-w-maximum  min-w-minimum m-[0_auto] ${classNames}`}>
            <div 
                className="picture-img-wrap w-[40px] md:w-[unset]"
            >
                <Link href='/' className="logoBig" >
                    <img src={`${baseUrl}/svgs/logo-script.svg`}  alt="Marik Tech" width="150px" height="24px"/>
                </Link>

                <Link href='/' className="logoSmall" >
                    <img src={`${baseUrl}/svgs/logoSmall.svg`}alt="Marik Tech" width="40px" height="28px" />
                </Link>
            
            </div>
            <NavLinks/>
        </div>
    )
}

export default Nav