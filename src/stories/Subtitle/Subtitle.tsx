import React from "react";
import { getSubtitleStyle } from "./Subtitle.style";
import { SubtitleProps } from "../../types/SubtitleProps";

export const Subtitle: React.FC<SubtitleProps> = ({ text, size }) => {
  return (
    <p style={getSubtitleStyle(size !== undefined ? size : "md")}>{text}</p>
  );
};
