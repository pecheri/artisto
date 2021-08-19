import { firebase, FieldValue } from '../lib/firebase';
import Axios from 'axios';
const cloudName = `${process.env.REACT_APP_CLOUD_NAME}`;
const presets = `${process.env.REACT_APP_PRESETS}`;

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

export async function getLatestPhotoInfo(photoId, userId, profileUsername) {
    const result = await firebase.firestore().collection('photos').where('photoId', '==', photoId).get();
    const [photoWithDetails] = await result.docs.map((photo) => ({
        ...photo.data(),
        docId: photo.id,
    }));
    console.log(photoWithDetails);
    let userLikedPhoto = false;
    if (photoWithDetails.likes.includes(userId)) {
        userLikedPhoto = true;
    }
    return { ...photoWithDetails, userLikedPhoto, username: profileUsername };
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

// export async function updateProfile(docId, fullName, category, title, bio) {
//     firebase.firestore().collection('users').doc(docId).update({
//         fullName,
//         category,
//         title,
//         bio,
//     });
// }

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

export async function getSearchResults(category) {
    const result = await firebase.firestore().collection('users').where('category', '==', category).get();
    const users = result.docs.map((item) => ({
        ...item.data(),
        docId: item.id,
    }));
    console.log(users);
    return users;
}

export async function updateProfilePhoto(imageFile) {
    let url = '';
    const formData = new FormData();
    formData.append('file', imageFile[0]);
    formData.append('upload_preset', presets);
    formData.append('cloud_name', 'test');

    Axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, formData)
        // .then((response) => console.log('response', response))
        .then(({ data }) => {
            console.log(JSON.stringify(data.secure_url));
            url = JSON.stringify(data.secure_url);
            console.log('url', url);
        });
    return url;
}

export async function updateProfile(docId, fullName, category, title, bio, imageFile) {
    if (imageFile) {
        let url = '';
        const formData = new FormData();
        formData.append('file', imageFile[0]);
        formData.append('upload_preset', presets);

        await Axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, formData).then(({ data }) => {
            url = data.secure_url;
            console.log('url', url);
        });

        firebase.firestore().collection('users').doc(docId).update({
            fullName,
            category,
            title,
            bio,
            photo: url,
        });
    } else {
        firebase.firestore().collection('users').doc(docId).update({
            fullName,
            category,
            title,
            bio,
        });
    }
}

export async function uploadNewPost(caption, imageFile, userId) {
    let url = '';
    const formData = new FormData();
    formData.append('file', imageFile[0]);
    formData.append('upload_preset', presets);

    await Axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, formData).then(({ data }) => {
        url = data.secure_url;
        console.log('url', url);
    });

    await firebase
        .firestore()
        .collection('photos')
        .add({
            caption,
            comments: [],
            dateCreated: Date.now(),
            imageSrc: url,
            likes: [],
            photoId: userId + Date.now(),
            userId,
            userLatitude: 34.0522,
            userLongitude: -188.2437,
        });
}
