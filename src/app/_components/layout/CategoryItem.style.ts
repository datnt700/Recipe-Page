import { css } from '@emotion/react';

export const cateItemStyle = {
  container: css({
    border: '1px solid #394150',
    height: '3rem',
    overflow: 'hidden',
    borderRadius: '0.5rem',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#FEBD2E',
    },
  }),
  image: css({
    position: 'relative',
    left: '-20px',
    top: '-5px',
  }),
  name: css({
    color: '#E5E7EB',
    fontSize: '0.75rem',
    textAlign: 'center',
  }),
};
