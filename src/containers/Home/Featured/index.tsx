import React, {FC} from 'react';

import * as S from './Styles';

const Featured: FC = () => {
  return (
    <>
      <S.Overlay />
      <S.Background />
      <S.Jumbotron>
        <S.Title>
          Join us with <S.Tint>Toffees</S.Tint> and help us open the world to <S.Tint>Metaverse</S.Tint>
        </S.Title>

        <S.Subtitle>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus debitis, adipisci molestiae accusantium,
          perspiciatis numquam quidem provident officiis inventore libero nemo consequatur velit! Ea fuga unde nesciunt
          explicabo minima in!
        </S.Subtitle>
      </S.Jumbotron>
    </>
  );
};

export default Featured;
