import { render, screen } from "@testing-library/react";
import { Shape } from "./Shape";

test("should render Shape", () => {
  const { container } = render(
    <Shape width="100vw" height="100vh" children={"Shape"} />
  );
  const linkElement = screen.getByText(/shape/i);

  expect(linkElement).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
