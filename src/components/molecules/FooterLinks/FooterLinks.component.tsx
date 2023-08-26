
import Link from "next/link"

const FooterLinks:React.FC = () => {
    return (
        <nav className="flex flex-col items-center md:flex-row align mb-12 justify-between space-x-4 md:mb-6 md:space-x-12 text-sm md:row-start-7 row-start-6 md:col-start-1 md:last:col-end-13 mt-20">
            <span>
                <Link href='/'>Terms of Services  &nbsp; &nbsp;| &nbsp; &nbsp; </Link>
                <Link href='/portfolio'>Privacy Policy</Link>
            </span>
            <aside>Marik Tech, LLC</aside>
        </nav>
    )
}

export default FooterLinks