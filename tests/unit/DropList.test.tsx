import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import React from 'react';

import { DropList } from '../../src/app/_components/common/DropList';

describe('DropList Component', () => {
  const mockHandleOpenList = vi.fn();
  const mockHandleClicked = vi.fn();
  const listOption = [
    {
      id: '1',
      option: 'Name',
    },
    {
      id: '2',
      option: 'Id',
    },
  ];
  const mockActiveList = false;
  const mockOption = 'Name';
  it('should render default state', () => {
    render(
      <DropList
        handleOpenList={mockHandleOpenList}
        handleClicked={mockHandleClicked}
        activeList={mockActiveList}
        listOption={listOption}
        option={mockOption}
      />
    );

    const dropdownText = screen.getByText(/Name/i);
    expect(dropdownText).toBeInTheDocument();
  });

  it('should render list after drop list is clicked', () => {
    const { rerender } = render(
      <DropList
        handleOpenList={mockHandleOpenList}
        handleClicked={mockHandleClicked}
        activeList={mockActiveList}
        listOption={listOption}
        option={'Name'}
      />
    );

    const dropListButton = screen.getByRole('button', { name: /Sort by/i });
    fireEvent.click(dropListButton);

    rerender(
      <DropList
        handleOpenList={mockHandleOpenList}
        handleClicked={mockHandleClicked}
        activeList={true}
        listOption={listOption}
        option={'Name'}
      />
    );
    const option1 = screen.getAllByText(/Name/i);
    const option2 = screen.getByText(/Id/i);

    expect(option1[1]).toBeInTheDocument();
    expect(option2).toBeInTheDocument();
  });

  it('should call handle list on click', () => {
    render(
      <DropList
        handleOpenList={mockHandleOpenList}
        handleClicked={mockHandleClicked}
        activeList={true}
        listOption={listOption}
        option={'Name'}
      />
    );

    const dropItem = screen.getAllByTestId('item-list');
    fireEvent.click(dropItem[0]);

    expect(mockHandleClicked).toHaveBeenCalledTimes(1);
  });
});
