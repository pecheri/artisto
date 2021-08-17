import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Post from '../post';

export default function Image({ photo }) {
    const [isImageClicked, setIsImageClicked] = useState(false);
    const screenToggle = () => {
        setIsImageClicked((prevState) => !prevState);
    };

    const closeImage = (e) => {
        if (e.target === e.currentTarget) {
            screenToggle();
        }
    };

    return (
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
                        <Post photo={photo} />
                    </div>
                </div>
            )}
        </>
    );
}

Image.propTypes = {
    photo: PropTypes.shape({ imageSrc: PropTypes.string, caption: PropTypes.string }),
};
