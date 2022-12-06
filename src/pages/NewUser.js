import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import Wrapper from '../assets/wrappers/NewUserPage';

const NewUser = () => {
  const [data, setData] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
      navigate('/');
    }
  }, []);

  const collectData = async () => {
    console.warn(name, email, password);
    let result = await fetch('http://localhost:5000/register', {
      method: 'post',
      body: JSON.stringify({ name, email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    result = await result.json();
    console.warn(result);
    localStorage.setItem('user', JSON.stringify(result.result));
    localStorage.setItem('token', JSON.stringify(result.auth));
    if (!email || !password || (!'user' && !name)) {
      toast.error('Please fill out all field');
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      return;
    }
    if (email === '' || name === '' || password === '') {
      toast.error('fill all field');
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      return;
    }

    if ('user') {
      navigate('/');
    }
  };

  let route = useNavigate();
  const routeChange = () => {
    let path = '/login';
    navigate(path);
  };

  return (
    <Wrapper className='full-page'>
      <div className='form'>
        <input
          className='inputBox'
          type='text'
          placeholder='Enter Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className='inputBox'
          type='email'
          placeholder='Enter Email'
          value={email}
          name='email'
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className='inputBox'
          type='password'
          placeholder='Enter password'
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={collectData} className='btn-block' type='submit'>
          Sign Up
        </button>
        <p>
          <button type='button' className='btn-hero' onClick={routeChange}>
            {'/newuser' ? 'Login? ' : 'New User ?'}{' '}
          </button>
        </p>
      </div>
    </Wrapper>
  );
};

export default NewUser;
