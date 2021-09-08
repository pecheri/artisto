import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MessageHeader from '../components/messages/MessageHeader';
import Message from '../components/messages/Message';
import { messageList } from '../lib/messages';
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

export default function MessagesUser() {
    const history = useHistory();
    const { username } = useParams();
    const [userInfo, setUserInfo] = useState(null);
    useEffect(() => {
        const [result] = messageList.filter((item) => item.username === username);
        if (!result) {
            history.push(ROUTES.NOT_FOUND);
        } else {
            setUserInfo(result);
        }
    }, [username]);
    const showMessage = true;

    return userInfo?.photo ? (
        <div>
            <MessageHeader showMessage={showMessage} username={username} photo={userInfo.photo} />
            <Message photo={userInfo.photo} showMessage={showMessage} />
        </div>
    ) : null;
}
