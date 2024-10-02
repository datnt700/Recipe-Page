/** @jsxImportSource @emotion/react */

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import textBackground from '../../../public/images/hero-text.svg';

import { introStyle } from './Introduction.style';

export const Introduction = () => {
  const [imageWidth, setImageWidth] = useState(180);

  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth >= 1550) {
        setImageWidth(400);
      } else if (window.innerWidth >= 1024) {
        setImageWidth(300);
      } else if (window.innerWidth >= 600) {
        setImageWidth(200);
      } else {
        setImageWidth(180);
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
            height={imageWidth}
          />
        </div>
      </div>
    </section>
  );
};
