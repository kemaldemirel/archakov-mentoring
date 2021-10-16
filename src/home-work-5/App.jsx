import React from 'react'
import ListComments from './components/ListComments'
import FormComments from './components/FormComments'

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import styles from './App.module.scss'

const App = () => {
  const [comments, setComments] = React.useState([])

  React.useEffect(() => {
    const commentsToLS = JSON.parse(localStorage.getItem('comments')) || []
    if(commentsToLS !== null){
      setComments(commentsToLS)
    }
  },[])

  React.useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments))
  }, [comments])

  

  const addComment = (comment) =>{
    setComments([...comments, comment])
  }

  const deleteComment = (comment) => {
    setComments(comments.filter(com => com.createdAt !== comment.createdAt))
  }

  return (
    <div className={styles.App}>
      {
        comments.length > 0 ? (
          <ListComments data={comments} onDeleteComment={deleteComment} />
        ) : (
          <Alert sx={{marginBottom: '10px'}} severity="error">
            <AlertTitle>Ошибка</AlertTitle>
            <strong>Отзывов нет!</strong>
          </Alert>
        )
      }
      
      <FormComments onAddComment={addComment}/>
    </div>
  )
}

export default App

