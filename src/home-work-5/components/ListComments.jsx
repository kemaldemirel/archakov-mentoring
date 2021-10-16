import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


export default function ListComments({data, onDeleteComment}) {

  const stylesList = { 
    boxSizing: 'border-box',
    width: '100%', 
    bgcolor: 'background.paper', 
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '15px'
  }

  return (
    <List sx={stylesList}>

      <Typography variant="h5" gutterBottom component="h5">
        Отзывы
      </Typography>

      {
        data.map((item) => 
          <ListItem key={item.id} sx={{alignItems: 'flex-start'}}>

            <ListItemAvatar>
              <Avatar>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>

            <ListItemText sx={{margin: '0'}} primary={item.fullName} secondary={item.text}/>

            <IconButton onClick={() => onDeleteComment(item)} edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
            
          </ListItem>  
        )
      }
    </List>
  );
}