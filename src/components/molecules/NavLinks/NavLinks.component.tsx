"use client"

import Link from "next/link"
import { usePathname } from 'next/navigation';


const NavLinks:React.FC = () => {

    const currentRoute = usePathname();

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        // first prevent the default behavior
        e.preventDefault();
        // get the href and remove everything before the hash (#)
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, "");
        // get the element by id and use scrollIntoView
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
          behavior: "smooth",
        });
      };
    

    return (
        <nav className="space-x-2 md:space-x-4 lg:space-x-12 text-lg">
            <Link href='/' className={currentRoute === "/" ? "border-b-2 border-white": ""}>Home</Link>
            <Link href='/portfolio' className={currentRoute === "/portfolio" ? "border-b-2 border-white": ""}>Portfolio</Link>
            <a href='#contact' tabIndex={0} onClick={handleScroll}>Contact</a>
        </nav>
    )
}

export default NavLinks