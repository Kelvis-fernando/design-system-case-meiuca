import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

test("renders learn react link", () => {
  const { container } = render(<Button label={"Button"} />);
  const linkElement = screen.getByText(/button/i);

  expect(container).toMatchSnapshot();
  expect(linkElement).toBeInTheDocument();
});
