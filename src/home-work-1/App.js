import React from 'react'
import Profile from './Profile'
import ProfileClass from './ProfileClass'
import classes from './style.module.css'


const App = () => {
  return (
    <div className={classes.container}>
      <Profile title="Функциональный компонент" name="Кемал" registerAt={new Date(2021, 5, 20)}  />
      <ProfileClass title="Классовый компонент" name="Кемал" registerAt={new Date(2021, 5, 20)} />
    </div>
  )
}

export default App

