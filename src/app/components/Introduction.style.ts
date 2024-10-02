import { css } from '@emotion/react';

export const introStyle = {
  container: css({
    backgroundImage: 'url("/images/hero-imagehc.jpg")',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '10rem',
    borderRadius: '0.75rem',
    position: 'relative',
    '@media (min-width: 640px)': {
      height: '15rem',
    },
    '@media (min-width: 1024px)': {
      height: '20rem',
    },
    '@media (min-width: 1280px)': {
      height: '25rem',
    },
    '@media (min-width: 1550px)': {
      height: '30rem',
    },
  }),
  imageWrapper: css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '6rem',
    paddingTop: '1rem',
    '@media (min-width: 1024px)': {
      paddingTop: '2rem',
      paddingLeft: '12rem',
    },
    '@media (min-width: 1550px)': {
      paddingTop: '4rem',
      paddingLeft: '18rem',
    },
  }),
};
