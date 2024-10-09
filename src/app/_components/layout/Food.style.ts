import { css } from '@emotion/react';

export const foodStyle = {
  container: css({
    display: 'grid',
    gridTemplateColumns: 'repeat(1,1fr)',
    gap: '2rem',
    '@media (min-width: 1024px)': {
      gridTemplateColumns: 'repeat(2,1fr)',
    },
    '@media (min-width: 1280px)': {
      gridTemplateColumns: 'repeat(3,1fr)',
    },
  }),
};
