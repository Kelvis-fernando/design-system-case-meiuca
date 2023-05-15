import React from "react";
import { getSubtitleStyle } from "./Subtitle.style";
import { SubtitleProps } from "../../types/SubtitleProps";

export const Subtitle: React.FC<SubtitleProps> = ({ text, size, ...props }) => {
  return (
    <p style={getSubtitleStyle(size !== undefined ? size : "")} {...props}>
      {text}
    </p>
  );
};
