import { render, screen } from '@testing-library/react';
import AppRegister from './AppRegister';

test('renders learn react link', () => {
  render(<AppRegister />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
