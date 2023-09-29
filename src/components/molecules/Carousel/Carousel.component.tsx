import React, { ReactNode, useCallback } from 'react' 
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import IconNext from '@/assets/next-arrow.svg'
import IconPrev from '@/assets/previous-arrow.svg'
// import { DotButton, useDotButton } from './EmblaCarouselDotButton'

interface CarouselProps {
    children?: ReactNode | string
}

const Carousel:React.FC<CarouselProps> = ({
    children
}) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, containScroll: 'trimSnaps' }, [Autoplay({delay: 10000})])

    
    // useEffect(() => {
    //     if (emblaApi) {
    //     console.log(emblaApi.slideNodes()) // Access API
    //     }
    // }, [emblaApi])

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
      }, [emblaApi])
    
      const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
      }, [emblaApi])

    // const onButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    //     const { autoplay } = emblaApi.plugins()
    //     if (!autoplay) return
    //     if (autoplay.options.stopOnInteraction !== false) autoplay.stop()
    //   }, [])
    
    //   const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    //     emblaApi,
    //     onButtonClick
    //   )

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {children}
                </div>
            </div>

            <button className="embla__prev mr-4 mt-2" onClick={scrollPrev} title="Previous Slide"><IconPrev/></button>
            <button className="embla__next" onClick={scrollNext} title="Next Slide"><IconNext/></button>
            {/* <div className="embla__dots">
                {scrollSnaps.map((_, index) => (
                <DotButton
                    key={index}
                    onClick={() => onDotButtonClick(index)}
                    className={'embla__dot'.concat(
                    index === selectedIndex ? ' embla__dot--selected' : ''
                    )}
                    aria-label='view carousel item button'
                />
                ))}
            </div> */}
        </div>
    )
}

export default Carousel