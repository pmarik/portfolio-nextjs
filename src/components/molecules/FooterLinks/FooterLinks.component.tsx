
import Link from "next/link"

const FooterLinks:React.FC = () => {
    return (
        <nav className="flex justify-between space-x-4 md:space-x-12 text-sm row-start-7 col-start-1 col-end-13 mt-20">
            <span>
                <Link href='/'>Terms of Services</Link>
                <Link href='/portfolio'>Privacy Policy</Link>
            </span>
            <aside>Marik Tech, LLC</aside>
        </nav>
    )
}

export default FooterLinks