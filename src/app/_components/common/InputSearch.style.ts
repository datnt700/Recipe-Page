import { css } from '@emotion/react';

export const inputSearchCss = {
  searchContainer: css({
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '300px',
    width: '100%',
    '@media (min-width: 1024px)': {
      maxWidth: '400px',
    },
    '@media (min-width: 1280px)': {
      maxWidth: '500px',
    },
  }),
  search: css({
    width: '100%',
    position: 'relative',
  }),
  textInput: css({
    padding: '1.2rem 0 1.2rem 3.5rem',
    border: '1px solid #394150',
    borderRadius: '1.5rem',
    width: '100%',
    outline: 'none',
    color: '#fff',
    backgroundColor: 'transparent',
    '::placeholder': {
      color: '#394150',
      fontSize: '0.875rem',
    },
  }),
  logo: css({
    width: '1.8rem',
    position: 'absolute',
    top: '13px',
    left: '20px',
  }),
};
