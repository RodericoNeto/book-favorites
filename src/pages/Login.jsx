import React from 'react'

export default function Login() {
  return (
    <>
      <form className='form-login'>
        <h1>Logo aqui</h1>
        <div className='form-campo'>
          <label>Seu nome de usuário:</label>
          <input type="text"></input>
        </div>
        <div className='form-campo'>
          <label>Sua senha:</label>
          <input type="text"></input>
        </div>
        <button>CADASTRAR
        </button>
      </form>
    </>
  )
}
