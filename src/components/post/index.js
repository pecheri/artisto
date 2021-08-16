import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Image from './Image';
import Action from './Action';

export default function Post({ photo }) {
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

Post.propTypes = {
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
