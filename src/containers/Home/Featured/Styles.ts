import styled from 'styled-components';

import colors from 'styles/colors';
import {t0, h1} from 'styles/fonts';

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
  padding: 2.2em;
`;

export const Title = styled.div`
  color: ${colors.primary};
  ${t0.semiBold};
`;

export const Subtitle = styled.div`
  color: ${colors.primary};
  ${h1.regular};
  margin-top: 2em;
`;

export const Tint = styled.span`
  color: ${colors.secondary};
`;
