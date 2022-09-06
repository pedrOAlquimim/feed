import { useState } from 'react'
import { Avatar } from '../Avatar'
import { Trash, ThumbsUp } from 'phosphor-react'
import styles from './Comment.module.css'

interface CommentProps {
  content: string;
  onDeleteComment: (commentToDelete: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  }


  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/pedrOAlquimim.png" alt='Avatar image'  />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Pedro Alquimim</strong>
              <time title='07 de Agosto ãs 08:13' dateTime='2022-08-7 11:13:30'>About 2h ago</time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20}/>
            Like <span>{likeCount}</span>
          </button>
        </footer>

      </div>
    </div>
  )
}