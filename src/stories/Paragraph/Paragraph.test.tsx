import { render, screen } from "@testing-library/react";
import { Paragraph } from "./Paragraph";

test("should render Paragraph", () => {
  render(<Paragraph text={"Paragraph"} />);
  const linkElement = screen.getByText(/Paragraph/i);

  expect(linkElement).toBeInTheDocument();
});
