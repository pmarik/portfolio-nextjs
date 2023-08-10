
import PhoneGraphic from '@/assets/phoneGraphic.svg'
import QuoteGraphic from '@/assets/quoteGraphic.svg'
import Carousel from '@/components/molecules/Carousel'

const ReviewSection:React.FC = () => {
    return (
        <div className="relative w-full py-12 md:py-40 px-6 md:px-10 lg:px-20 md:flex justify-between bg-white max-w-maximum  min-w-minimum ">
            <QuoteGraphic className="absolute left-0 top-[6rem]"/>
            <div className="md:flex mt-20 mb-5 text-slate-950 relative z-10 w-full ">
                <div className="md:w-1/2 leading-relaxed"> 
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
                                Paul possesses a unique ability to balance his technical expertise with the requirements of his customers. He guides his customers towards their goals, while remaining flexible to the nuances of the project.
                            </q>
                            <p>- Client Name</p>
                        </div>
                        <div className="embla__slide pr-10">
                            <q className="mb-10  max-w-prose">
                                Paul possesses a unique ability to balance his technical expertise with the requirements of his customers. He guides his customers towards their goals, while remaining flexible to the nuances of the project.
                            </q>
                            <p>- Client Name</p>
                        </div>
                    </Carousel>
                </div>
                <div className="md:w-1/2 overflow-visible block">
                    <PhoneGraphic className="overflow-visible w-[80%] m-auto md:ml-auto mt-8 pt-5"/>
                </div>
            </div>
        </div>
    )
}

export default ReviewSection