import React from 'react';
import { render } from '@testing-library/react';
import Header from '../components/header'; // Import your header component

describe('Header', () => {
  test('renders header with SVG elements', () => {
    // Render the header component
    const { getByTestId } = render(<Header />);

    // Check if each SVG element is present
    const menubarIcon = getByTestId('menubar-icon');
    const searchIcon = getByTestId('search-icon');
    const logoIcon = getByTestId('logo-icon');
    const loginIcon = getByTestId('login-icon');
    const cartIcon = getByTestId('cart-icon');

    expect(menubarIcon).toBeInTheDocument();
    expect(searchIcon).toBeInTheDocument();
    expect(logoIcon).toBeInTheDocument();
    expect(loginIcon).toBeInTheDocument();
    expect(cartIcon).toBeInTheDocument();
  });
});