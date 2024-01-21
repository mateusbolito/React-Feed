import { useState } from 'react';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';


export function Post({author,  publishedAt, content}) {
     const [comments, setComments] = useState([
      'legal o post'
    ]);
     
     const [newCommentText,  setNewCommentText] = useState('')

     function handleNewComent() {
      event.preventDefault();
          setComments([...comments, newCommentText]);
          setNewCommentText('')
          
     }

      function handleNewCommentChange() {
        setNewCommentText(event.target.value)
      }

      function deleteComment(commentDelete) {
        const commentsDeleteNew = comments.filter(comment =>{
          return comment != commentDelete;
          
        })
        setComments(commentsDeleteNew)
      }
    return(
      <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <Avatar  src={author.avatarUrl}/>
                <div className={styles.authorInfo}>
                    <strong>{author.name} </strong>
                    <span>{author.role} </span>
                </div>
            </div> 

            <time title='26 de fevereiro' dateTime='2023-02-25 14:00'> Publicado ha 1h</time>
        </header>
         <div className={styles.content}>
         
           {content.map(C=>{
            if(C.type == 'paragraph') {
              return <p key={C.content}>{C.content} </p>;
                } else if(C.type == 'link') {
                  return <p key={C.content}><a href="">{C.content} </a> </p>;
                }
              })}
       
         <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉<a href="">jane.design/doctorcare</a></p>
        <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
         </div> 

         <form  onSubmit={handleNewComent} className= {styles.commentForm}>
            <strong>Deixei seu comentario</strong>
            <textarea placeholder='Deixe um Comentario'
            value={newCommentText}
             name="comment"
             required
            onChange={handleNewCommentChange}>
              
            </textarea>
           
           <footer>
           <button type='submit' disabled={newCommentText.length == 0}>Publicar</button>
           </footer>      
         </form>
            <div className={styles.commentList}>
              {comments.map(comment =>{
                return <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
              })}
            </div>

      </article> 

    );
}