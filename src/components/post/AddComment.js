import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import UserContext from '../../context/user';
import FirebaseContext from '../../context/firebase';

export default function AddComment({ allComments, setAllComments, docId }) {
    const [comment, setComment] = useState('');
    const {
        user: { displayName, uid: userId },
    } = useContext(UserContext);
    const { firebase, FieldValue } = useContext(FirebaseContext);

    const handleSubmit = (event) => {
        event.preventDefault(event);
        setAllComments([{ comment, userId, displayName }, ...allComments]);
        setComment('');
        return firebase
            .firestore()
            .collection('photos')
            .doc(docId)
            .update({
                comments: FieldValue.arrayUnion({ comment, userId, displayName }),
            });
    };
    return (
        <div className="mt-2">
            <form className="flex" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="add a comment..."
                    autoComplete="off"
                    className="text-sm w-full p-2 rounded-l"
                    value={comment}
                    onChange={({ target }) => setComment(target.value)}
                />
                <button
                    type="submit"
                    className={`p-2 bg-blue-primary text-gray-light rounded-r sm:text-base text-sm ${
                        comment.length < 1 && 'opacity-50'
                    }`}
                >
                    SEND
                </button>
            </form>
        </div>
    );
}

AddComment.propTypes = {
    allComments: PropTypes.array,
    setAllComments: PropTypes.func.isRequired,
    docId: PropTypes.string.isRequired,
};
