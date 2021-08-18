import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Result from './Result';

export default function Results({ results, selectedFilter, searchKeyword }) {
    const notFound = (
        <div className="w-full">
            <p className="text-center text-gray-light">No Results</p>
        </div>
    );

    const getFilteredResults = () => {
        if (selectedFilter === 'all') {
            const users = results
                .filter(
                    (user) =>
                        user.username.includes(searchKeyword.toLowerCase()) ||
                        user.fullName.toLowerCase().includes(searchKeyword.toLowerCase()) ||
                        user.title.includes(searchKeyword.toLowerCase()) ||
                        user.bio.includes(searchKeyword.toLowerCase())
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
            const users = results
                .filter(
                    (user) =>
                        user.username.includes(searchKeyword.toLowerCase()) ||
                        user.fullName.toLowerCase().includes(searchKeyword.toLowerCase())
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
            const users = results
                .filter((user) => user.title.toLowerCase().includes(searchKeyword.toLowerCase()))
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
            const users = results
                .filter((user) => user.bio.toLowerCase().includes(searchKeyword.toLowerCase()))
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
    };

    // useEffect(() => {
    //     if (results) {
    //         if (selectedFilter === 'all') {
    //             const users = results.filter(
    //                 (user) =>
    //                     user.username.includes(searchKeyword) ||
    //                     user.fullName.includes(searchKeyword) ||
    //                     user.title.includes(searchKeyword) ||
    //                     user.bio.includes(searchKeyword)
    //             );
    //             setFilteredResults(users);
    //         } else if (selectedFilter === 'username') {
    //             const users = results.filter(
    //                 (user) => user.username.includes(searchKeyword) || user.fullName.includes(searchKeyword)
    //             );
    //             setFilteredResults(users);
    //         } else if (selectedFilter === 'title') {
    //             const users = results.filter((user) => user.title.includes(searchKeyword));
    //             setFilteredResults(users);
    //         } else if (selectedFilter === 'bio') {
    //             const users = results.filter((user) => user.bio.includes(searchKeyword));
    //             setFilteredResults(users);
    //         }
    //     } else {
    //         return null;
    //     }
    // }, [selectedFilter]);

    // console.log(filteredResults);

    // const getFilteredResults = () => {
    //     if (selectedFilter === 'all') {
    //         const users = results.filter(
    //             (user) =>
    //                 user.username.includes(searchKeyword) ||
    //                 user.fullName.includes(searchKeyword) ||
    //                 user.title.includes(searchKeyword) ||
    //                 user.bio.includes(searchKeyword)
    //         );
    //         setFilteredResults(users);
    //     } else if (selectedFilter === 'username') {
    //         const users = results.filter(
    //             (user) => user.username.includes(searchKeyword) || user.fullName.includes(searchKeyword)
    //         );
    //         setFilteredResults(users);
    //     } else if (selectedFilter === 'title') {
    //         const users = results.filter((user) => user.title.includes(searchKeyword));
    //         setFilteredResults(users);
    //     } else if (selectedFilter === 'bio') {
    //         const users = results.filter((user) => user.bio.includes(searchKeyword));
    //         setFilteredResults(users);
    //     }
    // };

    return !results ? null : getFilteredResults();
}

Results.propTypes = {
    results: PropTypes.array,
    selectedFilter: PropTypes.string.isRequired,
    searchKeyword: PropTypes.string.isRequired,
};
