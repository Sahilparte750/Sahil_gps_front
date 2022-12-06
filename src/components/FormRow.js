import { IoEyeOff } from 'react-icons/io5';
import { useState } from 'react';
const FormRow = ({ type, name, value, handleChange, labelText }) => {
  const [passwordType, setPasswordType] = useState('password');

  const togglePassword = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
      return;
    }
    setPasswordType('password');
  };
  return (
    <div className='form-row'>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={name}
        className='form-input'
      />
      {/* {type === 'password' ? (
        <IoEyeOff className='eye' onClick={togglePassword} />
      ) : (
        ''
      )} */}
    </div>
  );
};

export default FormRow;
