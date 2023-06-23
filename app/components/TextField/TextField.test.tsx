import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { expect } from 'vitest';
import TextField from './TextField';

describe('TextField', () => {
  it('should redner input', () => {
    render(<TextField name="email" type="email"/>);
    const input: HTMLDivElement  = screen.getByTestId('TextField');
    expect(input).toBeInTheDocument();
  });
});