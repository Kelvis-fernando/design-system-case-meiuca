import React from "react";
import { render, screen } from "@testing-library/react";
import { Paragraph } from "./Paragraph";
import tokens from "../../../tokens/global.json";

describe("Paragraph", () => {
  test("renders paragraph with correct text and style", () => {
    const text = "Example paragraph text";
    const { container } = render(<Paragraph text={text} />);

    const paragraphElement = screen.getByText(text);

    expect(paragraphElement).toBeInTheDocument();
    expect(container).toMatchSnapshot();
    expect(paragraphElement).toHaveStyle(`
      color: ${tokens.neutral.color[5].value};
      fontFamily: ${tokens.font.family.highlight.value};
      fontSize: ${tokens.font.size.xs.value};
  `);
  });
});
