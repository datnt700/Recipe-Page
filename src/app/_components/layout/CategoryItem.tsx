/** @jsxImportSource @emotion/react */
import Image from 'next/image';
import React from 'react';

import { cateItemStyle } from '../../_components/layout/CategoryItem.style';
interface CategoryItemProps {
  name: string;
  thumb: string;
}

export const CategoryItem = ({ name, thumb }: CategoryItemProps) => {
  return (
    <div css={cateItemStyle.container}>
      <div css={cateItemStyle.image}>
        <Image src={thumb} alt={'category-image'} width={65} height={50} />
      </div>
      <h3 css={cateItemStyle.name}>{name}</h3>
    </div>
  );
};
