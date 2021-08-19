import React, { useState } from 'react';
import Header from '../components/Header';
import { useHistory } from 'react-router-dom';
import { uploadNewPost } from '../services/firebase';
import useUser from '../hooks/useUser';

export default function UploadImage() {
    const [image, setImage] = useState(null);
    const [imageForUpload, setImageForUpload] = useState(null);
    const [caption, setCaption] = useState('');
    const history = useHistory();

    console.log('image', image);
    console.log('imageForUpload', imageForUpload);

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
        await uploadNewPost(caption, imageForUpload, userId);
        alert('Your post was successfully uploaded!');
        const timer = setTimeout(() => {
            history.push(`/p/${username}`);
        }, 500);
    };

    const isInvalid = !image || !caption;

    const removeImageSelected = (event) => {
        event.preventDefault();
        setImage(null);
    };

    return (
        <div>
            <Header />
            <div className="container max-w-screen-lg mx-auto">
                <div className="pt-32 flex">
                    <form onSubmit={postSubmit} className="flex w-full max-w-screen-lg mx-auto">
                        <div className="w-1/2">
                            <div className="border-gray-light border-dotted border-4 flex relative h-96 items-center justify-center rounded-xl">
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
                                        <img src={image} className="p-4 m-4 mx-auto" />
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
                        <div className="w-1/2 h-96 flex justify-center items-end pl-8">
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
                                    className={`mt-4 bg-yellow-primary text-gray-dark py-2 px-6 rounded ${
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