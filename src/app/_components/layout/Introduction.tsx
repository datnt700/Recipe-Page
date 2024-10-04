/** @jsxImportSource @emotion/react */

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import textBackground from '../../../../public/images/hero-text.svg';

import { introStyle } from './Introduction.style';

export const Introduction = () => {
  const [imageWidth, setImageWidth] = useState(180);
  const [imageHeight, setImageHeight] = useState(100);

  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth >= 1550) {
        setImageWidth(500);
        setImageHeight(300);
      } else if (window.innerWidth >= 1024) {
        setImageWidth(400);
        setImageHeight(250);
      } else if (window.innerWidth >= 600) {
        setImageWidth(300);
        setImageHeight(200);
      } else {
        setImageWidth(200);
        setImageHeight(100);
      }
    };

    window.addEventListener('resize', updateWidth);

    updateWidth();

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  return (
    <section id={'Introduction'}>
      <div css={introStyle.container}>
        <div css={introStyle.imageWrapper}>
          <Image
            src={textBackground}
            alt={'text-background'}
            width={imageWidth}
            height={imageHeight}
          />
        </div>
      </div>
    </section>
  );
};
