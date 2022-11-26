import styled from 'styled-components';

export const ModalContainer = styled.div`
display:flex;
flex-direction: column;
width: 650px;
height: 600px;
margin-left:320px;
background: #D9D9D9;
border-radius: 10px;
padding-left: 50px;
form{
  display: flex;
  flex-direction: column;
  position:absolute;
  bottom: 70px;
}
h1{
font-family: 'Ubuntu';
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 37px;
color: #000000;
text-align: center;
padding-top: 40px;
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
export const ImageClose = styled.img`
width: 28px;
height: 28px;
display: flex;
position: absolute;
right: 55px;
`;
export const Each = styled.div`
display: flex;
align-items: center;
`;
export const ProductModal = styled.div`
height: 150px;
overflow: scroll;
img{
  width: 60px;
height: 60px;
border-radius: 10px;
}
h1{
  font-family: 'Ubuntu';
font-style: normal;
font-weight: 700;
font-size: 20px;
color: #000000;
}
`;
