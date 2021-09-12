import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import useUser from '../hooks/useUser';
import { categories } from '../lib/categories';
import { updateProfile } from '../services/firebase';
import { useHistory } from 'react-router-dom';

export default function ProfileEdit() {
    const {
        userInfo: { bio, category, fullName, title, userId, docId, username },
    } = useUser();
    const [userBio, setUserBio] = useState(bio);
    const [userCategory, setUserCategory] = useState(category);
    const [userFullName, setUserFullName] = useState(fullName);
    const [userTitle, setUserTitle] = useState(title);
    const [imageFile, setImageFile] = useState(null);
    const [image, setImage] = useState(null);
    const [upload, setUpload] = useState(false);

    const history = useHistory();

    useEffect(() => {
        if (userId) {
            setUserBio(bio);
            setUserCategory(category);
            setUserFullName(fullName);
            setUserTitle(title);
        }
    }, [userId]);

    useEffect(() => {
        document.title = `Profile Edit - Artisto`;
    }, [username]);

    const onImageChange = (event) => {
        setImageFile(event.target.files);
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
        }
    };

    const isInvalid =
        userBio === bio && userCategory === category && userFullName === fullName && userTitle === title && !imageFile;

    const handleProfileUpdate = async (event) => {
        event.preventDefault();
        await updateProfile(docId, userFullName, userCategory, userTitle, userBio, imageFile, setUpload);
        history.push(`/p/${username}`);
    };

    return (
        <div>
            <Header />
            {upload && (
                <div className="flex fixed top-0 left-0 w-screen h-screen bg-gray-dark opacity-70 z-90 items-center justify-center">
                    <p className="text-2xl text-gray-light bg-gradient-to-r from-blue-primary via-yellow-primary to-red-primary py-4 px-8 rounded animate-pulse">
                        Uploading...
                    </p>
                </div>
            )}
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
                                className="bg-gray-light w-full p-1 h-10 text-base col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 mt-8 items-center">
                            <p className="text-gray-light text-sm text-center">Category</p>
                            <select
                                className="bg-gray-light w-full h-10 text-sm col-span-3 capitalize"
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
                                className="bg-gray-light w-full p-1 h-10 text-base col-span-3"
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
                            <p className="text-gray-light text-sm text-center">Profile Photo</p>
                            <div className="col-span-3 flex items-center justify-evenly">
                                <div className="col-span-2">
                                    <label
                                        htmlFor="imageUploader"
                                        className="cursor-pointer text-xs sm:text-sm text-gray-light bg-gray-dark p-2 rounded"
                                    >
                                        Choose Image
                                    </label>
                                    <input
                                        type="file"
                                        id="imageUploader"
                                        accept="image/*"
                                        className="text-gray-light w-full p-1 h-10 text-base hidden"
                                        onChange={onImageChange}
                                    />
                                </div>
                                <div className="flex sm:w-24 sm:h-24 w-16 h-16">
                                    {image && <img src={image} className="rounded-full object-cover w-full h-full" />}
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 mt-4 items-center">
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
