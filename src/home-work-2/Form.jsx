import React from 'react'

const Form = () => {
  let email = ''
  let password = ''

  const handleChange = (e) =>{
    if(e.target.type === 'email'){
      email = e.target.value
    }
    if(e.target.type === 'password'){
      password = e.target.value
    }
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    
    if(email && password){
      console.log(email, password)
      e.target.reset()
      email = ''
      password = ''
    }else{
      alert('Пожалуйста, введите данные')
    }

  }

  return (
    <form 
      onSubmit={handleSubmit}
      style={{
        margin: '0 auto',
        width: '300px',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
    }}>
      <input 
        type="email" 
        placeholder="Email" 
        onChange={handleChange}
      />
      <input 
        type="password" 
        placeholder="Пароль" 
        onChange={handleChange}
      />
      <button type="submit">Войти</button>
    </form>
  )
}

export default Form
