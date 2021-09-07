import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddComment from './AddComment';
import UserContext from '../../context/user';

export default function Comments({ allComments, setAllComments, docId, addNewComment, photo }) {
    const [viewAll, setViewAll] = useState(false);
    const { user } = useContext(UserContext);

    return (
        <div className="pt-2">
            <div>
                {allComments.slice(0, 3).map((comment, index) => (
                    <p className="text-sm text-gray-dark break-words" key={index}>
                        <Link to={`/p/${user.displayName}`}>
                            <span className="font-bold">{comment.displayName} </span>
                        </Link>
                        {'   '}
                        {comment.comment}
                    </p>
                ))}
            </div>
            {allComments.length > 3 && !viewAll ? (
                <p
                    className="text-xs text-gray-primary opacity-70 pt-2 cursor-pointer"
                    onClick={() => setViewAll(true)}
                >
                    View All Comments
                </p>
            ) : viewAll ? (
                allComments.slice(3).map((comment, index) => (
                    <p className="text-sm text-gray-dark break-words" key={index}>
                        <Link to={`/p/${user.displayName}`}>
                            <span className="font-bold">{comment.displayName} </span>
                        </Link>
                        {'   '}
                        {comment.comment}
                    </p>
                ))
            ) : null}
            <AddComment
                allComments={allComments}
                setAllComments={setAllComments}
                docId={docId}
                addNewComment={addNewComment}
                photo={photo}
            />
        </div>
    );
}

Comments.propTypes = {
    allComments: PropTypes.array.isRequired,
    setAllComments: PropTypes.func.isRequired,
    docId: PropTypes.string.isRequired,
    addNewComment: PropTypes.func.isRequired,
    photo: PropTypes.object,
};
