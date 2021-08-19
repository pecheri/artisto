import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function FollowingFollowersUser({ username, fullName, photo, setFollowingOrFollowers }) {
    return (
        <div className="p-2 flex mx-auto items-center">
            <Link to={`/p/${username}`} onClick={() => setFollowingOrFollowers()}>
                <div>
                    <img src={photo} className="h-10 w-10 rounded-full object-cover" />
                </div>
            </Link>
            <div className="pl-4">
                <Link to={`/p/${username}`} onClick={() => setFollowingOrFollowers()}>
                    <p className="font-bold">{fullName}</p>
                </Link>
                <p className="text-sm">
                    <span className="text-xs">ID: </span>
                    {username}
                </p>
            </div>
        </div>
    );
}

FollowingFollowersUser.propTypes = {
    username: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    setFollowingOrFollowers: PropTypes.func.isRequired,
};
