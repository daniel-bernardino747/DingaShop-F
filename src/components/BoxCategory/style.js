import styled from 'styled-components';
import COLOR from '../../constants/colors.constants';

export const Container = styled.div``;
export const ContainerScroll = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-radius: .5em;
  background-color: ${COLOR.GRAY_217};
  overflow: scroll;
`;
export const TitleCategory = styled.h1`
  font-size: 1.8em;
  font-weight: 500;
  margin: 1em 0 .5em 0;
`;
export const Scroll = styled.div`
  display: flex;
  width: calc(100% - 2em);
  padding: 1em;
  overflow-x: scroll;
  background-color: ${COLOR.GRAY_217};
  gap: 0.5em;
`;
export const Product = styled.div`
  width: 8em;
  height: 10em;
  border-radius: .5em;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
