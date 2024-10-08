'use client';

import { GlobalStyles } from '@/app/Global.style';
import { Introduction } from '@/app/_components/layout/Introduction';
import { MainContent } from '@/app/_components/layout/MainContent';

export default function Home() {
  return (
    <>
      <GlobalStyles />
      <Introduction />
      <MainContent />
    </>
  );
}
