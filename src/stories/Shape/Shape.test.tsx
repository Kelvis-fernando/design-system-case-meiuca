import React from "react";
import { render, screen } from "@testing-library/react";
import { Shape } from "./Shape";
import { tokens } from "../../../tokens";

describe("Shape", () => {
  test("applies the correct style to the shape", () => {
    const width = 200;
    const height = 200;
    const { container } = render(
      <Shape width={width} height={height} data-testid="shape">
        Content
      </Shape>
    );
    const shapeElement = screen.getByTestId("shape");

    expect(container).toMatchSnapshot();
    expect(shapeElement).toHaveStyle(`
    background-color: ${tokens.colors.neutral.color[1].value};
    border-radius: ${tokens.borders.radius.size.sm.value};
    box-shadow: ${tokens.shadows.shadow.level[1].stack.value} ${tokens.colors.neutral.color[3].value};
    height: ${height}px;
    width: ${width}px;
  `);
  });
});
