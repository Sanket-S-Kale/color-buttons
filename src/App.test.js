import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: "Change to blue" });
  expect(button).toHaveStyle({ backgroundColor: "red" });

  fireEvent.click(button);
  expect(button).toHaveStyle({ backgroundColor: "blue" });

  expect(button.textContent).toBe("Change to red");
});

test("initial conditions", () => {
  render(<App />);

  const button = screen.getByRole("button", { name: "Change to blue" });
  expect(button).toBeEnabled();

  const checkBox = screen.getByRole("checkbox", { name: "Disable button" });
  expect(checkBox).not.toBeChecked();
});

test("checkbox disables button on first click, enables the button on second click", () => {
  render(<App />);

  const button = screen.getByRole("button", { name: "Change to blue" });
  const checkBox = screen.getByRole("checkbox", { name: "Disable button" });

  fireEvent.click(checkBox);
  expect(button).toBeDisabled();

  fireEvent.click(checkBox);
  expect(button).toBeEnabled();
});
