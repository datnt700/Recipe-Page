/** @jsxImportSource @emotion/react */
import React from 'react';
import { useDebouncedCallback } from 'use-debounce';

import { inputSearchCss } from './InputSearch.style';
interface inputSearchProps {
  setNameFood: (e: string) => void;
}

export const InputSearch = ({ setNameFood }: inputSearchProps) => {
  const debounced = useDebouncedCallback((value) => {
    setNameFood(value);
  }, 1000);
  return (
    <div css={inputSearchCss.searchContainer}>
      <div css={inputSearchCss.search}>
        <input
          css={inputSearchCss.textInput}
          type="text"
          placeholder="Search recipes and more..."
          onChange={(e) => debounced(e.target.value)}
        />
        <img css={inputSearchCss.logo} src={'/images/Search.svg'} alt="logo" />
      </div>
    </div>
  );
};
