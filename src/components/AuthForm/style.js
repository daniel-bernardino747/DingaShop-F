import styled from 'styled-components';
import COLOR from '../../constants/colors.constants';

export const ButtonRegister = styled.button.attrs({ type: 'button' })`
  width: 18em;
  height: 2.5em;
  border: none;
  border-radius: .3em;
  background-color: ${COLOR.GRAY_217};
  transition: background-color .3s;
  &&:hover {
   background-color: ${COLOR.BLACK_15o2}; 
  }
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
  margin-top: 3em;
  padding: 1em;
  border-radius: .3em;
  background-color: ${COLOR.GRAY_217};
`;
export const ContainerRegister = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Input = styled.input`
  width: 100%;
  height: 2.5em;
  border: none;
  border-radius: .3em;
  outline: .1em solid ${(props) => (props.error ? COLOR.RED : COLOR.GRAY_190)};
  transition: box-shadow .3s;
  &&:focus, &&:hover {
    box-shadow: 0 0 0.7em ${COLOR.BLACK_15o2}; 
  }
`;
export const Label = styled.label`
  width: 18em;
  padding: 0 1em;
`;
export const LabelTitle = styled.h2`
  padding: 1em 0 .5em 0;
  font-weight: 500;
`;
export const Line = styled.div`
  width: 5.3em;
  height: .225em;
  border: .0625em solid ${COLOR.BLACK_50};
  border-radius: .0625em;
  background-color: ${COLOR.BLACK_50};
`;
export const TextToLogin = styled.p`
  width: 100%;
  font-size: .9em;
  font-weight: 500;
  margin-top: 1em;
  span {
    font-weight: 400;
  }
  a {
    text-decoration: none;
  }
`;
export const Text = styled.p`
  color: ${COLOR.BLACK_50};
  font-weight: 500;
  font-size: .9em;
`;
export const TextError = styled.p`
  padding: .5em 0;
  font-size: .7em;
  color: ${COLOR.RED};
`;
export const TextButton = styled.p`
  font-weight: 500;
  font-size: .9em;
`;
export const Title = styled.h1`
  padding-top: .5em;
  font-weight: 700;
  font-size: 1.5em;
`;
export const Subtitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em 0 1em 0;
  gap: .7em;
`;
