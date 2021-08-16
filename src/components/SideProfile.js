import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import UserContext from '../context/user';
import { getUserByUserId } from '../services/firebase';
import { Link } from 'react-router-dom';
import useUser from '../hooks/useUser';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export default function SideProfile() {
    // const [userInfo, setUserInfo] = useState({});
    // const { user } = useContext(UserContext);
    // useEffect(() => {
    //     document.title = 'Artisto';
    // }, []);

    // useEffect(() => {
    //     const getUserInfo = async () => {
    //         const [result] = await getUserByUserId(user.uid);
    //         setUserInfo(result);
    //         console.log('result', result);
    //     };
    //     if (user) {
    //         getUserInfo();
    //     }
    // }, [user]);

    const { userInfo } = useUser();

    return (
        <SkeletonTheme color="#494848" highlightColor="#F1F1F1">
            <div className="flex pt-4 justify-center">
                <div className="mx-auto justify-center flex-col w-full sticky top-0 max-h-screen pt-20">
                    <div className="flex justify-center">
                        <Link to={`/p/${userInfo.username}`}>
                            {!userInfo.photo ? (
                                <Skeleton width={144} height={144} circle={true} />
                            ) : (
                                <img src={userInfo.photo} className="w-36 rounded-full" />
                            )}
                        </Link>
                    </div>
                    {!userInfo.fullName ? (
                        <div className="flex justify-center flex-col items-center mt-4">
                            <Skeleton width={180} height={200} />
                        </div>
                    ) : (
                        <>
                            <div className="flex justify-center flex-col items-center">
                                <p className="font-bold mt-4 text-gray-light">{userInfo.fullName}</p>
                                <p className="text-sm text-gray-light">
                                    <span className="text-xs">ID: </span>
                                    {userInfo.username}
                                </p>
                                <p className="text-sm mt-4 text-gray-light">{userInfo.title}</p>
                                <p className="mt-2 text-sm text-gray-light">
                                    <span className="text-xs ">Category: </span>
                                    {userInfo.category}
                                </p>
                            </div>
                            <div className="mt-2 px-20">
                                <p className="text-sm text-gray-light">Bio:</p>
                                <p className="text-xs w-full break-words text-gray-light">{userInfo.bio}</p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </SkeletonTheme>
    );
}

SideProfile.propTypes = {
    userInfo: PropTypes.shape({
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
    }),
};
