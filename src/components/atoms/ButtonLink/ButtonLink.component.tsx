import Link from "next/link";
import React, { ReactNode } from 'react'



type ButtonDisplay = "primary" | "secondary"

interface ButtonProps {
    children?: ReactNode | string
    to: string
    display: ButtonDisplay
}

const getBtnDisplay = (display?: ButtonDisplay) => {
    switch(display){
        case "primary": 
            return "block text-center"
        case "secondary": 
            return "block text-center"
        default:
            return "inline-block"
    }
}

const ButtonLink: React.FC<ButtonProps> = ({
    children,
    to,
    display
}) => {

   
    return (
        <Link
            className={`shadow-md max-w-xl rounded-sm bg-main-color-400 py-4 px-12 text-slate-950 hover:bg-color-500 transition-colors 
                ${getBtnDisplay(display)}
            `}
            href={to}
            target="_blank"
        >
            <span className="font-bold text-slate-50 ">{children}</span>
        </Link>
    )
}


// export function ButtonSecondary({ children }: {children: string } ){
//     return (
//         <Link
//             className="inline-block shadow-md max-w-xl rounded-sm  py-4 px-12 text-slate-950 hover:bg-white/20"
//             href="https://create.t3.gg/en/introduction"
//             target="_blank"
//         >
//             <span className="font-bold text-slate-50 ">{children}</span>
//         </Link>
//     )
// }
//    // ${width === 'full' ? "block text-center" : 'inline-block '}


export default ButtonLink
