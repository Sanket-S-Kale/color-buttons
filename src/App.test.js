import { render, screen, fireEvent } from "@testing-library/react";
import App, { replaceCamelWithSpaces } from "./App";

test("button has correct initial color", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: "Change to Midnight Blue" });
  expect(button).toHaveStyle({ backgroundColor: "MediumVioletRed" });

  fireEvent.click(button);
  expect(button).toHaveStyle({ backgroundColor: "MidnightBlue" });

  expect(button.textContent).toBe("Change to Medium Violet Red");
});

test("initial conditions", () => {
  render(<App />);

  const button = screen.getByRole("button", { name: "Change to Midnight Blue" });
  expect(button).toBeEnabled();

  const checkBox = screen.getByRole("checkbox", { name: "Disable button" });
  expect(checkBox).not.toBeChecked();
});

test("checkbox disables button on first click, enables the button on second click", () => {
  render(<App />);

  const button = screen.getByRole("button", { name: "Change to Midnight Blue" });
  const checkBox = screen.getByRole("checkbox", { name: "Disable button" });

  fireEvent.click(checkBox);
  expect(button).toBeDisabled();

  fireEvent.click(checkBox);
  expect(button).toBeEnabled();
});

test("disable the button, button turns gray, enable the button, button turns Medium Violet Red", () => {
  render(<App />);

  const button = screen.getByRole("button", { name: "Change to Midnight Blue" });
  const checkBox = screen.getByRole("checkbox", { name: "Disable button" });

  fireEvent.click(checkBox);
  expect(button).toBeDisabled();
  expect(button).toHaveStyle({ backgroundColor: "gray" });

  fireEvent.click(checkBox);
  expect(button).toBeEnabled();
  expect(button).toHaveStyle({ backgroundColor: "MediumVioletRed" });
});

test("click the button, button turns Midnight Blue, disable the button, button turns gray, enable the button, button turns Midnight Blue", () => {
  render(<App />);

  const button = screen.getByRole("button", { name: "Change to Midnight Blue" });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

  fireEvent.click(button);
  expect(button.textContent).toBe("Change to Medium Violet Red");
  expect(button).toHaveStyle({ backgroundColor: "MidnightBlue" });

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
  expect(button).toHaveStyle({ backgroundColor: "gray" });

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
  expect(button).toHaveStyle({ backgroundColor: "MidnightBlue" });
});

describe("space before camel-case capital letters", () => {
  test("works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });

  test("works with one inner capital letter", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });

  test("works with multiple inner capital letters", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
