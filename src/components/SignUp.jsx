import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider';
import '../styles/Auth.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { signUp } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = await signUp(email, password);
    if (err) setError(err.message);
    else navigate('/');
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Inscription</h2>
        {error && <div className="auth-error">{error}</div>}
        <label>Email</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        <label>Mot de passe</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        <button type="submit" className="auth-button">S'inscrire</button>
        <p>Vous avez déjà un compte? <Link to="/login">Connexion</Link></p>
      </form>
    </div>
  );
};

export default SignUp;
