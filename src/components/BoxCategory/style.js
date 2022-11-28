import styled from 'styled-components';
import COLOR from '../../constants/colors.constants';

export const Container = styled.div``;
export const ContainerScroll = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  border-radius: .5em;
  background-color: ${COLOR.GRAY_217};
`;
export const TitleCategory = styled.h1`
  margin: 1em 0 .5em 0;
  font-weight: 500;
  font-size: 1.8em;
`;
export const Scroll = styled.div`
  display: flex;
  width: calc(100% - 2em);
  padding: 1em;
  overflow-x: scroll;
  background-color: ${COLOR.GRAY_217};
  gap: 0.5em;
`;
export const ToHover = styled.div`
  position: relative;
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
export const MoreInformations = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  justify-content: center;
  align-items: flex-end;
  width: 8em;
  border-radius: 0 0 .5em .5em;
  transition: background-color .3s;
  p {
    width: 100%;
    margin: .5em 0;
    color: ${COLOR.WHITE};
    font-weight: 500;
    text-align: center;
  }
  ${ToHover}:hover & {
    display: flex;
    background-color: ${COLOR.BLACK_15o8};
  }
`;
export const Overlay = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  width: 8em;
  height: 10em;
  border-radius: .5em;
  background-color: ${COLOR.BLACK_15o2};
  ${ToHover}:hover & {
    display: flex;
    cursor: pointer;
  }
`;
