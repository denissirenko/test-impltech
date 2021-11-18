import { useComment } from './hooks/useComment';
import { useState } from 'react';


export const Human = ({ name, birth_year }) => {
    const { commentText, comments, inputChange, addComment, removeComment} = useComment();  

    const [like, setLike] = useState(true)


    const commentJSX = comments && comments.length !== 0 && comments.map((el, index) => {
        return (
            <div key={index}>
                {el}
                <button onClick={ () => removeComment(index) }>x</button>
            </div>
        );
    });

    return (
        <>
            <div>
                {name} - {birth_year}
                <input 
                    type="text"
                    onChange={inputChange}
                    value={commentText}
                />
                <button 
                    onClick={addComment}
                >comment</button>
            </div>
            {commentJSX}
            <div onClick={() => setLike(prevValue => !prevValue)} style={{width: 10, height: 10, backgroundColor: like ? 'red' : 'blue'}}></div>
        </>
    )
}