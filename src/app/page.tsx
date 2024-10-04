'use client';

import { GlobalStyles } from '@/app/Global.style';
import { Introduction } from '@/app/_components/layout/Introduction';
import { Category } from '@/app/_components/layout/Category';
export default function Home() {
  return (
    <>
      <GlobalStyles />
      <Introduction />
      <Category />
    </>
  );
}
