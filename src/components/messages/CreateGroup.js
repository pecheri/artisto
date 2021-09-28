import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Results from './Results';

export default function CreateGroup({ isCreatingGroup, setIsCreatingGroup, userId }) {
    const [searchKeyword, setSearchKeyword] = useState('');

    const closeCreateGroup = (e) => {
        if (e.target === e.currentTarget) {
            setIsCreatingGroup(false);
        }
    };
    return (
        <div
            onClick={(e) => closeCreateGroup(e)}
            className="absolute flex bg-gray-primary bg-opacity-50 w-screen h-screen items-center"
        >
            <div className="bg-gray-light h-3/4 sm:max-w-sm sm:w-96 w-screen rounded text-gray-dark p-8 overflow-scroll relative mx-auto">
                <p className="text-gray-dark">New Message</p>
                <div className="w-full">
                    <input
                        placeholder="Search..."
                        className="w-full rounded bg-gray-light text-gray-dark border border-gray-primary px-1 py-0.5 my-2"
                        value={searchKeyword}
                        onChange={({ target }) => setSearchKeyword(target.value)}
                    />
                </div>
                <Results userId={userId} searchKeyword={searchKeyword.toLocaleLowerCase()} />
            </div>
        </div>
    );
}

CreateGroup.propTypes = {
    isCreatingGroup: PropTypes.bool.isRequired,
    setIsCreatingGroup: PropTypes.func.isRequired,
    userId: PropTypes.string.isRequired,
};
