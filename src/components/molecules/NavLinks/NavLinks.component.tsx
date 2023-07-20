"use client"

import Link from "next/link"

const NavLinks:React.FC = () => {
    return (
        <nav className="space-x-4 md:space-x-12 text-lg">
            <Link href='/'>Home</Link>
            <Link href='/portfolio'>Portfolio</Link>
            <Link href='/contact'>Contact</Link>
        </nav>
    )
}

export default NavLinks