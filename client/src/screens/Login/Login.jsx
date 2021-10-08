import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../layouts/Layout';
import './Login.css';

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: '',
    passsword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <form className='login' onSumbit={(e) => {
      e.preventDefault();
      props.handleLogin(formData);
    }}>
      <h3>Login</h3>
      <label>
        Username:
        <input
          type='text'
          name='username'
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <button>Submit</button>
      {/* <Link to='register'>Register</Link> */}

    </form>
  )
}