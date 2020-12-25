import { render, screen } from '@testing-library/react';
import Content from '.';

test('renders learn react link', () => {
  render(<Content />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
