import React from 'react'
import LoginIcon from '../../public/loginIcon.svg'

const Login = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
        <div className='border-2 h-[50%] flex items-center justify-center w-[50%]'>
        <form className='w-[50%] flex flex-col gap-4'>
            <img src={LoginIcon} alt="login icon" className='w-20 h-20 mx-auto' />
            <div className='flex flex-col'>
            <label>Usuário</label>
            <input type="text" placeholder="Usuário" />
            </div>
            <div className='flex flex-col'>
            <label>Senha</label>
            <input type="password" placeholder="Senha" />
            </div>
            <button className='bg-[#F47C6D] text-white p-2 rounded-md'>Entrar</button>
        </form>
        </div>
    </div>
  )
}

export default Login