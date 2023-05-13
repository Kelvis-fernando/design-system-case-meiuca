import tokens from "../../../tokens/global.json";

export const getButtonStyle = (
  primary: boolean,
  size: string
): React.CSSProperties => {
  const setSize = () => {
    switch (size) {
      case "small":
        return tokens.spacing.size.quarck.value;
      case "medium":
        return tokens.spacing.size.nano.value;
      case "large":
        return tokens.spacing.size.xxxs.value;
    }
  };
  return {
    color: primary
      ? tokens.neutral.color[1].value
      : tokens.neutral.color[5].value,
    backgroundColor: primary
      ? tokens.brand.color.primary[3].value
      : tokens.neutral.color[1].value,
    borderRadius: tokens.radius.size.sm.value,
    padding: setSize(),
    fontWeight: tokens.font.weight.bold.value,
    border: primary
      ? tokens.border.size.hairline.value
      : `solid ${tokens.border.size.hairline.value} ${tokens.neutral.color[5].value}`,
    cursor: "pointer",
    fontFamily: tokens.font.family.highlight.value,
  };
};
