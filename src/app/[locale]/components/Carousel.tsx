import {
    imageAltByIndex,
    imageByIndex,
    imageTitleByIndex,
} from '@/app/datas/facilities_image';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel, {
    EmblaCarouselType,
    EmblaOptionsType,
} from 'embla-carousel-react';
import { CldImage } from 'next-cloudinary';
import React, { useCallback } from 'react';
import { base64Img } from '../../dynamicBlurDataUrl';
import {
    NextButton,
    PrevButton,
    usePrevNextButtons,
} from './CarouselArrowButton';
import { useDotButton } from './CarouselDotButton';

type PropType = {
    slides: number[];
    options?: EmblaOptionsType;
};

const Carousel: React.FC<PropType> = (props) => {
    const { slides, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

    const onButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
        const { autoplay } = emblaApi.plugins();
        if (!autoplay) return;
        if (autoplay.options.stopOnInteraction !== false) autoplay.stop();
    }, []);

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
        emblaApi,
        onButtonClick
    );

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi, onButtonClick);

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((index) => (
                        <div className="embla__slide" key={index}>
                            <div className="embla__slide__number">
                                <span>{imageTitleByIndex(index)}</span>
                            </div>
                            <CldImage
                                className="embla__slide__img"
                                src={imageByIndex(index)}
                                alt={imageAltByIndex(index)}
                                title={imageTitleByIndex(index)}
                                width={600}
                                height={600}
                                placeholder="blur"
                                blurDataURL={base64Img}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="bottom-0 flex justify-between cursor-pointer mb-[27px] bg-dark absolute">
                <PrevButton
                    onClick={onPrevButtonClick}
                    disabled={prevBtnDisabled}
                />
                <NextButton
                    onClick={onNextButtonClick}
                    disabled={nextBtnDisabled}
                />
            </div>
        </div>
    );
};

export default Carousel;
