import React, { Component } from 'react'
import classes from './style.module.css'

export default class ProfileClass extends Component {
  render() {
    const {title, name, registerAt} = this.props
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
}

