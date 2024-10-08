import { css } from '@emotion/react';

export const contentStyle = {
  container: css({
    display: 'flex',
    flexDirection: 'column',
    gap: '2.6rem',
    fontFamily: "'Outfit',sans-serif",
  }),
  features: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '2rem',
    gap: '0.5rem',
  }),
};
