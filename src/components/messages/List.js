import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getUserByUserId } from '../../services/firebase';

export default function List({
    setShowMessage,
    // username,
    // photo,
    date,
    setSelectedUsersUsername,
    setSelectedUsersPhoto,
    memberUserId,
    search,
}) {
    const showMessageHandler = () => {
        setShowMessage(true);
        setSelectedUsersUsername(username);
        setSelectedUsersPhoto(photo);
    };

    const [memberInfo, setMemberInfo] = useState();

    useEffect(() => {
        const getMemberInfo = async () => {
            const [result] = await getUserByUserId(memberUserId);
            setMemberInfo(result);
        };
        if (memberUserId) {
            getMemberInfo();
        }
    }, [memberUserId]);
    console.log('memberInfo', memberInfo);

    const data = parseInt(date);
    const sentAt = new Date(data).toLocaleDateString('en-US', {
        month: 'numeric',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
    });

    if (memberInfo?.username) {
        if (memberInfo.username.includes(search.toLowerCase()) || !search) {
            return (
                <div className="flex relative mb-4 cursor-pointer" onClick={showMessageHandler}>
                    <Link
                        to={`/messages/${memberInfo.username}`}
                        className="absolute top-0 right-0 left-0 bottom-0 z-90 sm:hidden"
                    />
                    <div className="flex w-12 h-12 mr-2">
                        <img src={memberInfo.photo} className="rounded-full w-full h-full object-cover" />
                    </div>
                    <div className="my-auto">
                        <p className="text-sm">{memberInfo.username}</p>
                        <div className="flex text-xs font-extralight">
                            <p>{sentAt}</p>
                        </div>
                    </div>
                </div>
            );
        } else {
            return <p>No Results</p>;
        }
    } else {
        return null;
    }
}

List.propTypes = {
    setShowMessage: PropTypes.func.isRequired,
    date: PropTypes.string.isRequired,
    setSelectedUsersUsername: PropTypes.func.isRequired,
    setSelectedUsersPhoto: PropTypes.func.isRequired,
    memberUserId: PropTypes.string.isRequired,
    search: PropTypes.string,
};
