import logo from '../assets/react.svg'
import { useState } from 'react'

const SimpleForm = () => {
    //* TODA NUESTRA LÓGICA VA AQUÍ PARA QUE FUNCIONE EL FORM
    //? PASO #2: CREAR LOS ESTADOS DONDE GUARDARÉ LA INFORMACIÓN TECLEADA

    const [email, setEmail] = useState ('')
    const [password, setPassword] = useState ('')

    //? PASO #4: CREAR LA FUNCIÓN QUE SE EJECUTARA AL HACER CLICK EN EL BOTÓN DE ENVIAR DEL FORMULARIO
    const handleSubmit = (event) => { 
        event.preventDefault()
        console.log('Email: ', email, 'Password: ', password)
    }

  return (
    //* VA TODO NUESTRO DISEÑO HTML
    //? PASO #1: CREAR EL FORMUALRIO BASE EN JSX
    <div className='login'>
      <div className='login-container'>
        <img src={logo} alt='logo' />
        
        <form onSubmit={() => {}/* HANDLE SUBMIT */}>
            {/* PASO #3: GUARDO LA INFORMACIÓN EN EL ESTADO DE  */}
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            placeholder='correo@mail.com'
            id='simple-email'
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />

          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='simple-password'
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />
          
          <button type='submit'>
            Iniciar Sesion
          </button>
          
        </form>
      </div>
    </div>
  )
}

export default SimpleForm

