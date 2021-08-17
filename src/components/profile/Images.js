import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';

export default function Images({ profileUserInfo, photos }) {
    return (
        <div className="border-t-2 border-gray-dark my-8 pt-8">
            <div className="grid grid-cols-3 gap-8 items-center">
                {photos.map((photo, index) => (
                    <Image key={index} photo={photo} />
                ))}

                {/* <img src={photos[0].imageSrc} />
                <img src={photos[0].imageSrc} />
                <img src={photos[0].imageSrc} />
                <img src={photos[0].imageSrc} />
                <img src={photos[0].imageSrc} />
                <img src={photos[0].imageSrc} />
                <img src={photos[0].imageSrc} />
                <img src={photos[0].imageSrc} />
                <img src={photos[0].imageSrc} /> */}
            </div>
        </div>
    );
}
Images.propTypes = {
    profileUserInfo: PropTypes.shape({
        dateCreated: PropTypes.number,
        email: PropTypes.string,
        followers: PropTypes.array,
        following: PropTypes.array,
        fullName: PropTypes.string,
        userId: PropTypes.string,
        username: PropTypes.string,
        category: PropTypes.string,
        photo: PropTypes.string,
        title: PropTypes.string,
        bio: PropTypes.string,
    }),
    photos: PropTypes.array,
};
