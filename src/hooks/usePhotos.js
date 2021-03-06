import { useState, useEffect, useContext } from 'react';
import userContext from '../context/user';
import { getUserByUserId, getFollowingPhotosByUserId } from '../services/firebase';

export default function usePhotos() {
    const [photos, setPhotos] = useState(null);
    const {
        user: { uid: userId = '' },
    } = useContext(userContext);

    useEffect(() => {
        async function getTimelinePhotos() {
            const [{ following }] = await getUserByUserId(userId);
            let followedUserPhotos = [];

            if (following.length > 0) {
                followedUserPhotos = await getFollowingPhotosByUserId(following, userId);
            }
            followedUserPhotos.sort((a, b) => b.dateCreated - a.dateCreated);
            setPhotos(followedUserPhotos);
        }
        if (userId) {
            getTimelinePhotos();
        }
    }, [userId]);
    return { photos };
}
