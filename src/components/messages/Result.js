import React from 'react';
import PropTypes from 'prop-types';

export default function Result({ username, fullName, photo }) {
    return (
        <div>
            <div className="w-full mx-auto text-gray-primary mb-3">
                <div className="grid grid-cols-6 items-center">
                    <div className="flex justify-end">
                        <img
                            src={photo}
                            alt={`${username} profile photo`}
                            className="sm:w-12 sm:h-12 w-12 h-12 rounded-full object-cover"
                        />
                    </div>
                    <div className="ml-6 col-span-5">
                        <p className="sm:text-base text-base">{fullName}</p>
                        <p className="text-sm">
                            <span className="text-xs">ID: </span>
                            {username}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

Result.propTypes = {
    username: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
};
