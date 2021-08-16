import { firebase, FieldValue } from '../lib/firebase';

export async function doesUsernameExist(username) {
    const result = await firebase.firestore().collection('users').where('username', '==', username).get();
    console.log(result.docs.length > 0);
    return result.docs.length > 0;
}

export async function getUserByUserId(userId) {
    const result = await firebase.firestore().collection('users').where('userId', '==', userId).get();
    const user = result.docs.map((item) => ({
        ...item.data(),
        docId: item.id,
    }));
    return user;
}

export async function getFollowingPhotosByUserId(following, userId) {
    const result = await firebase.firestore().collection('photos').where('userId', 'in', following).get();
    const userFollowedPhotos = result.docs.map((photo) => ({
        ...photo.data(),
        docId: photo.id,
    }));
    const userFollowedPhotosWithDetails = await Promise.all(
        userFollowedPhotos.map(async (photo) => {
            let userLikedPhoto = false;
            if (photo.likes.includes(userId)) {
                userLikedPhoto = true;
            }
            const [userInfo] = await getUserByUserId(photo.userId);
            const { username } = userInfo;
            return {
                username,
                ...photo,
                userLikedPhoto,
            };
        })
    );
    return userFollowedPhotosWithDetails;
}
