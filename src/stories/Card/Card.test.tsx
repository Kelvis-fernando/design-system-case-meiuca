import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

test("should render card", () => {
  render(<Card children="Card" />);
  const linkElement = screen.getByText(/Card/i);

  expect(linkElement).toBeInTheDocument();
});
