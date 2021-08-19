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
                    className="flex justify-center w-screen h-screen pt-20 bg-gray-primary bg-opacity-50 absolute top-0 left-0 z-90"
                >
                    <div className="">
                        <FollowingFollwersList
                            following={profileUserInfo.following}
                            followers={profileUserInfo.followers}
                            followingOrFollowers={followingOrFollowers}
                            setFollowingOrFollowers={setFollowingOrFollowers}
                        />
                    </div>
                </div>
            )}
            <div className="flex items-center ">
                <div className="pr-4">
                    <img
                        src={profileUserInfo.photo}
                        alt={`${profileUserInfo.username} profile photo`}
                        className="w-36 h-36 rounded-full object-cover"
                    />
                </div>

                <div className="w-1/2">
                    <div className="flex items-center">
                        <div>
                            <p className="text-lg font-bold">{profileUserInfo.fullName}</p>
                            <p>
                                <span className="text-sm">ID: </span>
                                {profileUserInfo.username}
                            </p>
                        </div>
                        <div className="ml-10">
                            {profileUserInfo.username === username ? (
                                <button
                                    className="text-xs bg-gray-dark text-gray-light p-2 rounded"
                                    onClick={() => history.push(`/edit/${username}`)}
                                >
                                    Edit Profile
                                </button>
                            ) : null}
                        </div>
                    </div>

                    <p className="">
                        <span className="text-sm">Category: </span>
                        {profileUserInfo.category}
                    </p>
                    <div className="flex mt-4">
                        <p>
                            {photoCounts} <span className="text-sm">{photoCounts === 1 ? 'post' : 'posts'}</span>
                        </p>
                        <p
                            className="px-4 cursor-pointer"
                            onClick={() => setFollowingOrFollowers(profileUserInfo.followers.length > 0 && 'followers')}
                        >
                            {followersCount}{' '}
                            <span className="text-sm">
                                {profileUserInfo.followers.length === 1 ? 'follower' : 'followers'}
                            </span>
                        </p>
                        <p
                            className="cursor-pointer"
                            onClick={() => setFollowingOrFollowers(profileUserInfo.following.length > 0 && 'following')}
                        >
                            {profileUserInfo.following.length} <span className="text-sm">following</span>
                        </p>
                    </div>
                </div>
                <div>
                    {profileUserInfo.username === username || isUserFollowing === null ? null : (
                        <button
                            onClick={toggleUserFollow}
                            className={`rounded text-gray-light bg-red-primary text-sm py-2 px-6 ${
                                isUserFollowing ? 'bg-red-primary' : 'bg-blue-primary'
                            }`}
                        >
                            {isUserFollowing ? 'Unfollow' : 'Follow'}
                        </button>
                    )}
                </div>
            </div>
            <div className="pt-2 max-w-2xl">
                <p className="">{profileUserInfo.title}</p>
                <p className="text-sm">Bio:</p>
                <p className="break-words text-sm">{profileUserInfo.bio}</p>
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

{
    /* <SkeletonTheme color="#494848" highlightColor="#F1F1F1">
            <Skeleton count={1} width={480} height={200} className="mt-20" />
        </SkeletonTheme> */
}
