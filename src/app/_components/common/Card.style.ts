import { css } from '@emotion/react';

export const cardStyle = {
  card: css({
    padding: '0.8rem',
    backgroundColor: '#394150',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '0.75rem',
  }),
  photo: css({
    width: '100%',
    height: '15rem',
    borderRadius: '0.75rem',
  }),
  name: css({
    color: '#E5E7EB',
    fontSize: ' 1rem',
    margin: '0.8rem 0 0',
  }),
};
