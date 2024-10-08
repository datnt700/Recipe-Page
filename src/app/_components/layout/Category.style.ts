import { css } from '@emotion/react';

export const categoryStyle = {
  container: css({
    marginTop: '2rem',
  }),
  title: css({
    fontSize: '1.5rem',
    color: '#E5E7EB',
    fontWeight: '400',
    marginBottom: '2rem',
  }),
  list: css({
    display: 'grid',
    gridTemplateColumns: 'repeat(2,1fr)',
    rowGap: '0.8rem',
    columnGap: '0.5rem',
    '@media (min-width: 1024px)': {
      gridTemplateColumns: 'repeat(1,1fr)',
    },
    button: {
      border: 'none',
      backgroundColor: 'transparent',
      color: '#F9FAFB',
      cursor: 'pointer',
      borderRadius: '0.5rem',
      '&:hover': {
        backgroundColor: '#FEBD2E',
      },
    },
  }),
};
