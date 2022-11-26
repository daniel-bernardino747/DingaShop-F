import styled from 'styled-components';
import COLOR from '../../constants/colors.constants';

export const Box = styled.div`
  display: flex;
`;
export const BoxButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 1em 0;
  gap: 1em;
`;
export const BoxInfos = styled.div`
  padding: .5em 1em;
`;
export const BoxDetails = styled.div`
  padding: 1em 0;
`;
export const Button = styled.button`
  width: clamp(12em, 80%, 20em);
  height: 3em;
  border-radius: 1em;
  background-color: ${COLOR.GRAY_217};
  &&:hover {
    background-color: ${COLOR.GRAY_190};
  }
`;
export const ButtonBuy = styled(Button)`
  background-color: ${COLOR.GRAY_166};
  &&:hover {
    background-color: ${COLOR.GRAY_120};
  }
`;
export const Container = styled.section`
`;
export const ImageProduct = styled.img`
  width: 50%;
  height: auto;
  border-radius: .5em;
`;
export const Text = styled.p`
  margin-top: .5em;
`;
export const Title = styled.h1`
  font-size:2.2em;
  font-weight: 500;
`;
export const RatingStars = styled.div`
  margin: 1.3em 0;
  display: flex;
  align-items: flex-end;
  gap: .5em;

  p {
    font-size: 1.2em;
  }
`;
export const Subtitle = styled.p`
  font-size: 1.2em;
  margin: 0.6em 0 0.4em 0;
`;
