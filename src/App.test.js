import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: 'Change to blue' });
  expect(button).toHaveStyle({ backgroundColor: 'red' });

  fireEvent.click(button);
  expect(button).toHaveStyle({ backgroundColor: 'blue'});
  
  expect(button.textContent).toBe('Change to red');
});

test('initial conditions', () => {
  render(<App />);

  const button = screen.getByRole('button', { name: 'Change to blue'});
  expect(button).toBeEnabled();

  const checkBox = screen.getByRole('checkbox');
  expect(checkBox).not.toBeChecked();
});