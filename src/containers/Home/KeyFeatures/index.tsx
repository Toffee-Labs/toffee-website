import React, {FC} from 'react';

import * as S from './Styles';

import Token from 'assets/images/token.png';
import NFT from 'assets/images/nft.png';
import Dao from 'assets/images/dao.png';

const KeyFeatures: FC = () => {
  return (
    <>
      <S.RoundedTop />
      <S.Container>
        <S.Wrapper>
          <S.Title>
            Key&nbsp;<S.Tint>Features</S.Tint>
          </S.Title>
          <S.GridContent>
            <S.Item>
              <S.Image src={Token} alt="token" />
              <S.ItemTitle>
                <S.Tint>Toffee</S.Tint> makes our world go round
              </S.ItemTitle>
              <S.ItemSubTitle>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut justo dolor, congue eu metus et, viverra
                hendrerit turpis.
              </S.ItemSubTitle>
            </S.Item>
            <S.Item>
              <S.Image src={NFT} alt="token" />
              <S.ItemTitle>
                Buy Functional <S.Tint>3D NFTs</S.Tint>
              </S.ItemTitle>
              <S.ItemSubTitle>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut justo dolor, congue eu metus et, viverra
                hendrerit turpis.
              </S.ItemSubTitle>
            </S.Item>
            <S.Item>
              <S.Image src={Dao} alt="token" />
              <S.ItemTitle>
                Powered by <S.Tint>DAO</S.Tint> and <S.Tint>Smart Contracts</S.Tint>
              </S.ItemTitle>
              <S.ItemSubTitle>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut justo dolor, congue eu metus et, viverra
                hendrerit turpis.
              </S.ItemSubTitle>
            </S.Item>
          </S.GridContent>
        </S.Wrapper>
      </S.Container>
    </>
  );
};

export default KeyFeatures;
