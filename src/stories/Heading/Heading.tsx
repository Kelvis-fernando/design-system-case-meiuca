import React from "react";
import { headingStyle } from "./Heading.style";
import { HeadingProps } from "../../types/HeadingProps";

export const Heading: React.FC<HeadingProps> = ({ level, text, ...props }) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <HeadingTag style={headingStyle} {...props}>
      {text}
    </HeadingTag>
  );
};
