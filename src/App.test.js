import { render, screen } from '@testing-library/react';
import App from './App';

test('Different Food', async () => {
  render(<App />);
  const linkElement = await screen.findByText(/Different Food/i);
  expect(linkElement).toBeInTheDocument();
});
