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
            console.log('userId', userId);
            const [{ following }] = await getUserByUserId(userId);
            let followedUserPhotos = [];
            console.log('following', following);

            // does the user actually follow people?
            if (following.length > 0) {
                followedUserPhotos = await getFollowingPhotosByUserId(following, userId);
            }
            // re-arrange array to be newest photos first by dateCreated
            followedUserPhotos.sort((a, b) => b.dateCreated - a.dateCreated);
            setPhotos(followedUserPhotos);
        }
        if (userId) {
            getTimelinePhotos();
        }
    }, [userId]);
    return { photos };
}
