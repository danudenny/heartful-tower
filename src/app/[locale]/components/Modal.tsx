'use client';

import { base64Img } from '@/app/dynamicBlurDataUrl';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from '../styles/ImagePopup.module.css';

const Modal = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    const openPopup = () => {
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    useEffect(() => {
        setTimeout(() => {
            openPopup();
        }, 2000);

        return () => closePopup();
    }, []);

    const modalImage =
        'https://res.cloudinary.com/killtdj/image/upload/c_limit,w_600/f_auto/q_80/v1699364871/WhatsApp_Image_2023-11-07_at_1.15.21_PM_shjxzg.jpg';

    return (
        <>
            {/* Set blurDataUrl when image is loading */}
            {showPopup && (
                <div className={styles.overlay} onClick={closePopup}>
                    <div className={styles.popup}>
                        <div className={styles.img_container}>
                            <Image
                                src={modalImage}
                                alt="modal image"
                                layout="fill"
                                objectFit="contain"
                                className={styles.img_popup}
                                onLoad={() => setIsLoaded(true)}
                                placeholder="blur"
                                blurDataURL={base64Img}
                            />
                        </div>
                    </div>
                </div>
            )}
            <Image
                src={modalImage}
                alt="modal image"
                layout="fill"
                objectFit="cover"
                className={styles.modalImage}
                onLoad={() => setIsLoaded(true)}
                placeholder="blur"
                blurDataURL={base64Img}
            />
        </>
    );
};

export default Modal;
