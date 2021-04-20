import { useComment } from './hooks/useComment';


export const Human = ({ name, birth_year }) => {
    
    const { commentText, comment, inputChange, addComment} = useComment();    

    const commentJSX = comment && (
        <div>
            <p>Comment:</p>
            <p>{commentText}</p>
        </div>
    );

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
        </>
    )
}