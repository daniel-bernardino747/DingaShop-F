import styled from 'styled-components';
import COLOR from '../../constants/colors.constants';

export const BoxProducts = styled.div`
  width: 80%;
  height: max(auto, 20em);
  overflow: scroll;
  overflow-x: hidden;
  &&::-webkit-scrollbar {
    display: none;
  }
`;
export const ButtonExit = styled.button`
  position: absolute;
  top: .5em;
  right: .5em;
  border: none;
  background: none;
  cursor: pointer;
`;
export const ButtonSubmit = styled.button.attrs({ type: 'submit' })`
  width: 100%;
  height: 2.5em;
  margin-top: 2em;
  border-radius: .3em;
  background-color: ${COLOR.GRAY_190};
  transition: background-color .3s;
  &&:hover {
   background-color: ${COLOR.BLACK_15o2}; 
  }
`;
export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: min(90%, 50em);
  height: 42em;
  align-items: center;
  background-color: ${COLOR.GRAY_217};
  border-radius: .5em;
  padding: .5em;
`;
export const Form = styled.form`
  width: 21em;
`;
export const Input = styled.input`
  width: 100%;
  height: 2.5em;
  border: none;
  border-radius: .3em;
  outline: .1em solid ${(props) => (props.error ? COLOR.RED : COLOR.GRAY_190)};
  transition: box-shadow .3s;
  padding: .5em;
  &&:focus, &&:hover {
    box-shadow: 0 0 0.7em ${COLOR.BLACK_15o2}; 
  }
`;
export const Label = styled.label`
  width: 30em;
  height: 10em;
  background-color: green;
`;
export const LabelText = styled.p`
  font-size: 1.5em;
  font-weight: 500;
  margin: .8em 0 .4em 0;
`;
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Product = styled.div`
  display: flex;
  margin: 1em .5em;
  justify-content: space-between;
  align-items: center;
  div {
    gap: .5em;
    display: flex;
    align-items: center;
  }
  img {
    height: 3.5em;
    width: 3em;
    border-radius: .3em;
  }
`;
export const Select = styled.select`
  width: 100%;
  height: 2.5em;
  border: none;
  border-radius: .3em;
  padding: .5em;
  outline: .1em solid ${(props) => (props.error ? COLOR.RED : COLOR.GRAY_190)};
  transition: box-shadow .3s;
  &&:focus, &&:hover {
    box-shadow: 0 0 0.7em ${COLOR.BLACK_15o2}; 
  }
`;
export const Title = styled.h1`
  text-align: center;
  font-size: 2em;
  font-weight: 500;
  margin-top: .6em;
`;
export const TotalCost = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  background: ${COLOR.GRAY_217};
  h1 {
    font-size: 1.2em;
    font-weight: 500;
  }
  p {
    font-size: 1.2em;
  }
`;
