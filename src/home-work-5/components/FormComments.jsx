import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function FromComments({onAddComment}) {

  const [value, setValue] = React.useState({
    fullName: '',
    email: '',
    text: ''
  })

  const createNewComment = () => {
    const newComment = {
      ...value,
      id: Date.now,
      createdAt: Date.now(),
    }
    setValue({
      fullName: '',
      email: '',
      text: ''
    })
    onAddComment(newComment)
  }

  const stylesForm = {
    borderRadius: '5px', 
    border: '1px solid #ccc', 
    width: '100%', 
    padding: '15px', 
    boxSizing: 'border-box'
  }

  return (
    <Box
      component="form"
      sx={stylesForm}
      noValidate
      autoComplete="off"
    >

      <Typography 
        sx={
          {fontWeight: '700'}
        }
        variant="h5" 
        gutterBottom 
        component="h5"
      >
        Обратная связь:
      </Typography>

      <TextField
        value={value.fullName}
        fullWidth 
        id="outlined-basic" 
        label="Имя" 
        variant="outlined" 
        margin="normal"
        onChange={(e) => setValue({...value, fullName: e.target.value})}
      />

      <TextField 
        value={value.email}
        fullWidth 
        id="outlined-basic" 
        label="Почта" 
        variant="outlined" 
        margin="normal"
        onChange={(e) => setValue({...value, email: e.target.value})}
      />

      <TextField
          sx={
            {width: '100%'}
          }
          value={value.text}
          id="outlined-multiline-static"
          label="Текст"
          multiline
          rows={4}
          margin="normal"
          onChange={(e) => setValue({...value, text: e.target.value})}
        />

      <Button 
        sx={
          {width: '100%'}
        }
        variant="contained"
        onClick={createNewComment}
      >
        Отправить
      </Button>
      
    </Box>
  );
}