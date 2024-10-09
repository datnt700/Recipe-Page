/** @jsxImportSource @emotion/react */
import Image from 'next/image';
import React from 'react';

import { cardStyle } from '../../../app/_components/common/Card.style';

interface CardProps {
  name: string;
  thumb: string;
}
export const Card = ({ name, thumb }: CardProps) => {
  return (
    <div css={cardStyle.card}>
      <Image
        src={thumb}
        alt={'card-image'}
        width={200}
        height={200}
        css={cardStyle.photo}
      />
      <h3 css={cardStyle.name}>{name}</h3>
    </div>
  );
};
