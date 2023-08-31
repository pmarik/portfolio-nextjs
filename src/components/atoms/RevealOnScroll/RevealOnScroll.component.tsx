import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import classnames from 'classnames'

interface RevealOnScrollProps {
    children?: ReactNode | string
    className?: string
}

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
    children,
    className
}) => {

    // const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    const isInView = useInView(ref, {margin: "-20% 0px -50% 0px"})
  
    // useEffect(() => {

    //     const options = {
    //         rootMargin: '50px',
    //         threshold: 1.0
    //     }

    //     const scrollObserver = new IntersectionObserver(([entry]) => {
    //         if (entry.isIntersecting) {
    //             setIsVisible(true);
    //             // scrollObserver.unobserve(entry.target);
    //         } else {
    //             setIsVisible(false)
    //         }
    //     }, options);
  
    //     scrollObserver.observe(ref.current);
  
    //     return () => { 
    //         if (ref.current) {
    //             scrollObserver.unobserve(ref.current);
    //         }
    //     };
    // }, []);
  
    // const classes = `${className} transition-opacity duration-1000 
    //     ${isVisible ? "opacity-100" : "opacity-0"
    //     }`;

    return (
        <div 
            ref={ref} 
            className={classnames(
                `${className} transition-opacity duration-500`,
                isInView ? 'opacity-100' : 'opacity-30'
            )}
        >
            {children}
        </div>
    )
}


export default RevealOnScroll
