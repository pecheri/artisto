import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ImageDetails from './ImageDetails';
import useUser from '../../hooks/useUser';

export default function Image({ photo, profileUserInfo }) {
    const [isImageClicked, setIsImageClicked] = useState(false);
    // const [photoWithInfo, setPhotoWithInfo] = useState(null);

    // const {
    //     userInfo: { userId },
    // } = useUser();

    const screenToggle = () => {
        setIsImageClicked((prevState) => !prevState);
    };

    const closeImage = (e) => {
        if (e.target === e.currentTarget) {
            screenToggle();
        }
    };

    // useEffect(() => {
    //     const getPhotoWithDetails = () => {
    //         let userLikedPhoto = false;
    //         if (photo.likes.includes(userId)) {
    //             userLikedPhoto = true;
    //         }
    //         setPhotoWithInfo({ ...photo, userLikedPhoto, username: profileUserInfo.username });
    //     };
    //     if (photo && userId) {
    //         getPhotoWithDetails();
    //     }
    // }, [photo, userId]);

    return photo ? (
        <>
            <div className="relative w-full" style={{ paddingTop: '100%' }}>
                {/* <img
                    src={photo.imageSrc}
                    alt={photo.caption}
                    className="object-cover cursor-pointer"
                    style={{ width: '100%', aspectRatio: '1 / 1' }}
                    onClick={screenToggle}
                /> */}
                <img
                    src={photo.imageSrc}
                    alt={photo.caption}
                    className="object-cover cursor-pointer absolute top-0 left-0 right-0 bottom-0 w-full h-full"
                    onClick={screenToggle}
                />
            </div>
            {isImageClicked && (
                <div
                    onClick={(e) => {
                        closeImage(e);
                    }}
                    className="flex justify-center w-screen py-10 bg-gray-primary bg-opacity-70 fixed top-0 left-0 right-0 bottom-0 z-90"
                >
                    <div className="flex max-w-screen-sm h-screen pb-4 sm:pb-0 sm:h-auto sm:max-h-screen relative">
                        <button
                            onClick={screenToggle}
                            className=" absolute top-0 right-0 text-gray-primary md:-right-10 md:text-gray-light"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 md:h-10 md:w-10"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        <ImageDetails photo={photo} profileUsername={profileUserInfo.username} />
                    </div>
                </div>
            )}
        </>
    ) : null;
}

Image.propTypes = {
    photo: PropTypes.shape({
        imageSrc: PropTypes.string,
        caption: PropTypes.string,
        likes: PropTypes.array,
        userId: PropTypes.string,
    }),
    profileUserInfo: PropTypes.shape({
        username: PropTypes.string,
    }),
};
