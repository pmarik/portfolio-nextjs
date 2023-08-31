
import { useEffect, useRef } from 'react'
import PhoneGraphic from '@/assets/phoneGraphic.svg'
import QuoteGraphic from '@/assets/quoteGraphic.svg'
import Carousel from '@/components/molecules/Carousel'
import { motion, useInView, useAnimation } from 'framer-motion'


const ReviewSection:React.FC = () => {

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
        <div className="relative w-full py-12 md:py-40 px-6 md:px-10 lg:px-20 md:flex justify-between bg-white max-w-maximum  min-w-minimum ">
            <QuoteGraphic className="absolute left-0 top-[6rem]"/>
            <div className="md:flex mt-20 mb-5 text-slate-950 relative z-10 w-full ">
                <motion.div 
                    className="md:w-1/2 leading-relaxed"
                    ref={ref}
                    variants={{
                        start: { opacity: 0, y: 75 },
                        end: { opacity: 1, y: 0 }
                    }}
                    initial="start"
                    animate={mainControls}
                    transition={{
                        delay: 0.04
                    }}
                > 
                    <h2 className="md:title-clamp text-2xl row-start-1 mb-4">Client Reviews</h2>
                    <Carousel>
                        <div className="embla__slide pr-10">
                            <q className="mb-10  max-w-prose">
                                Paul possesses a unique ability to balance his technical expertise with the requirements of his customers. He guides his customers towards their goals, while remaining flexible to the nuances of the project.
                            </q>
                            <p className="font-bold">- Dustin Guericke <br/> Lucidworks director of Product documentation</p>
                        </div>
                        <div className="embla__slide pr-10">
                            <q className="mb-10  max-w-prose">
                                Working with Marik Tech was a perfect, easy solution for my small business. I built my own shopify website but certain items were very difficult to customize in the end. Paul was able to quickly diagnose web errors and within hours perform fixes that would have taken a full week of my time to research and implement. Marik Tech's professional services and flexibility has allowed me to focus on what I do best at Daymaker Touring rather than wasting countless hours in the rabit hole.
                            </q>
                            <p className="font-bold">- Giray Dadali <br/>  Co-founder Daymaker Touring</p>
                        </div>
                        <div className="embla__slide pr-10">
                            <q className="mb-10  max-w-prose">
                            Paul was quick to understand what my needs and priorities were. He was detail oriented and worked quickly to make the changes that I was looking for.
                            </q>
                            <p className="font-bold">- Zach Lastrilla <br/>  Co-founder Unaffiliated Productions</p>
                        </div>
                    </Carousel>
                </motion.div>
                <div className="md:w-1/2 overflow-visible block">
                    <PhoneGraphic className="overflow-visible w-[80%] m-auto md:ml-auto mt-8 pt-5"/>
                </div>
            </div>
        </div>
    )
}

export default ReviewSection