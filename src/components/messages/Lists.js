import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import List from './List';
import { messageList } from '../../lib/messages';

export default function Lists({ setShowMessage, setSelectedUsersUsername, setSelectedUsersPhoto }) {
    const [search, setSearch] = useState('');
    const [searchResult, setSearchResult] = useState(messageList);

    useEffect(() => {
        if (!search) {
            setSearchResult(messageList);
        } else {
            const result = messageList.filter((item) => item.username.includes(search.toLowerCase()));
            setSearchResult(result);
        }
    }, [search]);

    return (
        <div className="mt-24 text-gray-light w-screen sm:w-full sm:overflow-hidden relative h-5/6">
            <div className="flex justify-between mx-4 ">
                <p>Messages</p>
                <button>
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
                {searchResult.length > 0 ? (
                    searchResult.map((item, index) => (
                        <List
                            setShowMessage={setShowMessage}
                            key={index}
                            username={item.username}
                            photo={item.photo}
                            date={item.date}
                            setSelectedUsersUsername={setSelectedUsersUsername}
                            setSelectedUsersPhoto={setSelectedUsersPhoto}
                        />
                    ))
                ) : (
                    <p className="text-center">No Results</p>
                )}
            </div>
        </div>
    );
}
Lists.propTypes = {
    setShowMessage: PropTypes.func.isRequired,
    setSelectedUsersUsername: PropTypes.func.isRequired,
    setSelectedUsersPhoto: PropTypes.func.isRequired,
};
