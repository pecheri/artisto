import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { formatDistance } from 'date-fns';
import { getUserByUserId } from '../../services/firebase';

export default function Header({ username, userId, caption, date }) {
    const [userPhotoSrc, setUserPhotoSrc] = useState(null);
    useEffect(() => {
        const getUserPhotoSrc = async () => {
            const [result] = await getUserByUserId(userId);
            const { photo } = result;
            setUserPhotoSrc(photo);
        };
        if (userId) {
            getUserPhotoSrc();
        }
    }, [userId]);

    return (
        <div className="">
            <div className="flex ">
                <Link to={`/p/${username}`}>
                    <div className="w-12 mr-2">
                        <img
                            src={userPhotoSrc}
                            alt={`${username} profile photo`}
                            className="w-12 h-12 rounded-full mr-4 object-cover"
                        />
                    </div>
                </Link>
                <div>
                    <Link to={`/p/${username}`}>
                        <p className="font-bold text-gray-dark">{username}</p>
                    </Link>
                    <p className="text-gray-dark break-words">{caption}</p>
                </div>
            </div>
            <p className="text-gray-primary text-xs pt-2 text-right">{formatDistance(date, new Date())} ago</p>
        </div>
    );
}

Header.propTypes = {
    username: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
};
