
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
          inline: "nearest"
        });
      };

    
      const matchRoute = currentRoute.startsWith("/portfolio")

    return (
        <nav className="space-x-2 md:space-x-4 lg:space-x-12 text-lg">
            <Link href='/' className={currentRoute === "/" ? "border-b border-white": ""}>Home</Link>
            <Link href='/portfolio' className={matchRoute ? "border-b border-color-300": ""}>Portfolio</Link>
            <a href='#contact' tabIndex={0} onClick={handleScroll}>Contact</a>
        </nav>
    )
}

export default NavLinks