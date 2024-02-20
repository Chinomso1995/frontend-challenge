import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Form from '../components/form';

// Mock the fetch API
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({}),
  })
);

test('submits form data successfully', async () => {
  const { getByPlaceholderText, getByText } = render(<Form />);

  // Fill in form data
  fireEvent.change(getByPlaceholderText('Nombre'), { target: { value: 'John Doe' } });
  fireEvent.change(getByPlaceholderText('Email'), { target: { value: 'john@example.com' } });
  fireEvent.change(getByPlaceholderText('Telefono'), { target: { value: '1234567890' } });

  // Submit form
  fireEvent.click(getByText('Guardar'));

  // Wait for the API call to complete
  await waitFor(() => {
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nombre: 'John Doe',
        email: 'john@example.com',
        telefono: '1234567890',
      }),
    });
  });
});
