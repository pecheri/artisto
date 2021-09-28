import React, { useState, useEffect, useContext } from 'react';
import { firebase, FieldValue } from '../../lib/firebase';
import PropTypes from 'prop-types';
import List from './List';
// import { messageList } from '../../lib/messages';
// import { getMessageList } from '../../services/firebase';
import { getUserByUserId } from '../../services/firebase';
import UserContext from '../../context/user';
// import useUser from '../../hooks/useUser';

export default function Lists({ setShowMessage, setSelectedUsersUsername, setSelectedUsersPhoto, setIsCreatingGroup }) {
    const [search, setSearch] = useState('');
    const [allGroupList, setAllGroupList] = useState();
    const [searchResult, setSearchResult] = useState();
    const [username, setUsername] = useState('');
    const {
        user: { uid: userId },
    } = useContext(UserContext);

    // useEffect(() => {
    //     const getUsername = async () => {
    //         const [result] = await getUserByUserId(userId);
    //         setUsername(result.username);
    //     };
    //     if (userId) {
    //         getUsername();
    //     }
    // }, [userId]);

    useEffect(() => {
        // if (username) {
        const getAllGroupList = firebase
            .firestore()
            .collection('group')
            .where('members', 'array-contains', userId)
            .onSnapshot((querySnapshot) => {
                const list = querySnapshot.docs.map((item) => ({
                    ...item.data(),
                }));
                let memberWithoutMe;
                const listPlusMemberUsername = list.map((item) => {
                    item.members.forEach((member) => {
                        if (member !== userId) {
                            memberWithoutMe = member;
                        }
                    });
                    return { ...item, memberWithoutMe };
                });
                setAllGroupList(listPlusMemberUsername);
            });

        return () => {
            getAllGroupList();
        };
        // }
    }, []);

    return (
        <div className="mt-24 text-gray-light w-screen sm:w-full sm:overflow-hidden relative h-5/6">
            <div className="flex justify-between mx-4 ">
                <p>Messages</p>
                <button onClick={() => setIsCreatingGroup(true)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                    </svg>
                </button>
            </div>
            <div className="w-full flex">
                <input
                    placeholder="Search..."
                    className="w-full mx-2 rounded bg-gray-light text-gray-dark px-1 py-0.5 my-2"
                    value={search}
                    onChange={({ target }) => setSearch(target.value)}
                />
            </div>
            <div className="w-full px-4 pt-4 pb-4 absolute overflow-y-scroll h-5/6 mt-2">
                {allGroupList ? (
                    allGroupList
                        .sort((a, b) => b.recentMessage.sentAt - a.recentMessage.sentAt)
                        .map((item, index) => (
                            <List
                                memberUserId={item.memberWithoutMe}
                                setShowMessage={setShowMessage}
                                key={index}
                                date={item.recentMessage.sentAt}
                                setSelectedUsersUsername={setSelectedUsersUsername}
                                setSelectedUsersPhoto={setSelectedUsersPhoto}
                                search={search}
                            />
                        ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}
Lists.propTypes = {
    setShowMessage: PropTypes.func.isRequired,
    setSelectedUsersUsername: PropTypes.func.isRequired,
    setSelectedUsersPhoto: PropTypes.func.isRequired,
    setIsCreatingGroup: PropTypes.func.isRequired,
};
