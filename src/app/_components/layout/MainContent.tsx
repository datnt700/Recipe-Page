/** @jsxImportSource @emotion/react */
import { useState } from 'react';

import { mainStyle } from '@/app/_components/layout/MainContent.style';
import { Category } from '@/app/_components/layout/Category';
import { Content } from '@/app/_components/layout/Content';

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
