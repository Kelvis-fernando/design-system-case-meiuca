import { tokens } from "../../../tokens/index";

export const getSubtitleStyle = (size: string) => {
  const subtitleSize = () => {
    switch (size) {
      case "sm":
        return tokens.fonts.font.size.xxxs.value;
      case "md":
        return tokens.fonts.font.size.xxs.value;
      case "lg":
        return tokens.fonts.font.size.xs.value;
    }
  };
  return {
    color: tokens.colors.neutral.color[3].value,
    fontSize: subtitleSize(),
    fontFamily: tokens.fonts.font.family.highlight.value,
  };
};
