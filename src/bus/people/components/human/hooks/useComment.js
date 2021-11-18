import { useState } from 'react';

export const useComment = () => {
    const [commentText, setCommentText] = useState('');
    const [comments, setComments] = useState([]);
    const inputChange = (e) => {
        setCommentText(e.target.value);
    }
    const addComment = () => {
        if (commentText.length) {
            setComments([
                ...comments,
                commentText
            ]);
            setCommentText('');
        }
    };

    const removeComment = (idx) => {
        setComments(
            comments.filter((el, index) => index !== idx )
        )
    }

    return {
        commentText,
        setCommentText,
        comments,
        setComments,
        inputChange,
        addComment,
        removeComment
    }
}