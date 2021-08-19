import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProfileHeader from './ProfileHeader';
import Images from './Images';
import { getPhotosbyUserId } from '../../services/firebase';

export default function UserProfile({ profileUserInfo }) {
    const [photos, setPhotos] = useState(null);
    const [photoCounts, setPhotoCounts] = useState(0);

    useEffect(() => {
        const getProfileUserPhotos = async () => {
            const result = await getPhotosbyUserId(profileUserInfo.userId);
            setPhotos(result.sort((a, b) => b.dateCreated - a.dateCreated));
            setPhotoCounts(result.length);
        };
        if (profileUserInfo?.userId) {
            getProfileUserPhotos();
        }
    }, [profileUserInfo?.userId]);

    return (
        <div className="max-w-screen-lg container mx-auto px-4">
            <ProfileHeader profileUserInfo={profileUserInfo} photos={photos} photoCounts={photoCounts} />
            {!photos ? null : photos.length > 0 ? (
                <Images profileUserInfo={profileUserInfo} photos={photos} />
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
