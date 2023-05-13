import { render, screen } from "@testing-library/react";
import { Shape } from "./Shape";

test("should render Shape", () => {
  render(
    <Shape
      width="100vw"
      height="100vh"
      children={"Children inside of shape component"}
    />
  );
  const linkElement = screen.getByText(/children inside of shape component/i);

  expect(linkElement).toBeInTheDocument();
});
