import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getSearchedUsers, getFollowingByUserId } from '../../services/firebase';
import Result from './Result';

export default function Results({ userId, searchKeyword }) {
    const [searchResults, setSearchResults] = useState([]);
    const [followingUsers, setFollowingUsers] = useState([]);
    const [searchedFollowingUsers, setSearchedFollowingUsers] = useState([]);

    useEffect(() => {
        const getFollowing = async () => {
            const result = await getFollowingByUserId(userId);
            setFollowingUsers(result);
        };
        if (userId) {
            getFollowing();
        }
    }, [userId]);

    useEffect(() => {
        const searchUsers = async () => {
            const results = await getSearchedUsers(searchKeyword, userId);
            const followingResults = followingUsers.filter((user) => user.username.includes(searchKeyword));
            setSearchedFollowingUsers(followingResults);
            const followingIds = [];
            followingUsers.forEach((user) => followingIds.push(user.userId));
            const resultsMinusFollowing = results.filter((user) => {
                return followingIds.indexOf(user.userId) === -1;
            });
            setSearchResults(resultsMinusFollowing);
        };
        if (searchKeyword) {
            searchUsers();
        }
    }, [searchKeyword]);

    console.log('searchResult', searchResults);
    console.log('followingUsers', followingUsers);
    console.log('searchFollowingUsers', searchedFollowingUsers);

    return followingUsers ? (
        <div className="text-gray-dark">
            {searchKeyword ? (
                <>
                    {searchedFollowingUsers.length > 0 && (
                        <div>
                            <p>Followig Artists</p>
                            {searchedFollowingUsers.map((user, index) => (
                                <Result
                                    key={index}
                                    username={user.username}
                                    fullName={user.fullName}
                                    photo={user.photo}
                                />
                            ))}
                        </div>
                    )}
                    <div>
                        <p className="mt-2">More Artists</p>
                        {searchResults.length > 0 ? (
                            <>
                                {searchResults.map((user, index) => (
                                    <Result
                                        key={index}
                                        username={user.username}
                                        fullName={user.fullName}
                                        photo={user.photo}
                                    />
                                ))}
                            </>
                        ) : (
                            <p>No Results</p>
                        )}
                    </div>
                </>
            ) : (
                <>
                    {followingUsers.length > 0 ? (
                        <>
                            <p>Suggested Artists</p>
                            {followingUsers.map((user, index) => (
                                <Result
                                    key={index}
                                    username={user.username}
                                    fullName={user.fullName}
                                    photo={user.photo}
                                />
                            ))}
                        </>
                    ) : (
                        <p>Follow Artists!</p>
                    )}
                </>
            )}
        </div>
    ) : (
        <p>Loading..</p>
    );
}

Results.propTypes = {
    userId: PropTypes.string.isRequired,
    searchKeyword: PropTypes.string,
};
