"use client"

import React, { ReactNode, useEffect, useCallback } from 'react' 
import useEmblaCarousel, {EmblaCarouselType} from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'

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

    const onButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
        const { autoplay } = emblaApi.plugins()
        if (!autoplay) return
        if (autoplay.options.stopOnInteraction !== false) autoplay.stop()
      }, [])
    
      const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
        emblaApi,
        onButtonClick
      )

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {children}
                </div>
            </div>

            <div className="embla__dots">
                {scrollSnaps.map((_, index) => (
                <DotButton
                    key={index}
                    onClick={() => onDotButtonClick(index)}
                    className={'embla__dot'.concat(
                    index === selectedIndex ? ' embla__dot--selected' : ''
                    )}
                />
                ))}
            </div>
        </div>
    )
}

export default Carousel