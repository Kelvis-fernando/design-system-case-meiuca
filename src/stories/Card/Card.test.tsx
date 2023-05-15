import React from "react";
import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

describe("Card", () => {
  test("renders with correct width and height", () => {
    const width = 200;
    const height = 300;

    const { container } = render(
      <Card
        width={width}
        height={height}
        data-testid="card"
        children={undefined}
      />
    );

    const cardElement = screen.getByTestId("card");

    expect(cardElement).toHaveStyle(`width: ${width}px`);
    expect(cardElement).toHaveStyle(`height: ${height}px`);
    expect(container).toMatchSnapshot();
  });

  test("renders children content", () => {
    const children = "Card content";

    render(<Card>{children}</Card>);

    const contentElement = screen.getByText(children);

    expect(contentElement).toBeInTheDocument();
  });
});
