import React from 'react';
import PropTypes from 'prop-types';
import Result from './Result';
import useUser from '../../hooks/useUser';

export default function Results({ results, selectedFilter, fixedSearchKeyword }) {
    const notFound = (
        <div className="w-full">
            <p className="text-center text-gray-light">No Results</p>
        </div>
    );

    const {
        userInfo: { userId },
    } = useUser();

    const getFilteredResults = () => {
        const resultsWithoutUser = results.filter((item) => userId !== item.userId);
        if (!fixedSearchKeyword) {
            const users = resultsWithoutUser.map((user, index) => (
                <Result
                    key={index}
                    username={user.username}
                    fullName={user.fullName}
                    photo={user.photo}
                    title={user.title}
                    bio={user.bio}
                />
            ));
            if (users.length > 0) {
                return users;
            } else {
                return notFound;
            }
        } else {
            if (selectedFilter === 'all') {
                const users = resultsWithoutUser
                    .filter(
                        (user) =>
                            user.username.includes(fixedSearchKeyword.toLowerCase()) ||
                            user.fullName.toLowerCase().includes(fixedSearchKeyword.toLowerCase()) ||
                            user.title.includes(fixedSearchKeyword.toLowerCase()) ||
                            user.bio.includes(fixedSearchKeyword.toLowerCase())
                    )
                    .map((user, index) => (
                        <Result
                            key={index}
                            username={user.username}
                            fullName={user.fullName}
                            photo={user.photo}
                            title={user.title}
                            bio={user.bio}
                        />
                    ));
                if (users.length > 0) {
                    return users;
                } else {
                    return notFound;
                }
            } else if (selectedFilter === 'username') {
                const users = resultsWithoutUser
                    .filter(
                        (user) =>
                            user.username.includes(fixedSearchKeyword.toLowerCase()) ||
                            user.fullName.toLowerCase().includes(fixedSearchKeyword.toLowerCase())
                    )
                    .map((user, index) => (
                        <Result
                            key={index}
                            username={user.username}
                            fullName={user.fullName}
                            photo={user.photo}
                            title={user.title}
                            bio={user.bio}
                        />
                    ));
                if (users.length > 0) {
                    return users;
                } else {
                    return notFound;
                }
            } else if (selectedFilter === 'title') {
                const users = resultsWithoutUser
                    .filter((user) => user.title.toLowerCase().includes(fixedSearchKeyword.toLowerCase()))
                    .map((user, index) => (
                        <Result
                            key={index}
                            username={user.username}
                            fullName={user.fullName}
                            photo={user.photo}
                            title={user.title}
                            bio={user.bio}
                        />
                    ));
                if (users.length > 0) {
                    return users;
                } else {
                    return notFound;
                }
            } else if (selectedFilter === 'bio') {
                const users = resultsWithoutUser
                    .filter((user) => user.bio.toLowerCase().includes(fixedSearchKeyword.toLowerCase()))
                    .map((user, index) => (
                        <Result
                            key={index}
                            username={user.username}
                            fullName={user.fullName}
                            photo={user.photo}
                            title={user.title}
                            bio={user.bio}
                        />
                    ));
                if (users.length > 0) {
                    return users;
                } else {
                    return notFound;
                }
            }
        }
    };

    return !results ? null : getFilteredResults();
}

Results.propTypes = {
    results: PropTypes.array,
    selectedFilter: PropTypes.string.isRequired,
    searchKeyword: PropTypes.string.isRequired,
    fixedSearchKeyword: PropTypes.string.isRequired,
};
