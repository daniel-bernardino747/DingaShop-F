import styled from 'styled-components';

export const ContainerFooter = styled.footer`
  display: flex;
  justify-content: center;
  margin-top: 200px;
`;
export const Footer = styled.div`
  position: absolute;
  margin-bottom: 0;
  width: 100%;
height:  10em;
  background-color: #434343;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  padding-top: 20px;
  img{
    width: 171px;
height: 64.57px;
justify-content:center;
 }
p{
    font-family: 'Ubuntu';
font-style: normal;
font-weight: 700;
font-size: 13px;
line-height: 15px;

color: #FFFFFF;

}
a{
    color: white;
}
`;

export const Content = styled.div`
width: 756px;
`;
export const Links = styled.div`
display: flex;
justify-content: space-between;
font-family: 'Ubuntu';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 23px;
color: #FFFFFF;
`;
