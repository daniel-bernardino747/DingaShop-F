import PropTypes from 'prop-types';

import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { isEmail } from 'validator';
import { loginHelper, registerHelper } from '../../helpers/auth.helpers';

import * as s from './style';

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
          resolve();
        });
      }
      if (isRegister) {
        registerHelper(data).then((reply) => {
          if (reply) {
            resolve();
            navigate('/app/login');
          }
          resolve();
        });
      }
    });
  }

  return (
    <s.Form onSubmit={(handleSubmit(onSubmit))}>
      {isRegister && (
      <s.Label htmlFor="i-name">
        <s.LabelTitle>Name:</s.LabelTitle>
        <s.Input
          id="i-name"
          type="text"
          error={errors?.name}
          disabled={isSubmitting}
              // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('name', { required: true })}
        />
        {errors?.name?.type === 'required' && (
        <s.TextError>Name is required.</s.TextError>
        )}
      </s.Label>
      )}

      {(isLogin || isRegister) && (
      <>
        <s.Label htmlFor="i-email">
          <s.LabelTitle>Email:</s.LabelTitle>
          <s.Input
            id="i-email"
            type="text"
            error={errors?.email}
            disabled={isSubmitting}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('email', {
              required: true,
              validate: (value) => isEmail(value),
            })}
          />
          {errors?.email?.type === 'required' && (
          <s.TextError>Email is required.</s.TextError>
          )}
          {errors?.email?.type === 'validate' && (
          <s.TextError>Email is invalid.</s.TextError>
          )}
        </s.Label>

        <s.Label htmlFor="i-pass">
          <s.LabelTitle>Password:</s.LabelTitle>
          <s.Input
            id="i-pass"
            type="password"
            error={errors?.password}
            disabled={isSubmitting}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('password', { required: true })}
          />
          {errors?.password?.type === 'required' && (
          <s.TextError>Password is required.</s.TextError>
          )}
        </s.Label>
      </>
      )}

      {isRegister && (
      <s.Label htmlFor="i-pass-confirm">
        <s.LabelTitle>Re-enter Password:</s.LabelTitle>
        <s.Input
          id="i-pass-confirm"
          type="text"
          error={errors?.passConfirm}
          disabled={isSubmitting}
              // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('passConfirm', {
            validate: (value) => value === watchPassword,
          })}
        />
        {errors?.passConfirm?.type === 'validate' && (
        <s.TextError>Passwords does not match.</s.TextError>
        )}
      </s.Label>
      )}

      {(isLogin || isRegister) && (
      <s.ButtonSubmit disabled={isSubmitting}>
        <s.TextButton>{isSubmitting ? 'Loading...' : 'Continue'}</s.TextButton>
      </s.ButtonSubmit>
      )}

      {isRegister && (
      <s.TextToLogin>
        Already have an account?
        {' '}
        <Link to="/app/login">
          <span>Sign-in.</span>
        </Link>
      </s.TextToLogin>
      )}
    </s.Form>
  );
}
AuthForm.propTypes = {
  isLogin: PropTypes.bool,
  isRegister: PropTypes.bool,
};
