import React, {FC} from 'react';

import Logo from 'assets/logos/logo192.png';

import * as S from './Styles';

const Footer: FC = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.BrandingContainer>
          <S.Logo src={Logo} alt="toffeelabs logo" />
          <S.BrandingText>Toffee Labs</S.BrandingText>
        </S.BrandingContainer>

        <S.JoinContext>
          Follow us and join the <S.Tint>community</S.Tint>
        </S.JoinContext>

        <S.LinksContainer>
          <S.Link href="" target="_blank">
            <i className="fa-brands fa-discord"></i>
          </S.Link>

          <S.Link href="" target="_blank">
            <i className="fa-brands fa-twitter"></i>
          </S.Link>

          <S.Link href="" target="_blank">
            <i className="fa-brands fa-facebook"></i>
          </S.Link>

          <S.Link href="" target="_blank">
            <i className="fa-brands fa-instagram"></i>
          </S.Link>

          <S.Link href="" target="_blank">
            <i className="fa-brands fa-github"></i>
          </S.Link>
        </S.LinksContainer>

        <S.LegalLinksContainer>
          <S.LegalLinks href="">Terms and Conditions</S.LegalLinks>
          <S.LegalLinks href="">Privacy Policy</S.LegalLinks>
          <S.LegalLinks href="">Whitepaper</S.LegalLinks>
          <S.FooterText>&#169; 2022 ToffeeLabs. All Rights Reserved.</S.FooterText>
        </S.LegalLinksContainer>
      </S.Wrapper>
    </S.Container>
  );
};

export default Footer;
