import Link from "next/link";
import React, { ReactNode } from 'react'
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
    "text-slate-50 py-2 px-6 sm:py-2 lg:py-4 md:px-8 lg:px-16 border relative block after:border-2 after:absolute  after:w-[10px] after:h-[10px] lg:after:w-[20px] lg:after:h-[20px] after:bg-transparent after:right-[5px] after:bottom-[5px] after:border-transparent after:duration-500",
    {
        variants: {
            variant: {
                default: "after:border-r-white after:border-b-white border-white",
                main: " after:border-r-color-300 after:border-b-color-300 border-color-300 text-color-300"
            }
        },
        defaultVariants: {
            variant: 'default'
        }
    }
)

type ButtonDisplay = "primary" | "secondary"

interface ButtonProps extends VariantProps<typeof buttonVariants> {
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
    display,
    variant,
    ...props
}) => {

   
    // return (
    //     <Link
    //         className={`border shadow-md max-w-xl rounded-sm bg-main-color-400 py-4 px-12 text-slate-950 hover:bg-color-500 transition-colors 
    //             ${getBtnDisplay(display)}
    //         `}
    //         href={to}
    //         target="_blank"
    //     >
    //         <span className="font-bold text-slate-50 ">{children}</span>
    //     </Link>
    // )


    // before:border-4
    // before:absolute
    // before:w-[30px]
    // before:h-[30px]
    // before:bg-transparent
    // before:top-[-7px]
    // before:left-[-7px]
    // before:border-transparent
    // before:border-t-indigo-500
    // before:border-l-indigo-500
    // before:duration-500


    return (
        <Link
            className={`
              
                ${getBtnDisplay(display)}
            `}
            href={to}
            target="_blank"
            {...props}
        >
            <span className={cn(buttonVariants({ variant }))}>
                {children}
            </span>
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
