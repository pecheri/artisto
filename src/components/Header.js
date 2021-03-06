import React, { useContext, useEffect, useState } from 'react';
import logo from '../images/logo.png';
import { Link, useHistory } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import UserContext from '../context/user';
import FirebaseContext from '../context/firebase';
import { getUserByUserId } from '../services/firebase';

export default function Header() {
    const [userInfo, setUserInfo] = useState('');
    const {
        user: { uid: userId },
    } = useContext(UserContext);

    const { firebase } = useContext(FirebaseContext);
    const history = useHistory();
    const handleSignOut = () => {
        firebase.auth().signOut();
        history.push(ROUTES.LOGIN);
    };

    useEffect(() => {
        let result = null;
        const getUserInfo = async () => {
            while (!result) {
                [result] = await getUserByUserId(userId);
                setUserInfo(result);
            }
        };
        if (userId) {
            getUserInfo();
        }
    }, [userId]);

    return userInfo ? (
        <div className="bg-gray-dark w-screen h-14 flex justify-center items-center fixed z-50 top-0 left-0">
            <div className="max-w-screen-xl w-full h-14 flex justify-between items-center">
                <Link to={ROUTES.DASHBOARD}>
                    <h1 className="flex sm:h-14 sm:w-auto w-28">
                        <img src={logo} alt="artisto" className="sm:h-full sm:w-auto w-full h-auto" />
                    </h1>
                </Link>
                <div className="flex flex-row items-center">
                    <div className="pr-2 sm:pr-4">
                        <Link to={ROUTES.UPLOAD_IMAGE}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 sm:h-8 sm:w-8 text-gray-light"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                            </svg>
                        </Link>
                    </div>
                    <div className="pr-2 sm:pr-4">
                        <Link to={ROUTES.SEARCH}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 sm:h-8 sm:w-8 text-gray-light"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </Link>
                    </div>
                    <div className="pr-2 sm:pr-4">
                        <Link to={ROUTES.MESSAGES}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 sm:h-8 sm:w-8 text-gray-light"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                />
                            </svg>
                        </Link>
                    </div>
                    <div className="flex h-14 items-center pr-2 sm:pr-4">
                        <Link to={`/p/${userInfo?.username}`}>
                            <img src={userInfo?.photo} className="h-5 w-5 sm:h-10 sm:w-10 rounded-full object-cover" />
                        </Link>
                    </div>
                    <div className="pr-2 sm:pr-4 cursor-pointer" onClick={handleSignOut}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 sm:h-8 sm:w-8 text-gray-light"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    ) : null;
}
