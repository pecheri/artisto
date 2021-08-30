import { useState, useEffect, useContext } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import Post from './post';
import UserContext from '../context/user';
import { getUserByUserId, getFollowingPhotosByUserId } from '../services/firebase';

export default function Timeline() {
    const [photos, setPhotos] = useState(null);

    const {
        user: { uid: userId },
    } = useContext(UserContext);

    useEffect(() => {
        async function getTimelinePhotos() {
            let result = null;
            while (!result) {
                [result] = await getUserByUserId(userId);
            }

            let followedUserPhotos = [];

            if (result.following.length > 0) {
                followedUserPhotos = await getFollowingPhotosByUserId(result.following, userId);
            } else {
                null;
            }
            followedUserPhotos.sort((a, b) => b.dateCreated - a.dateCreated);
            setPhotos(followedUserPhotos);
        }
        if (userId) {
            getTimelinePhotos();
        }
    }, [userId]);

    return (
        <div className="col-span-3 w-full mx-auto md:col-span-2">
            {!photos ? (
                <SkeletonTheme color="#494848" highlightColor="#F1F1F1">
                    <Skeleton count={4} width={640} height={500} />
                </SkeletonTheme>
            ) : photos.length > 0 ? (
                photos.map((photo) => <Post key={photo.docId} photo={photo} />)
            ) : (
                <p className="text-gray-light text-center pt-20">Follow artists to see photos!</p>
            )}
        </div>
    );
}
