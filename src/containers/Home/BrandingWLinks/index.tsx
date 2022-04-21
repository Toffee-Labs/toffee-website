import React, {FC} from 'react';

import Logo from 'assets/logos/logo192.png';

import * as S from './Styles';

const BrandingWLinks: FC = () => {
  return (
    <S.HomeBar>
      <S.Wrapper>
        <S.BrandingContainer>
          <S.Logo src={Logo} alt="toffeelabs logo" />
          <S.BrandingText>Toffee Labs</S.BrandingText>
        </S.BrandingContainer>
        <S.LinksContainer>
          <S.ButtonLink href="" target="_blank">
            Whitepaper
          </S.ButtonLink>

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
      </S.Wrapper>
    </S.HomeBar>
  );
};

export default BrandingWLinks;
