import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import PropTypes from 'prop-types';
import Header from '../post/Header';
import Image from '../post/Image';
import Action from '../profile/Action';

export default function ImageDetails({ photo, isUserLikedToggle, addNewComment }) {
    return photo.username ? (
        <div className="bg-gray-light py-8 px-2 sm:px-8 mx-auto overflow-scroll rounded-sm">
            <Header userId={photo.userId} username={photo.username} caption={photo.caption} date={photo.dateCreated} />
            <Image imageSrc={photo.imageSrc} />
            <Action
                likes={photo.likes}
                userLikedPhoto={photo.userLikedPhoto}
                comments={photo.comments}
                docId={photo.docId}
                isUserLikedToggle={isUserLikedToggle}
                addNewComment={addNewComment}
                photo={photo}
            />
        </div>
    ) : (
        <SkeletonTheme color="#494848" highlightColor="#F1F1F1">
            <Skeleton count={1} width={600} height={600} />
        </SkeletonTheme>
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
    photos: PropTypes.object,
    isUserLikedToggle: PropTypes.func.isRequired,
    addNewComment: PropTypes.func.isRequired,
};
