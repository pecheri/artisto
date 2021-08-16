import React, { useEffect, useState, useContext } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import useUser from '../hooks/useUser';
import { getFollowingPhotosByUserId, getUserByUserId } from '../services/firebase';
import UserContext from '../context/user';
import Post from './post';
import usePhotos from '../hooks/usePhotos';

export default function Timeline() {
    const { user } = useContext(UserContext);
    // const { photos } = usePhotos();
    // console.log('photos', photos);
    // const [timelinePhotos, setTimelinePhotos] = useState(null);

    // useEffect(() => {
    //     const getTimelinePhotos = async () => {
    //         const [userInfo] = await getUserByUserId(user.uid);
    //         const { following } = userInfo;
    //         const result = await getFollowingPhotosByUserId(following, user.uid);
    //         setTimelinePhotos(result);
    //         console.log('result', result);
    //     };
    //     if (user?.uid) {
    //         getTimelinePhotos();
    //     }
    // }, [user]);

    const { photos } = usePhotos();

    console.log('photos', photos);

    return (
        <div className="col-span-2 container">
            {!photos ? (
                <SkeletonTheme color="#494848" highlightColor="#F1F1F1">
                    <Skeleton count={4} width={640} height={500} />
                </SkeletonTheme>
            ) : photos.length > 0 ? (
                photos.map((photo) => <Post key={photo.docId} photo={photo} />)
            ) : (
                <p>Follow artists to see photos!</p>
            )}
        </div>
    );
}
