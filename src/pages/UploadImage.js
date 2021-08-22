import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { useHistory } from 'react-router-dom';
import { uploadNewPost } from '../services/firebase';
import useUser from '../hooks/useUser';

export default function UploadImage() {
    const [image, setImage] = useState(null);
    const [imageForUpload, setImageForUpload] = useState(null);
    const [caption, setCaption] = useState('');
    const [upload, setUpload] = useState(false);
    const history = useHistory();

    useEffect(() => {
        document.title = 'Post - Artisto';
    }, []);

    const {
        userInfo: { userId, username },
    } = useUser();

    const onImageChange = (event) => {
        setImageForUpload(event.target.files);
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
        }
    };

    const postSubmit = async (event) => {
        event.preventDefault();
        await uploadNewPost(caption, imageForUpload, userId, setUpload);
        history.push(`/p/${username}`);
    };

    const isInvalid = !image || !caption;

    const removeImageSelected = (event) => {
        event.preventDefault();
        setImage(null);
    };

    return (
        <div>
            <Header />
            {upload && (
                <div className="flex absolute top-0 left-0 w-screen h-screen bg-gray-dark opacity-70 z-90 items-center justify-center">
                    <p className="text-2xl text-gray-light bg-gradient-to-r from-blue-primary via-yellow-primary to-red-primary py-4 px-8 rounded animate-pulse">
                        Uploading...
                    </p>
                </div>
            )}
            <div className="container max-w-screen-lg mx-auto px-4 mb-8">
                <div className="pt-20 flex max-h-screen">
                    <form onSubmit={postSubmit} className="sm:flex w-full max-w-screen-lg mx-auto">
                        <div className="sm:w-1/2 pb-4 sm:pb-0 max-h-full">
                            <div className="border-gray-light border-dotted border-4 flex relative h-60 sm:h-96 max-h-full items-center justify-center rounded-xl">
                                {image && (
                                    <button onClick={removeImageSelected} className="absolute top-0 left-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-8 w-8 text-red-primary"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </button>
                                )}

                                {image ? (
                                    <div className="flex w-full h-full">
                                        <img src={image} className="p-4 m-4 mx-auto object-contain" />
                                    </div>
                                ) : (
                                    <div>
                                        <label
                                            htmlFor="imageUploader"
                                            className="cursor-pointer text-gray-light bg-blue-primary p-2 rounded"
                                        >
                                            Choose Image
                                        </label>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={onImageChange}
                                            className="text-gray-light text-center hidden"
                                            id="imageUploader"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="sm:w-1/2 sm:h-96 flex justify-center items-end sm:pl-8 max-h-full ">
                            <div className="w-full">
                                <textarea
                                    placeholder="Write a caption..."
                                    onChange={({ target }) => setCaption(target.value)}
                                    value={caption}
                                    className="h-32 p-4 w-full rounded"
                                />
                                <button
                                    type="submit"
                                    disabled={isInvalid}
                                    className={`mt-4 bg-yellow-primary text-gray-dark py-2 px-6 rounded mx-auto sm:mx-0 block ${
                                        isInvalid && 'opacity-50'
                                    }`}
                                >
                                    Post
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
