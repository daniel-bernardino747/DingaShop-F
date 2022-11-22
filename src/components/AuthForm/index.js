import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { isEmail } from 'validator';
import { loginHelper, registerHelper } from '../../helpers/auth.helpers';

export default function AuthForm({ isLogin, isRegister }) {
  const {
    watch,
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();

  const navigate = useNavigate();

  const watchPassword = isRegister ? watch('password') : '';

  function onSubmit(data) {
    return new Promise((resolve) => {
      if (isLogin) {
        loginHelper(data).then((reply) => {
          if (reply) {
            resolve();
            navigate('/');
          }
        });
      }
      if (isRegister) {
        registerHelper(data).then((reply) => {
          if (reply) {
            resolve();
            navigate('/app/login');
          }
        });
      }
    });
  }

  return (
    <>
      <forms onSubmit={(handleSubmit(onSubmit))}>
        {isRegister && (
          <label htmlFor="i-name">
            <h2>Name:</h2>
            <input
              id="i-name"
              type="text"
              disabled={isSubmitting}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...register('name', { required: true })}
            />
            {errors?.name?.type === 'required' && (
            <p>Name is required.</p>
            )}
          </label>
        )}

        {(isLogin || isRegister) && (
          <>
            <label htmlFor="i-email">
              <h2>Email:</h2>
              <input
                id="i-email"
                type="text"
                disabled={isSubmitting}
            // eslint-disable-next-line react/jsx-props-no-spreading
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
            // eslint-disable-next-line react/jsx-props-no-spreading
                {...register('password', { required: true })}
              />
              {errors?.password?.type === 'required' && (
              <p>Password is required.</p>
              )}
            </label>
          </>
        )}

        {isRegister && (
          <label htmlFor="i-pass-confirm">
            <h2>Re-enter Password:</h2>
            <input
              id="i-pass-confirm"
              type="text"
              disabled={isSubmitting}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...register('passConfirm', {
                validate: (value) => value === watchPassword,
              })}
            />
            {errors?.passConfirm?.type === 'validate' && (
            <p>Passwords does not match.</p>
            )}
          </label>
        )}

        {(isLogin || isRegister) && (
          <label htmlFor="i-submit">
            <input
              id="i-submit"
              type="submit"
              disabled={isSubmitting}
              value={isSubmitting ? 'Loading...' : 'Continue'}
            />

          </label>
        )}

        {isRegister && (
          <p>
            Already have an account?
            {' '}
            <Link to="/app/login">
              <span>Sign-in.</span>
            </Link>
          </p>
        )}
      </forms>

      {isLogin && (
      <div>
        <p>New to Dinga?</p>
        <Link to="/app/sign-up">
          <button type="button">Create your Dinga Account</button>
        </Link>
      </div>
      )}
    </>
  );
}
AuthForm.propTypes = {
  isLogin: PropTypes.bool,
  isRegister: PropTypes.bool,
};
