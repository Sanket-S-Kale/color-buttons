import { render, screen, fireEvent } from "@testing-library/react";
import App, { replaceCamelWithSpaces } from "./App";

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

test("disable the button, button turns gray, enable the button, button turns red", () => {
  render(<App />);

  const button = screen.getByRole("button", { name: "Change to blue" });
  const checkBox = screen.getByRole("checkbox", { name: "Disable button" });

  fireEvent.click(checkBox);
  expect(button).toBeDisabled();
  expect(button).toHaveStyle({ backgroundColor: "gray" });

  fireEvent.click(checkBox);
  expect(button).toBeEnabled();
  expect(button).toHaveStyle({ backgroundColor: "red" });
});

test("click the button, button turns blue, disable the button, button turns gray, enable the button, button turns blue", () => {
  render(<App />);

  const button = screen.getByRole("button", { name: "Change to blue" });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

  fireEvent.click(button);
  expect(button.textContent).toBe("Change to red");
  expect(button).toHaveStyle({ backgroundColor: "blue" });

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
  expect(button).toHaveStyle({ backgroundColor: "gray" });

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
  expect(button).toHaveStyle({ backgroundColor: "blue" });
});

describe("space before camel-case capital letters", () => {
  test("works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });

  test("works with one inner capital letter", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });

  test("works with multiple inner capital letters", () => {
    expect(replaceCamelWithSpaces("MidnightVioletRed")).toBe("Midnight Violet Red");
  });
});
