import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProfileHeader from './ProfileHeader';
import Images from './Images';
import { getProfilePhotosbyUserId } from '../../services/firebase';
import useUser from '../../hooks/useUser';

export default function UserProfile({ profileUserInfo }) {
    const [photos, setPhotos] = useState(null);
    const [photoCounts, setPhotoCounts] = useState(0);
    const [loading, setLoading] = useState(false);
    console.log('photos', photos);

    const {
        userInfo: { userId },
    } = useUser();

    useEffect(() => {
        const getProfileUserPhotos = async () => {
            const result = await getProfilePhotosbyUserId(userId, profileUserInfo.userId, profileUserInfo.username);
            setPhotos(result.sort((a, b) => b.dateCreated - a.dateCreated));
            setPhotoCounts(result.length);
            setLoading(false);
        };
        if (profileUserInfo?.userId && userId) {
            setLoading(true);
            getProfileUserPhotos();
        }
    }, [profileUserInfo?.userId, userId]);

    const isUserLikedToggle = (currentPhoto, userId) => {
        const updatedPhotos = photos;
        // update userLIkedPhoto
        updatedPhotos[photos.indexOf(currentPhoto)].userLikedPhoto =
            !photos[photos.indexOf(currentPhoto)].userLikedPhoto;

        // update likeCounts
        const index = updatedPhotos[photos.indexOf(currentPhoto)].likes.indexOf(userId);
        if (index > -1) {
            updatedPhotos[photos.indexOf(currentPhoto)].likes.splice(index, 1);
        } else {
            updatedPhotos[photos.indexOf(currentPhoto)].likes.push(userId);
        }
        setPhotos(updatedPhotos);
    };

    const addNewComment = (currentPhoto, comment, userId, displayName) => {
        const updatedPhotos = photos;
        const currentPhotosComments = photos[photos.indexOf(currentPhoto)].comments;
        updatedPhotos[photos.indexOf(currentPhoto)].comments = [
            { comment, userId, displayName },
            ...currentPhotosComments,
        ];
        setPhotos(updatedPhotos);
    };

    return (
        <div className="max-w-screen-lg container mx-auto px-4">
            <ProfileHeader profileUserInfo={profileUserInfo} photos={photos} photoCounts={photoCounts} />
            {!photos ? null : photos.length > 0 ? (
                <Images
                    profileUserInfo={profileUserInfo}
                    photos={photos}
                    photoCounts={photoCounts}
                    isUserLikedToggle={isUserLikedToggle}
                    addNewComment={addNewComment}
                    loading={loading}
                />
            ) : (
                <div className="mt-8 border-t-2 border-gray-dark">
                    <p className="text-gray-light text-center pt-8">No Posts</p>
                </div>
            )}
        </div>
    );
}

UserProfile.propTypes = {
    profileUserInfo: PropTypes.object,
};
