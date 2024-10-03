import { it, describe, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';

import { Introduction } from '../../src/app/components/Introduction';

describe('Introduction Component', () => {
  it('should render background image', async () => {
    const { getByAltText } = await render(<Introduction />);

    const textImage = getByAltText('text-background');
    expect(textImage).toHaveAttribute('src', '/public/images/hero-text.svg');
  });
});
