import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ImageDetails from './ImageDetails';

export default function Image({ photo, profileUserInfo, photos, photoCounts }) {
    const [isImageClicked, setIsImageClicked] = useState(false);
    // const [nextPhoto, setNextPhoto] = useState(photos[photos.indexOf(photo) + 1]);
    // const [prevPhoto, setPrevPhoto] = useState(photos[photos.indexOf(photo) - 1]);
    const [currentPhoto, setCurrentPhoto] = useState(photo);

    const screenToggle = () => {
        setIsImageClicked((prevState) => !prevState);
        setCurrentPhoto(photo);
    };

    const closeImage = (e) => {
        if (e.target === e.currentTarget) {
            screenToggle();
        }
    };

    const showNextPhoto = () => {
        if (photos.length - 1 !== photos.indexOf(currentPhoto)) {
            setCurrentPhoto((prevState) => photos[photos.indexOf(prevState) + 1]);
        }
    };

    const showPrevPhoto = () => {
        if (photos.indexOf(currentPhoto) > 0) {
            setCurrentPhoto((prevState) => photos[photos.indexOf(prevState) - 1]);
        }
    };

    return photo ? (
        <>
            <div className="relative w-full" style={{ paddingTop: '100%' }}>
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
                    <button
                        onClick={showPrevPhoto}
                        className={`hidden md:flex text-gray-light absolute md:left-4 lg:left-20 xl:left-40 top-1/2 p-4 rounded opacity-60 hover:opacity-100 ${
                            photos.indexOf(currentPhoto) === 0 && 'md:hidden'
                        }`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={showNextPhoto}
                        className={`hidden md:flex text-gray-light absolute md:right-4 lg:right-20 xl:right-40 top-1/2 p-4 rounded opacity-60 hover:opacity-100 ${
                            photos.length - 1 === photos.indexOf(currentPhoto) && 'md:hidden'
                        }`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                    <div className="flex h-screen pb-4 sm:pb-0 sm:h-auto sm:max-h-screen relative max-w-screen-sm">
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

                        <ImageDetails photo={currentPhoto} profileUsername={profileUserInfo.username} />
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
    photos: PropTypes.array,
    photoCounts: PropTypes.number.isRequired,
};
