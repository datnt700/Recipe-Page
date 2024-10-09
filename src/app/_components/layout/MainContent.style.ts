import { css } from '@emotion/react';

export const mainStyle = {
  container: css({
    display: 'grid',
    gridTemplateColumns: '1fr',
    padding: '0 1rem',
    '@media screen and (min-width: 1024px)': {
      gridTemplateColumns: '0.5fr 2fr',
      gap: '2rem',
    },
  }),
};
