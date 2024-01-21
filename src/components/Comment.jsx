import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';
export function Comment({content, onDeleteComment}) {
    const [likeCouunt, setLikeCount] = useState(0);
   
     function handleLikeCount() {
        setLikeCount(likeCouunt + 1 )
     }

   function handleDeleteComment() {
       onDeleteComment(content);
    }
    return (
        <div className={styles.comment}>
             <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/114631986?v=4"/>
          
           <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Mateus Bolito</strong>
                        <time dateTime='2023-02-25 14:00'>Cerca de 1h atras</time>
                    </div>

                    <button onClick={handleDeleteComment} title='Excluir Comentario'>
                        <Trash size={20} />
                    </button>
                </header>
                <p>{content} </p>

            </div>
            <footer>
                <button onClick={handleLikeCount}>
                    <ThumbsUp size={24}/> 
                    Likes <span>{likeCouunt} </span>
                </button>
            </footer>
           </div>
        </div>
    );
}