import React, { ReactNode, useRef } from 'react'
// import { useInView } from 'framer-motion'
import { LazyMotion, domAnimation, useInView } from 'framer-motion'
import classnames from 'classnames'

interface RevealOnScrollProps {
    children?: ReactNode | string
    className?: string
}

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
    children,
    className
}) => {

    const ref = useRef<HTMLDivElement | null>(null);

    const isInView = useInView(ref, {margin: "-20% 0px -50% 0px"})

    return (
        <LazyMotion features={domAnimation}>
            <div 
                ref={ref} 
                className={classnames(
                    `${className} transition-opacity duration-500`,
                    isInView ? 'opacity-100' : 'opacity-30'
                )}
            >
                {children}
            </div>
        </LazyMotion>
    )
}


export default RevealOnScroll
