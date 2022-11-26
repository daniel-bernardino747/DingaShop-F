import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';
import { removeProductToCart, viewCart } from '../../helpers/cart.helpers';
import close from '../../assets/image/fa-solid_window-close.svg';

export async function loader() {
  const cart = await viewCart();
  return { cart };
}

export default function Cart() {
  const { cart } = useLoaderData();
  const userCart = cart.data.cart;
  const catalog = cart.data.catalog;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <ContainerPage>
      <Upper>
        <h1>Cart</h1>
        <button type="button" onClick={() => setModalIsOpen(true)}>Buy all</button>
      </Upper>
      <div>
        {userCart.map((c) => (
          catalog.map((p) => (c.idProduct === p._id
            ? (
              <ContainerProduct>
                <Info>
                  <img src={p.product.image} alt="" />
                  <h1>{p.product.name}</h1>
                </Info>
                <div onClick={() => removeProductToCart(p.product.name, c._id)}>X</div>
              </ContainerProduct>
            )
            : <></>))))}

      </div>
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
        <ImageClose src={close} onClick={() => setModalIsOpen(false)} alt="Close" />
        <ModalContainer>
          <h1>
            Finalizar compra
          </h1>
          <form>
            <h2>Nome</h2>
            <input />
            <h2>CPF</h2>
            <input />
            <h2>Security number</h2>
            <input />
            <button type="submit">Comprar</button>
          </form>
        </ModalContainer>
      </ReactModal>
    </ContainerPage>
  );
}
const ContainerPage = styled.div`
width: 953px;
display: flex;
flex-direction: column;
justify-content: center;
`;
const ContainerProduct = styled.div`
display:flex;
width: 953px;
height: 118px;
left: 243px;
top: 364px;
justify-content: space-between;
align-items: center;
background: #D9D9D9;
border-radius: 10px;
padding-left: 19px;
padding-right: 27px;
`;

const Upper = styled.div`
display: flex;
justify-content: space-between;
margin-top: 90px;
margin-bottom: 30px;
h1{
  font-family: 'Ubuntu';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 37px;
/* identical to box height */


color: #000000;
}
button{
  width: 223px;
height: 48px;
background: #A6A6A6;
border-radius: 36px;
}
`;

const Info = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
h1{
  font-family: 'Ubuntu';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 37px;
/* identical to box height */


color: #000000;
}
img{
  width: 80px;
height: 80px;
border-radius: 10px;
margin-right: 35px;

}
`;
const ModalContainer = styled.div`
display:flex;
flex-direction: column;
width: 650px;
height: 600px;
margin-left:320px;
background: #D9D9D9;
border-radius: 10px;
form{
  display: flex;
  flex-direction: column;
  position:absolute;
  bottom: 100px;
  margin-left: 50px;
}
h1{
font-family: 'Ubuntu';
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 37px;
color: #000000;
text-align: center;
}
h2{
  font-family: 'Ubuntu';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 30px;
color: #000000;
}
button{
 text-align: center;
width: 272px;
height: 58.59px;
background: #A6A6A6;
border-radius: 43.9103px;
font-family: 'Ubuntu';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 22px;
outline: none;
border: none;
color: #000000;
margin-left: 140px;
margin-top:50px;
}
input{
  width: 550px;
height: 40px;
background: #F9F7F7;
outline: none;
border: none;
}
`;

const ImageClose = styled.img`
width: 28px;
height: 28px;
display: flex;
position: absolute;
right: 55px;
`;
