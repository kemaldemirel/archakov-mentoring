import React from 'react'

const App = () => {

  const [users, setUsers] = React.useState([])

  const getUsers = async () => {
    try{
     const response = await fetch('https://61753daa08834f0017c70b7f.mockapi.io/users')
     const data = await response.json()
     setUsers(data)
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div>
      <ul>
        {
          users.map(user => (
            <li key={user.id}>
              {user.id}. {user.name}
              <img src={user.avatar} alt="avatar" />
              <p>{user.comment}</p>
            </li>
          ))
        }
      </ul>
      <button onClick={getUsers}>Получить список пользователей</button>
    </div>
  )
}

export default App
