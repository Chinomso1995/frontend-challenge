import React from 'react';
import TestRenderer from 'react-test-renderer';
import FormModal from '../components/modal';

// Mock the useToast hook
jest.mock('@chakra-ui/react', () => ({
  ...jest.requireActual('@chakra-ui/react'),
  useToast: jest.fn(() => ({ // Mock the useToast function
    toast: jest.fn(),
  })),
}));

test('renders the form modal correctly', () => {
  // Render the modal component
  const component = TestRenderer.create(<FormModal />);

  // Capture the snapshot of the rendered output
  const tree = component.toJSON();

  // Assert the snapshot
  expect(tree).toMatchSnapshot();
});
