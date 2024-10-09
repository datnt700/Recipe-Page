'use client';

/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';
export const GlobalStyles = () => (
  <Global
    styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      html,
      body {
        font-family: 'Playfair Display', serif;
        font-style: normal;
        background-color: #0e1325;
        padding: 0.5rem;
      }
    `}
  />
);
