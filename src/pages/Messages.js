import React, { useState } from 'react';
import Header from '../components/Header';
import Lists from '../components/messages/Lists';
import MessageHeader from '../components/messages/MessageHeader';
import Message from '../components/messages/Message';

export default function Messages() {
    const [showMessage, setShowMessage] = useState(false);
    const [selectedUsersUsername, setSelectedUsersUsername] = useState('');
    const [selectedUsersphoto, setSelectedUsersPhoto] = useState('');

    return (
        <div className="w-screen mx-auto flex h-screen max-w-screen-xl">
            <div
                className={`${
                    showMessage && 'hidden'
                } sm:block sm:w-80 md:w-96 sm:border-r sm:border-gray-dark sm:h-auto sm:mx-auto`}
            >
                <Header />
                <Lists
                    setShowMessage={setShowMessage}
                    setSelectedUsersUsername={setSelectedUsersUsername}
                    setSelectedUsersPhoto={setSelectedUsersPhoto}
                />
            </div>
            <div className={`${!showMessage && 'hidden'} sm:block w-full sm:relative sm:h-full`}>
                <MessageHeader
                    setShowMessage={setShowMessage}
                    showMessage={showMessage}
                    username={selectedUsersUsername}
                    photo={selectedUsersphoto}
                />
                <Message photo={selectedUsersphoto} showMessage={showMessage} />
            </div>
        </div>
    );
}
