'use client';
import { Suspense } from 'react';

import { GlobalStyles } from '@/app/Global.style';
import { FoodItem } from '@/app/food/_component/FoodItem';

export default function Home() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <GlobalStyles />
        <FoodItem />
      </Suspense>
    </>
  );
}
