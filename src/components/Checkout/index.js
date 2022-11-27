import PropTypes from 'prop-types';
import { useState } from 'react';
import ReactModal from 'react-modal';
import close from '../../assets/image/fa-solid_window-close.svg';
import * as s from './style';

export default function Checkout({
  modalIsOpen, cart, setModalIsOpen,
}) {
  const [form, setForm] = useState({ name: '', cpf: '', securityNumber: '' });
  function handleChange(e) {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  }
  console.log(cart);

  return (
    <ReactModal
      isOpen={modalIsOpen}
      ariaHideApp={false}
      style={
                    {
                      overlay: {
                        background: '',

                      },
                      content: {
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.4)',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        border: '',
                        position: 'relative',
                      },
                    }
}
    >
      <s.ImageClose src={close} onClick={() => setModalIsOpen(false)} alt="Close" />
      <s.ModalContainer>
        <h1>
          Finalizar compra
        </h1>
        <s.ProductModal>
          { cart.map((c) => (
            cart ? (
              <s.Each>
                <img src={c.product.image} alt="" />
                <h1>{c.product.name}</h1>
              </s.Each>
            )

              : <></>))}

        </s.ProductModal>
        <form>
          <h2>Nome</h2>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          <h2>CPF</h2>
          <input
            name="cpf"
            value={form.cpf}
            onChange={handleChange}
          />
          <h2>Security number</h2>
          <input
            name="securityNumber"
            value={form.securityNumber}
            onChange={handleChange}
          />
          <button type="submit">Comprar</button>
        </form>
      </s.ModalContainer>
    </ReactModal>
  );
}

Checkout.propTypes = {
  modalIsOpen: PropTypes.bool,
  cart: PropTypes.object,
  setModalIsOpen: PropTypes.bool,
};
