import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export default function Images({ profileUserInfo, photos, photoCounts, isUserLikedToggle, addNewComment, loading }) {
    return (
        <div className="border-t-2 border-gray-dark my-8 pt-8">
            <div className="grid grid-cols-3 gap-2 sm:gap-8 items-center">
                {loading ? (
                    <SkeletonTheme color="#494848" highlightColor="#F1F1F1">
                        <Skeleton count={1} width={300} height={300} />
                    </SkeletonTheme>
                ) : (
                    photos.map((photo, index) => (
                        <Image
                            key={index}
                            photo={photo}
                            profileUserInfo={profileUserInfo}
                            photos={photos}
                            photoCounts={photoCounts}
                            isUserLikedToggle={isUserLikedToggle}
                            addNewComment={addNewComment}
                        />
                    ))
                )}
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
    photoCounts: PropTypes.number.isRequired,
    isUserLikedToggle: PropTypes.func.isRequired,
    addNewComment: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
};
