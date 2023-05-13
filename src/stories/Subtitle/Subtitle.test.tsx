import { render, screen } from "@testing-library/react";
import { Subtitle } from "./Subtitle";

test("should render Subtitle", () => {
  const { container } = render(<Subtitle size="md" text={"Subtitle"} />);
  const linkElement = screen.getByText(/Subtitle/i);

  expect(linkElement).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
