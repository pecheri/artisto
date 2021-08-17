import { useContext, useState, useEffect } from 'react';
import UserContext from '../context/user';
import { getUserByUserId } from '../services/firebase';

export default function useUser() {
    const { user } = useContext(UserContext);
    const [activeUser, setActiveUser] = useState({});

    useEffect(() => {
        async function getUserInfoByUserId() {
            const [result] = await getUserByUserId(user.uid);
            setActiveUser(result);
        }
        if (user?.uid) {
            getUserInfoByUserId();
        }
    }, [user]);
    return { userInfo: activeUser };
}
