import styled from 'styled-components';

export const ContainerPage = styled.div`
width: 953px;
display: flex;
flex-direction: column;
justify-content: center;
`;
export const ContainerProduct = styled.div`
display:flex;
width: 953px;
height: 118px;
justify-content: space-between;
align-items: center;
background: #D9D9D9;
border-radius: 10px;
padding-left: 19px;
padding-right: 27px;
margin-bottom:25px;
position: relative;
p{
  font-weight: 700;
  cursor: pointer;
}
`;

export const Upper = styled.div`
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
color: #000000;
}
button{
  width: 223px;
height: 48px;
background: #A6A6A6;
border-radius: 36px;
cursor: pointer;
}
`;

export const Info = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
img{
  width: 80px;
height: 80px;
border-radius: 10px;
margin-right: 35px;
}
`;

export const NamePrice = styled.div`
display: flex;
flex-direction: column;
h1{
  font-family: 'Ubuntu';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 37px;
color: #000000;
cursor: pointer;
}
`;

export const ContainerList = styled.div`
height: 600px;
/* overflow: scroll;
 */`;

/* export const Footer = styled.div`
width: 100%;
background-color: black;
position: absolute;
bottom:0;
`; */
