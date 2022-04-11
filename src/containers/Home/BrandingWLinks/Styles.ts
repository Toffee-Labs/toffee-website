import styled from 'styled-components';

import colors from 'styles/colors';
import {h0, h2, t2} from 'styles/fonts';

interface AProps {
  element?: 'icon' | 'text';
}

export const HomeBar = styled.div`
  background-color: transparent;
  width: 100%;
  display: flex;
  justify-content: center;
  color: white;
  position: absolute;
  z-index: 999;
`;

export const Wrapper = styled.div`
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1em 0 1em 0;
`;

export const BrandingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.img`
  height: 50px;
  width: 50px;
`;

export const BrandingText = styled.span`
  color: ${colors.secondary};
  ${t2.semiBold};
  padding-left: 0.3em;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 480px) {
    display: none;
  }
`;

export const Link = styled.a<AProps>`
  margin-left: 0.7em;
  color: ${(props) => (props.element === 'icon' ? colors.secondary : colors.white)};
  ${(props) => (props.element === 'icon' ? h0.regular : h2.regular)}
  text-decoration: none;
`;
