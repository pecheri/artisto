import React from 'react';
import PropTypes from 'prop-types';

export default function List({
    setShowMessage,
    username,
    photo,
    date,
    setSelectedUsersUsername,
    setSelectedUsersPhoto,
}) {
    const showMessageHandler = () => {
        setShowMessage(true);
        setSelectedUsersUsername(username);
        setSelectedUsersPhoto(photo);
    };
    return (
        <div className="flex mb-4" onClick={showMessageHandler}>
            <div className="flex w-12 h-12 mr-2">
                <img src={photo} className="rounded-full w-full h-full object-cover" />
            </div>
            <div className="my-auto">
                <p className="text-sm">{username}</p>
                <div className="flex text-xs font-extralight">
                    <p>{date}</p>
                </div>
            </div>
        </div>
    );
}

List.propTypes = {
    setShowMessage: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    setSelectedUsersUsername: PropTypes.func.isRequired,
    setSelectedUsersPhoto: PropTypes.func.isRequired,
};
