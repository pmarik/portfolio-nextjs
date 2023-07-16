"use client"

import Link from "next/link"

const NavLinks:React.FC = () => {
    return (
        <nav className="space-x-8">
            <Link href='/'>Home</Link>
            <Link href='/portfolio'>Portfolio</Link>
            <Link href='/contact'>Contact</Link>
        </nav>
    )
}

export default NavLinks