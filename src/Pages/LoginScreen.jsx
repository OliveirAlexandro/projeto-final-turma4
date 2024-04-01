import { useState } from 'react';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isValidEmail = email => /\S+@\S+\.\S+/.test(email);
  const isFormValid = isValidEmail(email) && password.length >= 8;

  return (
    <div>
      <input
        type="email"
        placeholder="Digite seu e-mail"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Digite sua senha"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button disabled={!isFormValid}>Entrar</button>
    </div>
  );
};

export default LoginScreen;