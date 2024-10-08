import { css } from '@emotion/react';

export const dropListStyle = {
  container: css({
    border: 'none',
    backgroundColor: '#E5E7EB',
    fontSize: '0.875rem',
    color: '#4D5562',
    fontWeight: 800,
    position: 'relative',
    borderRadius: '1.5rem',
    width: '160px',
  }),
  selected: css({
    display: 'flex',
    alignItems: 'center',
    gap: '0.3rem',
    border: 'none',
    backgroundColor: 'transparent',
  }),
  btn: css({
    fontSize: '0.875rem',
    color: '#4D5562',
    padding: '0.7rem 0',
    display: 'flex',
    alignItems: 'center',
    gap: '0.2rem',
    '@media (min-width: 640px)': {
      padding: '1.2rem 0 1.2rem 0.7rem',
    },
    '@media (min-width: 1280px)': {
      padding: '1.2rem 0 1.2rem 1.6rem',
    },
    '&.activeList': {
      backgroundColor: '#4D5562',
      color: '#F9FAFB',
    },
    span: {
      fontWeight: 'bold',
    },
  }),
  menu: css({
    marginTop: '0.5rem',
    border: '1px solid #4D5562',
    borderRadius: '0.5rem',
    position: 'absolute',
    backgroundColor: '#394150',
    display: 'none',
    top: '90px',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    ul: {
      listStyle: 'none',

      li: {
        padding: '0.5rem',
        cursor: 'pointer',

        button: {
          border: 'none',
          backgroundColor: 'transparent',
          color: '#F9FAFB',
          cursor: 'pointer',
          width: '100%',
          padding: '0 2rem',
        },

        '&:hover': {
          backgroundColor: '#7CA9F3',
          borderTopLeftRadius: '0.5rem',
          borderTopRightRadius: '0.5rem',
        },
      },
    },
  }),
  activeList: css({
    display: 'block',
  }),
};
