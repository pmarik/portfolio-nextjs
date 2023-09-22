
import { useEffect, useRef } from 'react'
import { StaticImageData } from "next/image"
import Image from 'next/image'
import Link from "next/link"
import { useRouter } from 'next/navigation'
// import { motion, useInView, useAnimation } from 'framer-motion'
import { LazyMotion, domAnimation, m, useInView, useAnimation } from 'framer-motion'

type MainProjectSlotProps = {
    title: string
    description: string
    link: string
    img: StaticImageData
    imgAlt: string
}


const MainProjectSlot:React.FC<MainProjectSlotProps> = ({
    title,
    description,
    link,
    img,
    imgAlt
}) => {

    const router = useRouter()

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.5 })

    const mainControls = useAnimation();

    useEffect(() => {
        //  console.log({isInView})
        if(isInView){
            // mainControls.start("hidden")
            mainControls.start('end')
        }
    }, [isInView])

    return (
        <LazyMotion features={domAnimation}>
        <m.div 
            // <motion.div 
                ref={ref} 
                className="text-gray-950 grid grid-cols-1 md:grid-cols-6 mt-10 mb-10 md:mt-20 md:mb-40 md:grid-rows-[repeat(3,auto)]"
                variants={{
                    start: { opacity: 0, y: 75},
                    end: { opacity: 1, y: 0 }
                }}
                initial="start"
                animate={mainControls}
                transition={{
                    delay: 0.04
                }}
            >
                <h2 className="text-2xl md:title-clamp row-start-1 mb-4 mt-8 col-start-1 col-end-3">{title}</h2>
                <p className="leading-relaxed col-start-1 col-end-4 row-start-2 md:row-start-2 md:pr-8 lg:pr-24 mb-4">{description}</p>
                <Link scroll={false} href={link} className="mt-8 md:mt-[unset] row-start-4 md:row-start-3 col-start-1 text-color-400 "><span className=" underline">View Project</span></Link>
                {/* <div className="border-l border-color-400 z-10 h-[100px] md:h-[150px] grid-cols-1 row-start-4 mt-7 mb-5"/> */}
                <Image
                    src={img}
                    alt={imgAlt}
                    className="row-start-3 md:col-end-7 md:col-start-4 md:row-start-1 md:row-end-5 md:pl-8 w-full cursor-pointer transform transition duration-200 hover:scale-[1.02]"
                    onClick={() => router.push(link)} 
                    quality={95}
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 40vw, 30vw"
                />
             {/* </motion.div> */}
            </m.div>
        </LazyMotion>
    )
}

export default MainProjectSlot