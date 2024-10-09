/** @jsxImportSource @emotion/react */
import { Icon } from '@iconify/react';
import React from 'react';

import { dropListStyle } from './DropList.style';

interface OptionList {
  id: string;
  option: string;
}

interface DropListProps {
  handleOpenList: () => void;
  handleClicked: (e: string) => void;
  activeList: boolean;
  listOption: OptionList[];
  option: string;
}

export const DropList = ({
  handleOpenList,
  handleClicked,
  activeList,
  listOption,
  option,
}: DropListProps) => {
  return (
    <div css={dropListStyle.container}>
      <button css={dropListStyle.selected} onClick={handleOpenList}>
        <span css={dropListStyle.btn}>
          Sort By: <span>{option}</span>
          {activeList ? (
            <Icon icon="ri:arrow-down-s-line" />
          ) : (
            <Icon icon="solar:alt-arrow-up-linear" />
          )}
        </span>
      </button>
      {activeList && (
        <div css={[dropListStyle.menu, activeList && dropListStyle.activeList]}>
          <ul>
            {listOption.map((option) => (
              <li key={option.id}>
                <button
                  onClick={() => handleClicked(option.option)}
                  data-testid="item-list"
                >
                  {option.option}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
