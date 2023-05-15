import React from "react";
import { subtitleStyle } from "./Subtitle.style";
import { SubtitleProps } from "../../types/SubtitleProps";

export const Subtitle: React.FC<SubtitleProps> = ({ text, size, ...props }) => {
  return (
    <p style={subtitleStyle(size!)} {...props}>
      {text}
    </p>
  );
};
