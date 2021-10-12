import React from 'react'

const Form = () => {
  let email = ''
  let password = ''

  const handleSubmit = (e) =>{
    e.preventDefault()
    
    if(email && password){
      console.log(email, password)
      email = e.target.children[0].value = ''
      password = e.target.children[1].value = ''
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
        onChange={(e) => email = e.target.value}
      />
      <input 
        type="password" 
        placeholder="Пароль" 
        onChange={(e) => password = e.target.value}
      />
      <button type="submit">Войти</button>
    </form>
  )
}

export default Form
