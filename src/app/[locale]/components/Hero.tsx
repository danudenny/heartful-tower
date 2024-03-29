'use client';
import { useMediaQuery } from '@react-hook/media-query';
import axios from 'axios';
import { JP } from 'country-flag-icons/react/3x2';
import { AnimatePresence, motion } from 'framer-motion';
import { CldImage } from 'next-cloudinary';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaCircleInfo } from 'react-icons/fa6';
import { base64Img } from '../../dynamicBlurDataUrl';

interface HeroProps {
    reference: React.MutableRefObject<null>;
}

export const Hero = ({ reference }: HeroProps) => {
    const [desktopImg, setDesktopImg] = useState('');
    const [mobileImg, setMobileImg] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);

    const isMobile = useMediaQuery('only screen and (max-width: 500px)');

    useEffect(() => {
        axios
            .get('https://admin.heartfultower.com/api/hero-sections?populate=*')
            .then((response) => {
                const dsktpImg = `https://admin.heartfultower.com${response?.data.data[0].attributes.dekstop_img.data.attributes.url}`;
                const mbleImg = `https://admin.heartfultower.com${response?.data.data[0].attributes.mobile_img.data.attributes.url}`;
                setDesktopImg(dsktpImg);
                setMobileImg(mbleImg);
                setIsLoaded(true);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const t = useTranslations('Hero');
    const sendToWhatsapp = `https://wa.me/+6281119933099?text=${encodeURIComponent(
        'Terimakasih Telah Menghubungi Heartful Tower Bekasi. Tim Marketing Kami Akan Segera Menghubungi Anda.'
    )}`;

    // get parameters
    const params = useParams();
    const { locale } = params;
    const isJp = locale === 'jp';

    return (
        <AnimatePresence>
            <div
                className="relative flex flex-col pt-10 lg:pt-16 lg:flex-col lg:pb-0 h-screen"
                ref={reference}
            >
                {/* Load Image for mobile and desktop and add blur when loading images from strapi */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={isMobile ? mobileImg : desktopImg}
                        alt="Hero Image"
                        width={isMobile ? 1000 : 2000}
                        height={isMobile ? 1000 : 2000}
                        blurDataURL={base64Img}
                        placeholder="blur"
                        objectFit="cover"
                        className="w-full h-full"
                        onLoadingComplete={() => {
                            setIsLoaded(true);
                        }}
                    />
                    {isLoaded && (
                        <motion.div
                            className="absolute inset-0 bg-dark bg-opacity-70"
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                        />
                    )}
                </div>
                <motion.div
                    className="relative flex flex-col w-full max-w-xl px-4 pt-64 sm:pt-0 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl text-white"
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 300, opacity: 0 }}
                    transition={{
                        ease: 'linear',
                        duration: 1,
                        x: { duration: 1 },
                    }}
                >
                    <div className="flex">
                        <div className="mb-16 mt-20 lg:my-40 lg:max-w-full lg:pr-5">
                            <h2 className="mb-5 font-black text-4xl tracking-tight text-dark sm:text-8xl sm:leading-none shadow-white drop-shadow-xl">
                                The Desire
                                <br />
                                To
                                <span className="text-danger-dark italic">
                                    Thrive
                                </span>
                            </h2>
                            <p className="pr-5 text-dark md:text-lg lg:text-2xl drop-shadow-2xl shadow-gray-700">
                                {t('welcome')} <br />
                                {t('best_prices')}
                            </p>
                            <div className="flex mb-5 gap-2">
                                <p className="text-dark md:text-lg lg:text-2xl">
                                    {t('japan_developer')}
                                </p>
                                {!isJp && <JP width={30} height={30} />}
                            </div>

                            <div className="flex items-center mt-10 lg:text-2xl">
                                <a
                                    href={sendToWhatsapp}
                                    target="_blank"
                                    className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 shadow-md bg-dark hover:bg-success-alt focus:shadow-outline focus:outline-none"
                                >
                                    {t('get_information')}{' '}
                                    <FaCircleInfo className="ml-2" size={20} />
                                </a>
                            </div>
                        </div>
                        <div className="lg:ml-[1000px] lg:mt-[250px] absolute -mt-36">
                            <CldImage
                                alt="bg hero"
                                src="v1700476094/badge_hero-removebg-preview_rfxmui.png"
                                width={200}
                                height={200}
                                priority={true}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};
