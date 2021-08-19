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
            <img
                src={photo.imageSrc}
                alt={photo.caption}
                className="object-cover cursor-pointer"
                style={{ width: '100%', aspectRatio: '1' }}
                onClick={screenToggle}
            />
            {isImageClicked && (
                <div
                    onClick={(e) => {
                        closeImage(e);
                    }}
                    className="flex justify-center w-screen pt-20 bg-gray-primary bg-opacity-50 absolute top-0 left-0 z-90"
                >
                    <div className="w-full max-w-screen-sm pb-8">
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
