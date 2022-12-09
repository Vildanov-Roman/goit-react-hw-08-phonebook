// import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { nanoid } from 'nanoid';
import { getAuth } from 'redux/auth/authSlice';
import { registerUser } from 'redux/auth/authOperations';
import css from './RegisterForm.module.css';
import { Loader } from '../Loader/Loader';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const { isLoading } = useSelector(getAuth);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      registerUser({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Username
        <input type="text" name="name" />
      </label>
      <label className={css.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" />
      </label>
      {!isLoading ? (
        <button type="submit" className={css.btn}>
          Sign Up
        </button>
      ) : (
        <Loader />
      )}
    </form>
  );
};

export default RegisterForm;
