import React, {FC} from 'react';

import Logo from 'assets/logos/logo192.png';

import * as S from './Styles';

const BrandingWLinks: FC = () => {
  return (
    <S.HomeBar>
      <S.Wrapper>
        <S.BrandingContainer>
          <S.Logo src={Logo} alt="Branding" />
          <S.BrandingText>Toffee Labs</S.BrandingText>
        </S.BrandingContainer>
      </S.Wrapper>
    </S.HomeBar>
  );
};

export default BrandingWLinks;
