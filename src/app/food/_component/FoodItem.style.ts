import { css } from '@emotion/react';

export const FoodItemStyle = {
  container: css({
    padding: '2rem 0',
    width: '100%',
  }),
  introduction: css({
    display: 'flex',
    justifyContent: 'space-between',
    gap: '0.5rem',
  }),
  link: {
    backgroundColor: '#E5E7EB',
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '1.5rem',
    padding: '0 1.5rem ',
    textDecoration: 'none',
    color: '#0E1325',
  },
  content: css({
    color: '#E5E7EB',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: '600px',
    margin: '3.5rem auto 0',
  }),
  photo: css({
    width: '100%',
    borderRadius: '0.75rem',
  }),
  title: css({
    marginTop: '2rem',
    fontSize: '1.5rem',
  }),
  tag: css({
    display: 'flex',
    gap: '1rem',
    marginTop: '1.2rem',
    p: {
      padding: '0.3rem 1rem',
      backgroundColor: '#394150',
      borderRadius: '1.5rem',
      fontSize: '0.875rem',

      span: {
        fontWeight: 'bold',
      },
    },
  }),
  detail: css({
    marginTop: '2.6rem',
  }),
  underTitle: css({
    fontSize: '1rem',
    display: 'flex',
    gap: '0.5rem',
    marginBottom: '1rem',
    span: {
      borderLeft: '10px solid #FEBD2E',
      borderRadius: '1.5rem',
    },
  }),
  list: css({
    paddingLeft: '1rem',
  }),
  text: css({
    textAlign: 'justify',
    lineHeight: '1.6',
    fontSize: '0.875rem',
  }),
};
