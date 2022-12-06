import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import Wrapper from '../assets/wrappers/LoginPage';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
      navigate('/');
    }
  }, []);

  const handleLogin = async () => {
    let result = await fetch('http://localhost:5000/login', {
      method: 'post',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    result = await result.json();
    console.warn(result);
    if (result.auth) {
      localStorage.setItem('user', JSON.stringify(result.user));
      localStorage.setItem('token', JSON.stringify(result.auth));
      toast.success('Welcome user');
      navigate('/');
    } else {
      toast.error('Invalid password or email');
    }
  };
  let route = useNavigate();
  const routeChange = () => {
    let path = '/newuser';
    navigate(path);
  };
  return (
    <Wrapper className='full-page'>
      <div className='form'>
        <input
          type='email'
          className='inputBox'
          placeholder='Enter Email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type='password'
          className='inputBox'
          placeholder='Enter Password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button onClick={handleLogin} className='btn-block' type='button'>
          Login
        </button>
        <p>
          <button type='button' className='btn-hero' onClick={routeChange}>
            {'/login' ? 'New User? ' : 'Login'}{' '}
          </button>
        </p>
      </div>
    </Wrapper>
  );
};

export default Login;
