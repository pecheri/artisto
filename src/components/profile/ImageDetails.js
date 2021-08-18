import React from 'react';
import PropTypes from 'prop-types';
import Header from '../post/Header';
import Image from '../post/Image';
import Action from '../post/Action';

export default function ImageDetails({ photo }) {
    return (
        <div className="bg-gray-light py-8 px-16 mb-8">
            <Header userId={photo.userId} username={photo.username} caption={photo.caption} date={photo.dateCreated} />
            <Image imageSrc={photo.imageSrc} />
            <Action
                likes={photo.likes}
                userLikedPhoto={photo.userLikedPhoto}
                comments={photo.comments}
                docId={photo.docId}
            />
        </div>
    );
}

ImageDetails.propTypes = {
    photo: PropTypes.shape({
        caption: PropTypes.string.isRequired,
        comments: PropTypes.array.isRequired,
        dateCreated: PropTypes.number.isRequired,
        docId: PropTypes.string.isRequired,
        imageSrc: PropTypes.string.isRequired,
        likes: PropTypes.array.isRequired,
        photoId: PropTypes.string.isRequired,
        userId: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        userLikedPhoto: PropTypes.bool.isRequired,
    }),
};
