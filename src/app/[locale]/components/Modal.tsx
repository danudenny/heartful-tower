'use client';

import { base64Img } from '@/app/dynamicBlurDataUrl';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from '../styles/ImagePopup.module.css';

const ImagePopup = ({ imageUrl, onClose }: any) => {
    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.popup}>
                <div className={styles.img_container}>
                    <Image
                        loader={() => imageUrl}
                        src={imageUrl}
                        alt="bg hero"
                        placeholder="blur"
                        blurDataURL={base64Img}
                        className={styles.img_popup}
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
            </div>
        </div>
    );
};
const Modal = () => {
    const [showPopup, setShowPopup] = useState(false);

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
            {showPopup && (
                <ImagePopup imageUrl={modalImage} onClose={closePopup} />
            )}
        </>
    );
};

export default Modal;
