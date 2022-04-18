import React from 'react';
import { render, screen } from '@testing-library/react';
import RooxTest from './RooxTest';

test('renders learn react link', () => {
  render(<RooxTest />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
