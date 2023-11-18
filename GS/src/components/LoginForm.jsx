import React from 'react';

const LoginForm = () => {
  return (
    <div className="login-form">
      <div className="login-header">
        <img src="/images/mainImage.jpg" alt="Imagem" />
        <p>Texto</p>
      </div>
      <form>
        <input type="text" placeholder="Usuário" />
        <input type="password" placeholder="Senha" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;