import styled from 'styled-components';

import {t1, h0, d2, h3, h4} from 'styles/fonts';
import colors from 'styles/colors';

export const Container = styled.div`
  width: 100%;
  position: relative;
  margin-top: -79px;
  background-color: ${colors.footer};
`;

export const Wrapper = styled.div`
  width: 85%;
  margin: auto;
  padding-top: 5em;
  padding-bottom: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BrandingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 3.5em;
  margin-bottom: 3.5em;
`;

export const Logo = styled.img`
  height: 60px;
  width: 60px;
`;

export const BrandingText = styled.span`
  color: ${colors.secondary};
  ${t1.semiBold};
  padding-left: 0.3em;
`;

export const JoinContext = styled.span`
  display: inline-block;
  color: ${colors.white};
  margin-bottom: 1em;
  ${h0.bold}
  text-align: center;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 25%;

  @media (max-width: 480px) {
    width: 90%;
  }
`;

export const Link = styled.a`
  color: ${colors.white};
  ${d2.regular}
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`;

export const Tint = styled.span`
  color: ${colors.secondary};
`;

export const LegalLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 5em;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const LegalLinks = styled.a`
  color: ${colors.white};
  ${h3.regular}
  text-decoration: none;
  margin-right: 1.5em;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 480px) {
    margin-bottom: 1em;
  }
`;

export const FooterText = styled.span`
  color: rgba(255, 255, 255, 0.3);
  margin-left: auto;
  ${h4.regular}

  @media (max-width: 480px) {
    margin-left: 0;
    margin-top: 5em;
  }
`;
