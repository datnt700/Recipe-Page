import { it, describe, expect, vi } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import React from 'react';

import { Introduction } from '../../src/app/_components/layout/Introduction';

vi.mock('next/image', () => ({
  __esModule: true,
  default: ({
    src,
    alt,
    width,
    height,
  }: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }) => <img src={src} alt={alt} width={width} height={height} />,
}));

describe('Introduction Component', () => {
  it('should render background image', async () => {
    const { getByAltText } = await render(<Introduction />);

    const textImage = getByAltText('text-background');
    expect(textImage).toHaveAttribute('src', '/public/images/hero-text.svg');
  });

  it('should change image size when window is resized', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1600,
    });
    act(() => {
      render(<Introduction />);
      window.dispatchEvent(new Event('resize'));
    });

    const image = screen.getByAltText('text-background');
    expect(image).toHaveAttribute('width', '500');
    expect(image).toHaveAttribute('height', '300');
  });
});
