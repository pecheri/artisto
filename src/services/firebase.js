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

export async function getUserByUsername(username) {
    const result = await firebase.firestore().collection('users').where('username', '==', username).get();
    const user = result.docs.map((item) => ({
        ...item.data(),
        docId: item.id,
    }));
    return user;
}

export async function IsUserFollowingProfileUser(username, profileUserId) {
    const result = await firebase
        .firestore()
        .collection('users')
        .where('username', '==', username)
        .where('following', 'array-contains', profileUserId)
        .get();
    const [response = {}] = result.docs.map((item) => ({
        ...item.data(),
        docId: item.id,
    }));
    return response.userId;
    // if (user.following.includes(profileUserId)) {
    //     return true;
    // } else {
    //     return false;
    // }
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

export async function getPhotosbyUserId(userId) {
    const result = await firebase.firestore().collection('photos').where('userId', '==', userId).get();
    const photos = result.docs.map((photo) => ({
        ...photo.data(),
        docId: photo.id,
    }));
    return photos;
}

export async function updateUserFollowing(userDocId, profileUserId, isUserFollowing) {
    firebase
        .firestore()
        .collection('users')
        .doc(userDocId)
        .update({
            following: isUserFollowing ? FieldValue.arrayRemove(profileUserId) : FieldValue.arrayUnion(profileUserId),
        });
}

export async function updateProfileUserFollowers(profileUserDocId, userId, isUserFollowing) {
    firebase
        .firestore()
        .collection('users')
        .doc(profileUserDocId)
        .update({
            followers: isUserFollowing ? FieldValue.arrayRemove(userId) : FieldValue.arrayUnion(userId),
        });
}

export async function toggleFollow(userDocId, userId, profileUserDocId, profileUserId, isUserFollowing) {
    await updateUserFollowing(userDocId, profileUserId, isUserFollowing);
    await updateProfileUserFollowers(profileUserDocId, userId, isUserFollowing);
}

export async function updateProfile(docId, fullName, category, title, bio) {
    firebase.firestore().collection('users').doc(docId).update({
        fullName,
        category,
        title,
        bio,
    });
}

export async function getFollowingOrFollowersList(userIds) {
    const result = await Promise.all(
        userIds.map(async (userId) => {
            const [userList] = await getUserByUserId(userId);
            console.log('userList', userList);
            return userList;
        })
    );
    console.log('result', result);
    return result;
}
