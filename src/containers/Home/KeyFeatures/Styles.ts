import styled from 'styled-components';
import colors from 'styles/colors';
import {d2, h3, h1} from 'styles/fonts';

export const RoundedTop = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 200px;
  margin-top: -79px;

  &:before {
    border-radius: 100%;
    position: absolute;
    background-color: ${colors.primary};
    right: -200px;
    left: -200px;
    top: 0;
    bottom: -200px;
    content: '';
  }
`;

export const Container = styled.div`
  width: 100%;
  position: relative;
  background-color: ${colors.primary};
  margin-top: -79px;
`;

export const Wrapper = styled.div`
  width: 85%;
  margin: auto;
  padding-bottom: 3em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.span`
  ${d2.bold}
  color: ${colors.white};
  text-align: center;
`;

export const Tint = styled.span`
  color: ${colors.secondary};
`;

export const GridContent = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 5em;
  margin-top: 3.5em;

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.white};
`;

export const ItemTitle = styled.span`
  ${h1.bold};
  display: inline-block;
  margin-bottom: 1em;
  flex: 1;
`;

export const ItemSubTitle = styled.span`
  ${h3.regular};
  flex: 1;
`;

export const Image = styled.img`
  align-self: center;
  height: 200px;
  width: 200px;
  margin-bottom: 1em;
`;
