import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import './Signup.scss';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password);
      navigate('/account');
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className="sign-block">
      <h4>
        Already account?
        <Link to="/">Sign in</Link>
      </h4>
      <form onSubmit={handleSubmit}>
        <div>
          <h4>Email adress</h4>
          <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
        </div>
        <div>
          <h4>Password</h4>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </div>
        <button>Sign in</button>
      </form>
    </div>
  );
};

export default Signup;
