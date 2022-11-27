import PropTypes from 'prop-types';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';

import { CheckoutContext } from '../../contexts/checkout.context';
import finalizeCheckout from '../../helpers/checkout.helpers';
import { sumOfCost } from '../../Utils/filter.util';
import formatInReal, { handleKeyUp } from '../../Utils/format.util';

import close from '../../assets/image/fa-solid_window-close.svg';
import * as s from './style';

export default function Checkout({ cart }) {
  const { checkoutOpen, setCheckoutOpen } = useContext(CheckoutContext);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();
  const sum = sumOfCost(cart);

  const onSubmit = (data) => {
    const body = { ...data, value: sum, products: cart };
    finalizeCheckout(body).then((sucess) => {
      if (sucess) {
        setCheckoutOpen(false);
      }
    });
  };

  return (
    <s.Overlay isOpen={checkoutOpen}>
      <s.Container>
        <s.ButtonExit onClick={() => setCheckoutOpen(false)}>
          <img src={close} alt="Close" />
        </s.ButtonExit>
        <s.Title>
          Finalizar compra
        </s.Title>
        <s.BoxProducts>
          {cart.map((c, i) => (
            <s.Product key={(c._id + i)}>
              <div>
                <img src={c.product.image} alt="" />
                <p>{c.product.name}</p>
              </div>
              <p>{formatInReal(c.product.cost)}</p>
            </s.Product>
          ))}
        </s.BoxProducts>
        <s.TotalCost>
          <h1>Total</h1>
          <p>{formatInReal(sum)}</p>
        </s.TotalCost>
        <s.Form onSubmit={(handleSubmit(onSubmit))}>
          <s.Label>
            <s.LabelText>Payment:</s.LabelText>
            <s.Select
              defaultValue="0"
              error={errors?.payment}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...register('payment', { validate: (value) => value !== '0' })}
            >
              <option value="0">Select your type of payment...</option>
              <option value="credit-card">Credit Card</option>
              <option value="debit-card">Debit Card</option>
              <option value="bank-slip">Bank Slip</option>
            </s.Select>

            {errors?.payment?.type === 'validate' && (
              <p className="error-message">Payment is required.</p>
            )}
          </s.Label>
          <s.Label>
            <s.LabelText>CPF:</s.LabelText>

            <s.Input
              id="i-cpf"
              type="text"
              onKeyUp={handleKeyUp}
              error={errors?.cpf}
              disabled={isSubmitting}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...register('cpf', { required: true, minLength: '14' })}
            />
            {errors?.cpf?.type === 'required' && (
              <p>CPF is required.</p>
            )}
            {errors?.cpf?.type === 'minLength' && (
              <p>CPF is required.</p>
            )}
          </s.Label>
          <s.Label>
            <s.LabelText>Security Number:</s.LabelText>
            <s.Input
              id="i-securityNumber"
              type="text"
              error={errors?.securityNumber}
              disabled={isSubmitting}
                  // eslint-disable-next-line react/jsx-props-no-spreading
              {...register('securityNumber', { required: true })}
            />
            {errors?.securityNumber?.type === 'required' && (
              <p>securityNumber is required.</p>
            )}
          </s.Label>
          <s.ButtonSubmit>Comprar</s.ButtonSubmit>
        </s.Form>
      </s.Container>
    </s.Overlay>
  );
}
Checkout.propTypes = {
  modalIsOpen: PropTypes.bool,
  catalog: PropTypes.object,
  cart: PropTypes.object,
  setModalIsOpen: PropTypes.bool,
};
