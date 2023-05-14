import { render, screen } from "@testing-library/react";
import { Heading } from "./Heading";

test("should render heading", () => {
  render(<Heading level={2} text={"Heading"} />);
  const linkElement = screen.getByText(/heading/i);

  expect(linkElement).toBeInTheDocument();
});
