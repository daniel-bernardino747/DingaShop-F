import styled from 'styled-components';
import COLOR from '../../constants/colors.constants';

export const BoxHistoric = styled.div`
  margin-top: 1em;
`;
export const BoxInitial = styled.div`
  display: flex;
  margin-bottom: 1em;
  div {
    margin: 1.5em;
  }
  img {
    border-radius: .5em;
    border: 0.0625em solid ${COLOR.GRAY_217o3};
    transition: box-shadow .3s;
    &&:hover {
      box-shadow: 0 0 0.7em ${COLOR.BLACK_15o2}; 
    }
  }
  h1 {
    font-size: 2.5em;
    font-weight: 500;
  }
  p {
    margin-top: .5em;
    width: 21em;
    line-height: 1.4em;
  }
`;
export const BoxInformations = styled.div`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    gap: 1em;
  }
`;
export const ButtonExit = styled.button.attrs({ type: 'button' })`
  margin-top: .5em;
  width: 21em;
  height: 2.5em;
  border: none;
  border-radius: .3em;
  outline: .1em solid ${COLOR.RED};
  background-color: ${COLOR.REDo3};
  transition: box-shadow .3s;
  padding: .5em;
  &&:hover {
    box-shadow: 0 0 .3em ${COLOR.REDo2}; 
  }
`;
export const Container = styled.div`
  margin-bottom: 3em;
`;
export const Input = styled.input`
  width: 21em;
  height: 2.5em;
  border: none;
  border-radius: .3em;
  outline: .1em solid ${COLOR.GRAY_190};
  transition: box-shadow .3s;
  padding: .5em;
  &&:focus, &&:hover {
    box-shadow: 0 0 0.7em ${COLOR.BLACK_15o2}; 
  }
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: .5em 0;
  gap: .5em;
`;
export const LabelText = styled.p`
  font-size: 1.2em;
`;
export const Subtitle = styled.h1`
  font-size: 1.6em;
  font-weight: 500;
`;
export const Products = styled.div`
  width: min(90%, 46em);
  margin: 0.5em 0;
  gap: 1em;
  display: flex;
  border-radius: .3em;
  border: .1em solid ${COLOR.GRAY_190};
  transition: box-shadow .3s;
  padding: .5em;
  &&:focus, &&:hover {
    box-shadow: 0 0 0.7em ${COLOR.BLACK_15o2}; 
  }
  div {
    display: flex;
    flex-direction: column;
    margin: .5em 0;
    gap: 0.5em;
  }

  p {
    font-weight: 500;
  }
`;
