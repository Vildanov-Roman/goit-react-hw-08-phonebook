import { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import { getAuth } from 'redux/auth/authSlice';
import { loginUser } from 'redux/auth/authOperations';
import css from '../RegisterForm/RegisterForm.module.css';
import { Loader } from '../Loader/Loader';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        setEmail('');
        setPassword('');
    }
  };

  const dispatch = useDispatch();
  const { isLoading } = useSelector(getAuth);

  const handleSubmit = e => {
    e.preventDefault();

    if (setEmail() && setPassword() !== useState) {
      return toast.error(`Please, enter correct Email or Password`);
    }

    dispatch(loginUser({ email: email, password: password }));
    setEmail('');
    setPassword('');
  };

  const emailId = useMemo(() => nanoid(), []);
  const passwordId = useMemo(() => nanoid(), []);

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.label} htmlFor={emailId}>
        Email
      </label>
      <input
        id={emailId}
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
        required
        placeholder="mail@mail.com"
        className={css.input}
      />
      <label className={css.label} htmlFor={passwordId}>
        Password
      </label>
      <input
        id={passwordId}
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
        required
        placeholder="your password"
        className={css.input}
      />
      {!isLoading ? (
        <button type="submit" className={css.btn}>
          Log In
        </button>
      ) : (
        <Loader />
      )}
    </form>
  );
};

export default LoginForm;
