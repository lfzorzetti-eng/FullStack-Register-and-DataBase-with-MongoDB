import './style.css'
import Trash from '../../assets/trash.svg'
import api from '../../services/api'
import { useEffect, useState, useRef } from 'react'

function Home() {
  const [users, setUsers] = useState([])

  const inputName = useRef()
  const inputEmail = useRef()
  const inputAge = useRef()

  async function getUsers() {
    const usersFromApi = await api.get('/user')
    setUsers(usersFromApi.data)
  }

  async function createUser() {
    await api.post('/user', {
      name: inputName.current.value,
      email: inputEmail.current.value,
      age: inputAge.current.value
    })
    getUsers()

    }

    async function deleteUsers(id) {
      await api.delete(`/user/${id}`)

      getUsers()

    }

  useEffect(() => {
    getUsers()
  }, [])

  return (

    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder='Nome' name='name' type='text' ref={inputName} />
        <input placeholder='Email' name='email' type='email' ref={inputEmail} />
        <input placeholder='idade' name='idade' type='number' ref={inputAge} />
        <button type='button' onClick={createUser}>Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id} className='card'>
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Email: <span>{user.email}</span></p>
            <p>Idade: <span>{user.age}</span></p>
          </div>
          <button onClick={() => deleteUsers(user.id)}>
            <img src={Trash} />
          </button>
        </div>
      ))}

    </div>
  )
}

export default Home
