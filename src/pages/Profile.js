import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { getUserByUsername } from '../services/firebase';
import UserProfile from '../components/profile';
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export default function Profile() {
    const { username } = useParams();
    const [profileUserInfo, setProfileUserInfo] = useState(null);
    const history = useHistory();

    useEffect(() => {
        const getProfileUserInfo = async () => {
            const [result] = await getUserByUsername(username);
            setProfileUserInfo(result);
            if (!result) {
                history.push(ROUTES.NOT_FOUND);
            }
        };
        if (username) {
            getProfileUserInfo();
        }
    }, [username]);

    return profileUserInfo?.username ? (
        <div>
            <Header />
            <UserProfile profileUserInfo={profileUserInfo} />
        </div>
    ) : (
        <SkeletonTheme color="#494848" highlightColor="#F1F1F1">
            <div className="max-w-screen-lg h-screen mx-auto">
                <Skeleton count={1} height={200} className="mt-20 mx-4" />
            </div>
        </SkeletonTheme>
    );
}
