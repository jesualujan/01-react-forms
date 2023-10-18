import logo from '../assets/react.svg'
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const ReactHookForm = () => {
  //* CREACIÓN DEL ESQUEMA DEL FORMULARIO DE USUARIO UTILIZANDO YUP, PARA VALIDAR NUESTRO FORMULARIO O NUESTROS CAMPOS

  const userFormSchema = yup.object({
        firstName: ,
        lastName: ,
        age: ,
        password: ,
        gender: 
  }.required())












  return (
    <div className='login'>
    <div className='login-container'>
      <img src={logo} alt='logo' />
      <form
        onSubmit={() => { }/* HANDLE SUBMIT */}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
      
        <label htmlFor='firstName'>Nombre</label>
        <input
          type='text'
          name='firstName'
          placeholder='Tu Nombre'
          id='firstName'
        />

        <label htmlFor='lastName'>Apellido</label>
        <input
          type='text'
          name='lastName'
          placeholder='Tu Apellido'
          id='lastName'
        />

        <label htmlFor='age'>Edad</label>
        <input
          type='number'
          name='age'
          placeholder='Tu Edad'
          id='age'
        />

        <label htmlFor='gender'>Genero</label>
        <select name='gender' id='gender'>
          <option value=''>Elige un genero</option>
          <option value='M'>Masculino</option>
          <option value='F'>Femenino</option>
          <option value='O'>Otro</option>
        </select>

        <label htmlFor='email'>Email</label>
        <input
          type='text'
          name='email'
          placeholder='correo@mail.com'
          id='email'
        />

        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          id='password'
        />

        <button type='submit'>
          Iniciar Sesion
        </button>
      </form>
    </div>
  </div>
  )
}

export default ReactHookForm