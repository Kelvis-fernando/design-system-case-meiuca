import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  test("renders with the correct label", () => {
    const label = "Click me";
    const { container } = render(<Button label={label} />);
    const button = screen.getByRole("button", { name: label });
    expect(button).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test("calls onClick function when clicked", () => {
    const onClick = jest.fn();
    render(<Button label="Click me" onClick={onClick} />);
    const button = screen.getByRole("button");
    button.click();
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
