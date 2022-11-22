import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { isEmail } from 'validator';

export default function AuthForm({isLogin}) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();

  function onSubmit(data) {
    return new Promise((resolve) => {
      const { email, password } = data;
      console.log(email, password);
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }
  
  return (
    <>
      <forms onSubmit={(handleSubmit(onSubmit))}>
        <label htmlFor="i-email">
          <h2>Email:</h2>
          <input
            id="i-email"
            type="text"
            disabled={isSubmitting}
            {...register('email', {
              required: true,
              validate: (value) => isEmail(value),
            })}
          />
          {errors?.email?.type === 'required' && (
          <p>Email is required.</p>
          )}
          {errors?.identifier?.type === 'validate' && (
          <p>Email is invalid.</p>
          )}
        </label>

        <label htmlFor="i-pass">
          <h2>Password:</h2>
          <input
            id="i-pass"
            type="password"
            disabled={isSubmitting}
            {...register('password', { required: true })}
          />
          {errors?.password?.type === 'required' && (
          <p>Password is required.</p>
          )}
        </label>

        <label htmlFor="i-submit">
          <input
            id="i-submit"
            type="submit"
            disabled={isSubmitting}
            value={isSubmitting ? 'Loading...' : 'Continue'}
          />

        </label>
      </forms>
      <div>
        <p>New to Dinga?</p>
        <Link to="app/sign-up">
          <button type="button">Create your Dinga Account</button>
        </Link>
      </div>
    </>
  );
}
AuthForm.propTypes = {
  isLogin: PropTypes.bool,
}