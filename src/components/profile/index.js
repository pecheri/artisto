import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProfileHeader from './ProfileHeader';
import Images from './Images';
import { getProfilePhotosbyUserId } from '../../services/firebase';
import useUser from '../../hooks/useUser';

export default function UserProfile({ profileUserInfo }) {
    const [photos, setPhotos] = useState(null);
    const [photoCounts, setPhotoCounts] = useState(0);

    const {
        userInfo: { userId },
    } = useUser();

    useEffect(() => {
        const getProfileUserPhotos = async () => {
            const result = await getProfilePhotosbyUserId(userId, profileUserInfo.userId, profileUserInfo.username);
            setPhotos(result.sort((a, b) => b.dateCreated - a.dateCreated));
            setPhotoCounts(result.length);
        };
        if (profileUserInfo?.userId && userId) {
            getProfileUserPhotos();
        }
    }, [profileUserInfo?.userId, userId]);

    return (
        <div className="max-w-screen-lg container mx-auto px-4">
            <ProfileHeader profileUserInfo={profileUserInfo} photos={photos} photoCounts={photoCounts} />
            {!photos ? null : photos.length > 0 ? (
                <Images profileUserInfo={profileUserInfo} photos={photos} photoCounts={photoCounts} />
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
