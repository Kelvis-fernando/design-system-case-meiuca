import React from "react";
import { getSubtitleStyle } from "./Subtitle.style";

export interface HeadingProps {
  text: string;
  size?: "sm" | "md" | "lg";
}

export const Subtitle: React.FC<HeadingProps> = ({ text, size }) => {
  return (
    <p style={getSubtitleStyle(size !== undefined ? size : "md")}>{text}</p>
  );
};
