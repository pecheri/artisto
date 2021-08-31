import React, { useState, useEffect } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import PropTypes from 'prop-types';
import Header from '../post/Header';
import Image from '../post/Image';
import Action from '../post/Action';
import useUser from '../../hooks/useUser';
import { getLatestPhotoInfo } from '../../services/firebase';

export default function ImageDetails({ photo, profileUsername }) {
    const [photoWithDetails, setPhotoWithDetails] = useState(null);

    const {
        userInfo: { userId },
    } = useUser();

    useEffect(() => {
        const latestPhotoInfo = async () => {
            const result = await getLatestPhotoInfo(photo.photoId, userId, profileUsername);
            setPhotoWithDetails(result);
        };
        if (userId && photo) {
            latestPhotoInfo();
        }
    }, [userId, photo]);

    return photoWithDetails?.username ? (
        <div className="bg-gray-light py-8 px-2 sm:px-8 mx-auto overflow-scroll rounded-sm">
            <Header
                userId={photoWithDetails.userId}
                username={photoWithDetails.username}
                caption={photoWithDetails.caption}
                date={photoWithDetails.dateCreated}
            />
            <Image imageSrc={photoWithDetails.imageSrc} />
            <Action
                likes={photoWithDetails.likes}
                userLikedPhoto={photoWithDetails.userLikedPhoto}
                comments={photoWithDetails.comments}
                docId={photoWithDetails.docId}
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
    profileUsername: PropTypes.string.isRequired,
};
