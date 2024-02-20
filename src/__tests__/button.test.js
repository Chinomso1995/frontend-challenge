
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import StyledButton from '../components/button';
import '@testing-library/jest-dom';

describe('StyledButton', () => {
    test('renders button with correct styles', () => {
      const { getByText } = render(<StyledButton>Click me</StyledButton>);
      const button = getByText('Click me');

    });
  
    test('fires onClick event when clicked', () => {
      const onClickMock = jest.fn();
      const { getByText } = render(<StyledButton onClick={onClickMock}>Click me</StyledButton>);
      const button = getByText('Click me');
  
      fireEvent.click(button);
  
      expect(onClickMock).toHaveBeenCalledTimes(1);
    });
  });