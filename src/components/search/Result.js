import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Result({ username, fullName, photo, title, bio }) {
    return (
        <div className="w-full mx-auto text-gray-light mb-8">
            <div className="grid grid-cols-6 items-center">
                <div className="flex justify-end">
                    <Link to={`/p/${username}`}>
                        <img
                            src={photo}
                            alt={`${username} profile photo`}
                            className="sm:w-16 sm:h-16 w-12 h-12 rounded-full object-cover"
                        />
                    </Link>
                </div>
                <div className="ml-6 col-span-5">
                    <Link to={`/p/${username}`}>
                        <p className="sm:text-lg text-base">{fullName}</p>
                    </Link>
                    <p className="text-sm">
                        <span className="text-xs">ID: </span>
                        {username}
                    </p>
                    <p className="text-sm pt-2">{title}</p>
                    <p className="text-xs break-words w-full max-w-md">
                        <span className="text-sm">Bio: </span>
                        {bio.length > 100 ? `${bio.substr(0, 100)}...` : bio}
                    </p>
                </div>
            </div>
        </div>
    );
}

Result.propTypes = {
    username: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
};
