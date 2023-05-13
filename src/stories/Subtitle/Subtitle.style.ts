import tokens from "../../../tokens/global.json";

export const getSubtitleStyle = (size: string) => {
  const subtitleSize = () => {
    switch (size) {
      case "sm":
        return tokens.font.size.xxxs.value;
      case "md":
        return tokens.font.size.xxs.value;
      case "lg":
        return tokens.font.size.xs.value;
    }
  };
  return {
    color: tokens.neutral.color[3].value,
    fontSize: subtitleSize(),
    fontFamily: tokens.font.family.highlight.value,
  };
};
