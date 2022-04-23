import styled from 'styled-components';

import colors from 'styles/colors';
import {d2, h0, h2, h3} from 'styles/fonts';

import Leaf from 'assets/images/leaf.png';

export const Container = styled.div`
  width: 100%;
  position: relative;
  background-color: ${colors.primary};
`;

export const BackgroundImage = styled.div`
  position: absolute;
  width: 100%;
  height: 90%;
  top: 10%;
  opacity: 0.8;
  z-index: 1;
  background-image: url(${Leaf});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Wrapper = styled.div`
  width: 85%;
  margin: auto;
  padding-top: 5em;
  padding-bottom: 5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.span`
  ${d2.bold}
  color: ${colors.white};
  text-align: center;
  text-transform: uppercase;
`;

export const Tint = styled.span`
  color: ${colors.secondary};
`;

export const GridContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2.5em;
  margin-top: 3.5em;
  width: 100%;
  z-index: 2;

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.white};
`;

export const QuarterTitle = styled.span`
  ${h0.medium}
  color: ${colors.white};
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 1em;
`;

export const Jumbotron = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 60vh;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  border-radius: 20px;
`;

export const JumbotronSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1em;
  margin: 0 0.5em 0 0.5em;
`;

export const Divider = styled.span`
  width: 90%;
  margin: auto;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
`;

export const SectionTitle = styled.span`
  ${h2.bold}
  color: ${colors.primary};
  margin-bottom: 0.75em;
`;

export const SectionSubTitle = styled.span`
  ${h3.regular}
  color: ${colors.primary};
`;
