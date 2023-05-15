import React from "react";
import { render, screen } from "@testing-library/react";
import { Subtitle } from "./Subtitle";
import { tokens } from "../../../tokens";

describe("Subtitle", () => {
  test("renders subtitle text", () => {
    const text = "Example Subtitle";
    const { container } = render(<Subtitle text={text} />);

    const subtitleElement = screen.getByText(text);

    expect(subtitleElement).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test("applies the correct style to the subtitle", () => {
    const text = "Example Subtitle";
    const size = "sm";
    render(<Subtitle text={text} size={size} />);

    const subtitleElement = screen.getByText(text);

    expect(subtitleElement).toHaveStyle(`
    color: ${tokens.colors.neutral.color[3].value};
    fontSize: ${tokens.fonts.font.size.xxs.value},
    fontFamily: ${tokens.fonts.font.family.highlight.value};
    `);
  });
});
