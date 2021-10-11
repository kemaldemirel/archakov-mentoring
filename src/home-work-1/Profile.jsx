import React from 'react'
import classes from './style.module.css'

const Profile = ({title, name, registerAt}) => {
  let options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return (
    <div className={classes.item}>
      <strong>Это {title}</strong>
      <h1>Привет, {name}</h1>
      <p>Дата регистрации: {registerAt.toLocaleString('ru', options)}</p>
    </div>
  )
}

export default Profile

