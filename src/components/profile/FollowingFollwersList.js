import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getFollowingOrFollowersList } from '../../services/firebase';
import FollowingFollowersUser from './FollowingFollowersUser';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export default function FollowingFollwersList({ following, followers, followingOrFollowers, setFollowingOrFollowers }) {
    const [list, setList] = useState([]);

    useEffect(() => {
        const getFollowingList = async () => {
            const result = await getFollowingOrFollowersList(following);
            setList(result);
        };
        const getFollowersList = async () => {
            const result = await getFollowingOrFollowersList(followers);
            setList(result);
        };
        if (followingOrFollowers === 'following') {
            getFollowingList();
        }
        if (followingOrFollowers === 'followers') {
            getFollowersList();
        }
    }, [followingOrFollowers]);
    return (
        <div className="bg-gray-light h-full sm:max-w-sm sm:w-96 w-screen rounded text-gray-dark p-8 overflow-scroll relative">
            {list ? (
                list.map((item, index) => (
                    <FollowingFollowersUser
                        key={index}
                        username={item.username}
                        fullName={item.fullName}
                        photo={item.photo}
                        setFollowingOrFollowers={setFollowingOrFollowers}
                    />
                ))
            ) : (
                <Skeleton count={4} className="w-full pb-4 h-1/4" />
            )}
        </div>
    );
}

FollowingFollwersList.propTypes = {
    // profileUserInfo: PropTypes.shape({
    //     dateCreated: PropTypes.number,
    //     email: PropTypes.string,
    //     followers: PropTypes.array,
    //     following: PropTypes.array,
    //     fullName: PropTypes.string,
    //     userId: PropTypes.string,
    //     username: PropTypes.string,
    //     category: PropTypes.string,
    //     photo: PropTypes.string,
    //     title: PropTypes.string,
    //     bio: PropTypes.string,
    //     docId: PropTypes.string,
    // }),
    followingOrFollowers: PropTypes.string,
    following: PropTypes.array,
    followers: PropTypes.array,
    setFollowingOrFollowers: PropTypes.func,
};
