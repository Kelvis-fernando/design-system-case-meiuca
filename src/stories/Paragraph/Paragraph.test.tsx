import React from "react";
import { render, screen } from "@testing-library/react";
import { Paragraph } from "./Paragraph";
import { tokens } from "../../../tokens";

describe("Paragraph", () => {
  test("renders paragraph with correct text and style", () => {
    const text = "Example paragraph text";
    const { container } = render(<Paragraph text={text} />);

    const paragraphElement = screen.getByText(text);

    expect(paragraphElement).toBeInTheDocument();
    expect(container).toMatchSnapshot();
    expect(paragraphElement).toHaveStyle(`
      color: ${tokens.colors.neutral.color[5].value};
      fontFamily: ${tokens.fonts.font.family.highlight.value};
      fontSize: ${tokens.fonts.font.size.xs.value};
  `);
  });
});
