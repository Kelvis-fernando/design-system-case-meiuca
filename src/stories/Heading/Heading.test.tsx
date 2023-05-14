import React from "react";
import { render, screen } from "@testing-library/react";
import { Heading } from "./Heading";
import tokens from "../../../tokens/global.json";

describe("Heading", () => {
  test("renders with the correct level and text", () => {
    const level = 1;
    const text = "Example Heading";
    const { container } = render(<Heading level={level} text={text} />);

    const headingElement = screen.getByRole("heading", { level });

    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveTextContent(text);
    expect(container).toMatchSnapshot();
  });

  test("applies the correct style", () => {
    const level = 2;
    const text = "Example Heading";
    render(<Heading level={level} text={text} />);

    const headingElement = screen.getByRole("heading", { level });

    expect(headingElement).toHaveStyle(`
    color: ${tokens.neutral.color[5].value};
    font-family: ${tokens.font.family.highlight.value};
    margin: ${tokens.spacing.size.quarck.value};
  `);
  });
});
