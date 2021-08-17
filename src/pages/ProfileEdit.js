import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import useUser from '../hooks/useUser';
import { categories } from '../lib/categories';
import { updateProfile } from '../services/firebase';
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

export default function ProfileEdit() {
    const {
        userInfo: { bio, category, fullName, photo, title, userId, docId, username },
    } = useUser();
    const [userBio, setUserBio] = useState(bio);
    const [userCategory, setUserCategory] = useState(category);
    const [userFullName, setUserFullName] = useState(fullName);
    const [userPhoto, setUserPhoto] = useState(photo);
    const [userTitle, setUserTitle] = useState(title);

    const history = useHistory();

    useEffect(() => {
        if (userId) {
            setUserBio(bio);
            setUserCategory(category);
            setUserFullName(fullName);
            setUserPhoto(photo);
            setUserTitle(title);
        }
    }, [userId]);

    const isInvalid = userBio === bio && userCategory === category && userFullName === fullName && userTitle === title;

    console.log('isInvalid', isInvalid);

    const handleProfileUpdate = async (event) => {
        event.preventDefault();
        await updateProfile(docId, userFullName, userCategory, userTitle, userBio);
        alert('Your Profile was successfully update!');
        const timer = setTimeout(() => {
            history.push(`/p/${username}`);
        }, 500);
    };

    return (
        <div>
            <Header />
            <div className="cotainer max-w-screen-sm py-20 px-10 mx-auto">
                <p className="text-xl text-gray-light">Edit Profile</p>
                {userId ? (
                    <form className="flex flex-col" onSubmit={handleProfileUpdate}>
                        <div className="grid grid-cols-4 mt-8 items-center">
                            <p className="text-gray-light text-sm text-center">Full Name</p>
                            <input
                                placeholder="Full Name"
                                type="text"
                                onChange={({ target }) => setUserFullName(target.value)}
                                value={userFullName}
                                className="bg-gray-light w-full p-1 h-10 text-sm col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 mt-8 items-center">
                            <p className="text-gray-light text-sm text-center">Category</p>
                            <select
                                className="bg-gray-light w-full h-10 text-sm col-span-3"
                                onChange={({ target }) => setUserCategory(target.value)}
                                value={userCategory}
                            >
                                {categories.sort().map((category, index) => (
                                    <option key={index} value={category}>
                                        {category}
                                    </option>
                                ))}
                                <option value="others">Others</option>
                            </select>
                        </div>
                        <div className="grid grid-cols-4 mt-8 items-center">
                            <p className="text-gray-light text-sm text-center">Title</p>
                            <input
                                placeholder="Title"
                                type="text"
                                onChange={({ target }) => setUserTitle(target.value)}
                                value={userTitle}
                                className="bg-gray-light w-full p-1 h-10 text-sm col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 mt-8 items-center">
                            <p className="text-gray-light text-sm text-center">Bio</p>
                            <textarea
                                placeholder="Bio"
                                type="text"
                                onChange={({ target }) => setUserBio(target.value)}
                                value={userBio}
                                className="bg-gray-light w-full p-1 text-sm col-span-3 h-28"
                            />
                        </div>
                        <div className="grid grid-cols-4 mt-8 items-center">
                            <button
                                className={`bg-yellow-primary text-gray-dark mt-12 w-full p-1 h-10 rounded  col-start-2 col-end-5 ${
                                    isInvalid && 'opacity-50'
                                }`}
                                type="submit"
                                disabled={isInvalid}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                ) : null}
            </div>
        </div>
    );
}
