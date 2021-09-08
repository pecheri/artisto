import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

export default function MessageHeader({ showMessage, username, photo }) {
    return showMessage ? (
        <header className="sm:z-90 sm:absolute sm:w-full sm:top-16">
            <div className="bg-gray-dark w-screen h-14 flex justify-center items-center fixed z-50 top-0 left-0 sm:w-full sm:static sm:bg-gray-primary">
                <div className="max-w-screen-xl w-full h-14 flex items-center text-gray-light">
                    <Link className="mr-4 sm:hidden" to={ROUTES.MESSAGES}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </Link>
                    <div className="flex w-8 h-8 mr-2 sm:ml-4">
                        <img src={photo} className="rounded-full w-full h-full object-cover" />
                    </div>
                    <p>{username}</p>
                </div>
            </div>
        </header>
    ) : null;
}

MessageHeader.propTypes = {
    showMessage: PropTypes.bool.isRequired,
    username: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
};
