import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useUser from '../../hooks/useUser';
import { IsUserFollowingProfileUser } from '../../services/firebase';
import { toggleFollow } from '../../services/firebase';
import { useHistory } from 'react-router-dom';
import FollowingFollwersList from './FollowingFollwersList';

export default function ProfileHeader({ profileUserInfo, photoCounts }) {
    const {
        userInfo: { username, docId, userId },
    } = useUser();

    const [isUserFollowing, setIsUserFollowing] = useState(null);
    const [followersCount, setFollowersCount] = useState(profileUserInfo.followers.length);
    const [followingOrFollowers, setFollowingOrFollowers] = useState(null);

    const history = useHistory();

    useEffect(() => {
        const checkIfUsersFollowing = async () => {
            const result = await IsUserFollowingProfileUser(username, profileUserInfo.userId);
            setIsUserFollowing(!!result);
            setFollowersCount(profileUserInfo.followers.length);
        };
        if (profileUserInfo && username) {
            checkIfUsersFollowing();
        }
    }, [profileUserInfo, username]);

    const toggleUserFollow = async () => {
        setIsUserFollowing((prevState) => !prevState);
        isUserFollowing
            ? setFollowersCount((prevState) => prevState - 1)
            : setFollowersCount((prevState) => prevState + 1);

        await toggleFollow(docId, userId, profileUserInfo.docId, profileUserInfo.userId, isUserFollowing);
    };

    const closeFollowingFollowersList = (e) => {
        if (e.target === e.currentTarget) {
            setFollowingOrFollowers(null);
        }
    };

    return (
        <div className="pt-24 text-gray-light">
            {followingOrFollowers && (
                <div
                    onClick={(e) => {
                        closeFollowingFollowersList(e);
                    }}
                    className="flex justify-center w-screen h-screen pt-20 bg-gray-primary bg-opacity-50 fixed top-0 left-0 bottom-0 right-0 z-90"
                >
                    <div className="relative h-3/4">
                        <button
                            onClick={() => setFollowingOrFollowers(null)}
                            className="absolute top-2 right-2 md:-right-10 md:text-gray-light text-gray-dark z-90"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 md:h-10 md:w-10"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        <FollowingFollwersList
                            following={profileUserInfo.following}
                            followers={profileUserInfo.followers}
                            followingOrFollowers={followingOrFollowers}
                            setFollowingOrFollowers={setFollowingOrFollowers}
                        />
                    </div>
                </div>
            )}
            <div className="flex items-top sm:items-center ">
                <div className="pr-2 sm:pr-4">
                    <img
                        src={profileUserInfo.photo}
                        alt={`${profileUserInfo.username} profile photo`}
                        className="sm:w-36 sm:h-36 w-12 h-12 rounded-full object-cover"
                    />
                </div>
                <div className="">
                    <div className="flex items-center">
                        <div>
                            <p className="text-sm font-bold sm:text-lg">{profileUserInfo.fullName}</p>
                            <p className="text-xs sm:text-base">
                                <span className="sm:text-sm">ID: </span>
                                {profileUserInfo.username}
                            </p>
                        </div>
                        <div className="ml-4 sm:ml-10">
                            {profileUserInfo.username === username ? (
                                <button
                                    className="text-xs bg-gray-dark text-gray-light p-2 rounded"
                                    onClick={() => history.push(`/edit/${username}`)}
                                >
                                    Edit Profile
                                </button>
                            ) : null}
                            {profileUserInfo.username === username || isUserFollowing === null ? null : (
                                <button
                                    onClick={toggleUserFollow}
                                    className={`rounded text-gray-light bg-red-primary text-xs p-2 sm:hidden ${
                                        isUserFollowing ? 'bg-red-primary' : 'bg-blue-primary'
                                    }`}
                                >
                                    {isUserFollowing ? 'Unfollow' : 'Follow'}
                                </button>
                            )}
                        </div>
                    </div>

                    <p className="text-sm sm:text-base">
                        <span className="text-xs sm:text-sm">Category: </span>
                        {profileUserInfo.category}
                    </p>
                    <div className="flex mt-2 sm:mt-4">
                        <p className="text-sm sm:text-base">
                            {photoCounts}{' '}
                            <span className="text-xs sm:text-sm">{photoCounts === 1 ? 'post' : 'posts'}</span>
                        </p>
                        <p
                            className="px-4 cursor-pointer text-sm sm:text-base"
                            onClick={() => setFollowingOrFollowers(profileUserInfo.followers.length > 0 && 'followers')}
                        >
                            {followersCount}{' '}
                            <span className="text-xs sm:text-sm">
                                {profileUserInfo.followers.length === 1 ? 'follower' : 'followers'}
                            </span>
                        </p>
                        <p
                            className="cursor-pointer text-sm sm:text-base"
                            onClick={() => setFollowingOrFollowers(profileUserInfo.following.length > 0 && 'following')}
                        >
                            {profileUserInfo.following.length} <span className="text-xs sm:text-sm">following</span>
                        </p>
                    </div>
                </div>
                <div>
                    {profileUserInfo.username === username || isUserFollowing === null ? null : (
                        <button
                            onClick={toggleUserFollow}
                            className={`rounded text-gray-light bg-red-primary text-sm py-2 px-6 hidden sm:block ${
                                isUserFollowing ? 'bg-red-primary' : 'bg-blue-primary'
                            }`}
                        >
                            {isUserFollowing ? 'Unfollow' : 'Follow'}
                        </button>
                    )}
                </div>
            </div>
            <div className="pt-2 max-w-2xl">
                <p className="text-sm sm:text-base">{profileUserInfo.title}</p>
                <p className="text-xs sm:text-sm">Bio:</p>
                <p className="break-words text-xs sm:text-sm">{profileUserInfo.bio}</p>
            </div>
        </div>
    );
}

ProfileHeader.propTypes = {
    profileUserInfo: PropTypes.shape({
        dateCreated: PropTypes.number,
        email: PropTypes.string,
        followers: PropTypes.array,
        following: PropTypes.array,
        fullName: PropTypes.string,
        userId: PropTypes.string,
        username: PropTypes.string,
        category: PropTypes.string,
        photo: PropTypes.string,
        title: PropTypes.string,
        bio: PropTypes.string,
        docId: PropTypes.string,
    }),
    photos: PropTypes.array,
    photoCounts: PropTypes.number,
};
