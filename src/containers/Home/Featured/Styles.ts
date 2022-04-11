import styled from 'styled-components';

import colors from 'styles/colors';
import {t0, t1, t2, h1, h3} from 'styles/fonts';

import BackgroundImage from 'assets/images/bgimage.jpg';

export const Overlay = styled.div`
  width: 100%;
  height: 115vh;
  position: absolute;
  top: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0);
`;

export const Background = styled.div`
  width: 100%;
  height: 115vh;
  background-color: #f5f5f5;
  background-image: url(${BackgroundImage});
  background-size: cover;
  position: relative;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 480px) {
    background-position: 80% 0;
  }
`;

export const Jumbotron = styled.div`
  position: absolute;
  top: 22%;
  left: 5%;
  width: 43%;
  min-height: 425px;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  border-radius: 20px;

  @media (max-width: 480px) {
    width: 90%;
  }
`;

export const Wrapper = styled.div`
  margin: 2.5em;

  @media (max-width: 480px) {
    margin: 1.75em;
  }
`;

export const Title = styled.div`
  color: ${colors.primary};
  ${t0.semiBold};

  @media (max-width: 480px) {
    ${t1.regular};
  }
`;

export const Subtitle = styled.div`
  color: ${colors.primary};
  ${h1.regular};
  margin-top: 1em;

  @media (max-width: 480px) {
    ${h3.regular};
  }
`;

export const Tint = styled.span`
  color: ${colors.secondary};
`;
