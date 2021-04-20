import { useState } from 'react';

export const useComment = () => {
    const [commentText, setCommentText] = useState('');
    const [comment, setComment] = useState(false);
    const inputChange = (e) => {
        setCommentText(e.target.value);
    }
    const addComment = () => {
        setComment(true)
    };

    return {
        commentText,
        setCommentText,
        comment,
        setComment,
        inputChange,
        addComment
    }
}