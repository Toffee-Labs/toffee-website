import React, {FC} from 'react';

import * as S from './Styles';

const Newsletter: FC = () => {
  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.Title>
            News<S.Tint>Letter</S.Tint>
          </S.Title>
          <S.InputGroup>
            <S.Input placeholder="Your email address" />
            <S.Button>Subscribe</S.Button>
          </S.InputGroup>
        </S.Wrapper>
      </S.Container>
      <S.RoundedBottom />
    </>
  );
};

export default Newsletter;
