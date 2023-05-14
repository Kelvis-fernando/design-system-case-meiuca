import React from "react";
import { render, screen } from "@testing-library/react";
import { Shape } from "./Shape";

describe("Shape", () => {
  test("applies the correct style to the shape", () => {
    const width = "200px";
    const height = "200px";
    const { container } = render(
      <Shape width={width} height={height} data-testid="shape">
        Content
      </Shape>
    );
    const shapeElement = screen.getByTestId("shape");

    expect(container).toMatchSnapshot();
    expect(shapeElement).toHaveStyle(`
    background-color: rgb(255, 255, 255);
    border-radius: 8px;
    box-shadow: 0px 2px 4px #A6AAAF;
    height: ${height};
    width: ${width};
  `);
  });
});
