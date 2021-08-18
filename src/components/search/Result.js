import React from 'react';
import PropTypes from 'prop-types';

export default function Result({ username, fullName, photo, title, bio }) {
    return (
        <div className="w-3/4 min-w-full mx-auto text-gray-light mb-8">
            <div className="grid grid-cols-6 items-center">
                <div className="flex justify-end">
                    <img src={photo} alt={`${username} profile photo`} className="w-16 h-16 rounded-full" />
                </div>
                <div className="ml-6 col-span-5">
                    <p className="text-lg">{fullName}</p>
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
