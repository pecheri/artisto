import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Comments from './Comments';
import UserContext from '../../context/user';
import FirebaseContext from '../../context/firebase';

export default function Action({ likes, userLikedPhoto, comments, docId }) {
    const [likeCount, setLikeCount] = useState(likes.length);
    const [allComments, setAllComments] = useState(comments);
    const [isUserLiked, setIsUserLiked] = useState(userLikedPhoto);

    const {
        user: { uid: userId = '' },
    } = useContext(UserContext);
    const { firebase, FieldValue } = useContext(FirebaseContext);

    const handleLike = async () => {
        setIsUserLiked(!isUserLiked);
        await firebase
            .firestore()
            .collection('photos')
            .doc(docId)
            .update({
                likes: isUserLiked ? FieldValue.arrayRemove(userId) : FieldValue.arrayUnion(userId),
            });
        setLikeCount((likeCount) => (isUserLiked ? likeCount - 1 : likeCount + 1));
    };

    return (
        <div className="">
            <div className="flex">
                <div className="flex items-end">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`sm:h-8 sm:w-8 h-6 w-6 text-gray-dark cursor-pointer ${isUserLiked && 'fill-red'} `}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        onClick={handleLike}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                    </svg>
                    <p className="text-sm text-gray-dark">{likeCount}</p>
                </div>
                <div className="flex items-end pl-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 sm:h-8 sm:w-8 text-gray-dark cursor-pointer"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                    </svg>
                    <p className="text-sm text-gray-dark">{allComments.length}</p>
                </div>
            </div>
            <Comments setAllComments={setAllComments} allComments={allComments} docId={docId} />
        </div>
    );
}

Action.propTypes = {
    likes: PropTypes.array.isRequired,
    comments: PropTypes.array.isRequired,
    userLikedPhoto: PropTypes.bool.isRequired,
    docId: PropTypes.string.isRequired,
};
