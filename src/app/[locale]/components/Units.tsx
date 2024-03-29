'use client';
import FsLightbox from 'fslightbox-react';
import { useTranslations } from 'next-intl';
import { Space_Grotesk } from 'next/font/google';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { base64Img } from '../../dynamicBlurDataUrl';

interface UnitsProps {
    reference: React.MutableRefObject<null>;
}

const space_grotesk = Space_Grotesk({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
});

export const Units = ({ reference }: UnitsProps) => {
    const t = useTranslations('Units');
    const [selectedTab, setSelectedTab] = useState('Studio');
    const [isMobile, setIsMobile] = useState(false);
    const [selectedImages, setSelectedImages] = useState<string[]>([]);
    const [toggler, setToggler] = useState(false);
    const [togglerTypicalFloor, setTogglerTypicalFloor] = useState(false);

    const tabs = ['Studio', '1 Bedroom', '2 Bedroom', '3 Bedroom'];

    const typicalFloorImages = [
        {
            src: 'https://res.cloudinary.com/killtdj/image/upload/f_auto/q_auto/v1698310443/Group_1171274738_t6aoo5.png',
        },
        {
            src: 'https://res.cloudinary.com/killtdj/image/upload/f_auto/q_auto/v1698403617/siteplan_l0bv9g.png',
        },
    ];

    const handleTabClick = (tab: string) => {
        setSelectedTab(tab);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 640);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const openLightbox = (imageSrcs: string[]) => {
        setSelectedImages(imageSrcs);
        setToggler(!toggler);
    };

    return (
        <div
            className="justify-center items-center flex flex-col space-y-4 p-4 md:p-8 lg:p-12 xl:p-16 2xl:p-24 h-2/3 bg-contour"
            ref={reference}
        >
            <div className="flex justify-start flex-col items-center">
                <h1 className="text-xl font-bold text-center text-dark uppercase sm:text-4xl">
                    {t('title')}
                </h1>
                <p
                    className={`text-md text-center my-4 w-3/5 ${space_grotesk.className}`}
                >
                    {t('p1')}
                </p>
            </div>

            {selectedImages && selectedTab === 'Studio' && (
                <FsLightbox toggler={toggler} sources={selectedImages} />
            )}
            {selectedImages && selectedTab === '1 Bedroom' && (
                <FsLightbox toggler={toggler} sources={selectedImages} />
            )}
            {selectedImages && selectedTab === '2 Bedroom' && (
                <FsLightbox toggler={toggler} sources={selectedImages} />
            )}
            {selectedImages && selectedTab === '3 Bedroom' && (
                <FsLightbox toggler={toggler} sources={selectedImages} />
            )}
            <div className="bg-tower dark:bg-gray-900 rounded-lg drop-shadow-2xl shadow-gray-700">
                <div className="px-6 pb-12 mx-auto">
                    <div className="mt-8 xl:mt-16 lg:flex lg:-mx-12">
                        <div className="lg:mx-12 flex justify-between flex-col">
                            <div className="mt-4 space-y-4 lg:mt-8 flex flex-col items-start">
                                {isMobile ? (
                                    <select
                                        value={selectedTab}
                                        onChange={(e) =>
                                            handleTabClick(e.target.value)
                                        }
                                        className="w-full py-2 px-3 bg-white text-[#333] rounded-full"
                                    >
                                        {tabs.map((tab) => (
                                            <option key={tab} value={tab}>
                                                {tab}
                                            </option>
                                        ))}
                                    </select>
                                ) : (
                                    <div className="flex flex-col items-start gap-4">
                                        {tabs.map((tab) => (
                                            <button
                                                key={tab}
                                                onClick={() =>
                                                    handleTabClick(tab)
                                                }
                                                className={`cursor-pointer ${
                                                    selectedTab === tab
                                                        ? 'text-[#73B153] font-bold'
                                                        : 'text-[#333]'
                                                }`}
                                            >
                                                {tab}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <button
                                onClick={() => setTogglerTypicalFloor(true)}
                                type="button"
                                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                            >
                                {t('typical_floor')}
                            </button>
                        </div>

                        <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
                            <div>
                                {selectedTab === 'Studio' && (
                                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-2 ">
                                        <div>
                                            <Image
                                                width={500}
                                                height={500}
                                                className="object-cover rounded-lg h-52 sm:h-96 cursor-pointer"
                                                src="https://res.cloudinary.com/killtdj/image/upload/f_auto/q_auto/v1697167094/heartful/unit/studio_j5ksb6.jpg"
                                                alt=""
                                                onClick={() =>
                                                    openLightbox([
                                                        'https://res.cloudinary.com/killtdj/image/upload/f_auto/q_auto/v1697167094/heartful/unit/studio_j5ksb6.jpg',
                                                        'https://res.cloudinary.com/killtdj/image/upload/f_auto/q_auto/v1699260187/Studio_fx1mlp.png',
                                                    ])
                                                }
                                                placeholder="blur"
                                                blurDataURL={base64Img}
                                            />
                                        </div>

                                        <div>
                                            <Image
                                                width={200}
                                                height={200}
                                                className="object-contain w-full rounded-lg h-52 sm:h-96 cursor-pointer"
                                                src="https://res.cloudinary.com/killtdj/image/upload/f_auto/q_auto/v1699260187/Studio_fx1mlp.png"
                                                alt=""
                                                onClick={() =>
                                                    openLightbox([
                                                        'https://res.cloudinary.com/killtdj/image/upload/f_auto/q_auto/v1699260187/Studio_fx1mlp.png',
                                                        'https://res.cloudinary.com/killtdj/image/upload/f_auto/q_auto/v1697167094/heartful/unit/studio_j5ksb6.jpg',
                                                    ])
                                                }
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div>
                                {selectedTab === '1 Bedroom' && (
                                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-2 ">
                                        <div>
                                            <Image
                                                width={500}
                                                height={500}
                                                className="object-cover rounded-lg h-52 sm:h-96 cursor-pointer"
                                                src="https://res.cloudinary.com/killtdj/image/upload/f_auto/q_auto/v1697167092/heartful/unit/1br_jjf5mx.jpg"
                                                alt=""
                                                onClick={() =>
                                                    openLightbox([
                                                        'https://res.cloudinary.com/killtdj/image/upload/f_auto/q_auto/v1697167092/heartful/unit/1br_jjf5mx.jpg',
                                                        'https://res.cloudinary.com/killtdj/image/upload/f_auto/q_auto/v1699260187/1_Bedroom_dyeigh.png',
                                                    ])
                                                }
                                            />
                                        </div>

                                        <div>
                                            <Image
                                                width={200}
                                                height={200}
                                                className="object-contain w-full rounded-lg h-52 sm:h-96 cursor-pointer"
                                                src="https://res.cloudinary.com/killtdj/image/upload/f_auto/q_auto/v1699260187/1_Bedroom_dyeigh.png"
                                                alt=""
                                                onClick={() =>
                                                    openLightbox([
                                                        'https://res.cloudinary.com/killtdj/image/upload/f_auto/q_auto/v1699260187/1_Bedroom_dyeigh.png',
                                                        'https://res.cloudinary.com/killtdj/image/upload/f_auto/q_auto/v1697167092/heartful/unit/1br_jjf5mx.jpg',
                                                    ])
                                                }
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div>
                                {selectedTab === '2 Bedroom' && (
                                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-2 ">
                                        <div>
                                            <Image
                                                width={500}
                                                height={500}
                                                className="object-cover rounded-lg h-52 sm:h-96 cursor-pointer"
                                                src="https://res.cloudinary.com/killtdj/image/upload/f_auto/q_auto/v1697167092/heartful/unit/2br_bdqnbv.jpg"
                                                alt=""
                                                onClick={() =>
                                                    openLightbox([
                                                        'https://res.cloudinary.com/killtdj/image/upload/f_auto/q_auto/v1697167092/heartful/unit/2br_bdqnbv.jpg',
                                                        'https://res.cloudinary.com/killtdj/image/upload/f_auto/q_auto/v1699260187/2_Bedroom_aalzsm.png',
                                                    ])
                                                }
                                            />
                                        </div>

                                        <div>
                                            <Image
                                                width={200}
                                                height={200}
                                                className="object-contain w-full rounded-lg h-52 sm:h-96 cursor-pointer"
                                                src="https://res.cloudinary.com/killtdj/image/upload/f_auto/q_auto/v1699260187/2_Bedroom_aalzsm.png"
                                                alt=""
                                                onClick={() =>
                                                    openLightbox([
                                                        'https://res.cloudinary.com/killtdj/image/upload/f_auto/q_auto/v1699260187/2_Bedroom_aalzsm.png',
                                                        'https://res.cloudinary.com/killtdj/image/upload/f_auto/q_auto/v1697167092/heartful/unit/2br_bdqnbv.jpg',
                                                    ])
                                                }
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div>
                                {selectedTab === '3 Bedroom' && (
                                    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-2 ">
                                        <div>
                                            <Image
                                                width={500}
                                                height={500}
                                                className="object-cover rounded-lg cursor-pointer"
                                                src="https://res.cloudinary.com/killtdj/image/upload/f_auto/q_auto/v1697167092/heartful/unit/3br_wts5o6.jpg"
                                                alt=""
                                                onClick={() =>
                                                    openLightbox([
                                                        'https://res.cloudinary.com/killtdj/image/upload/f_auto/q_auto/v1697167092/heartful/unit/3br_wts5o6.jpg',
                                                        'https://res.cloudinary.com/killtdj/image/upload/f_auto/q_auto/v1699260188/3_Bedroom_isrywl.png',
                                                    ])
                                                }
                                            />
                                        </div>

                                        <div>
                                            <Image
                                                width={200}
                                                height={200}
                                                className="object-contain w-full rounded-lg h-52 sm:h-96 cursor-pointer"
                                                src="https://res.cloudinary.com/killtdj/image/upload/f_auto/q_auto/v1699260188/3_Bedroom_isrywl.png"
                                                alt=""
                                                onClick={() =>
                                                    openLightbox([
                                                        'https://res.cloudinary.com/killtdj/image/upload/f_auto/q_auto/v1699260188/3_Bedroom_isrywl.png',
                                                        'https://res.cloudinary.com/killtdj/image/upload/f_auto/q_auto/v1697167092/heartful/unit/3br_wts5o6.jpg',
                                                    ])
                                                }
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Lightbox
                open={togglerTypicalFloor}
                close={() => setTogglerTypicalFloor(false)}
                slides={typicalFloorImages}
                styles={{ container: { backgroundColor: 'rgba(0, 0, 0, .8)' } }}
            />
        </div>
    );
};
