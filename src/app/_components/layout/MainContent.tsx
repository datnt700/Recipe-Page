/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';

import { Category } from '../../../app/_components/layout/Category';
import { Content } from '../../../app/_components/layout/Content';

import { mainStyle } from './MainContent.style';

export const MainContent = () => {
  const [cateName, setCateName] = useState('Beef');

  const handleCate = (e: string) => {
    setCateName(e);
  };

  return (
    <div css={mainStyle.container}>
      <Category handleCate={handleCate} cateName={cateName} />
      <Content cateName={cateName} />
    </div>
  );
};
