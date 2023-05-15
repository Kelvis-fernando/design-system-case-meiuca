import { tokens } from "../../../tokens/index";

export const buttonStyle = (
  primary: boolean,
  size: string
): React.CSSProperties => {
  const setSize = () => {
    switch (size) {
      case "small":
        return tokens.spacings.spacing.size.quarck.value;
      case "medium":
        return tokens.spacings.spacing.size.nano.value;
      case "large":
        return tokens.spacings.spacing.size.xxxs.value;
    }
  };
  return {
    color: primary
      ? tokens.colors.neutral.color[1].value
      : tokens.colors.neutral.color[5].value,
    backgroundColor: primary
      ? tokens.colors.brand.color.primary[3].value
      : tokens.colors.neutral.color[1].value,
    borderRadius: tokens.borders.radius.size.sm.value,
    padding: setSize(),
    fontWeight: tokens.fonts.font.weight.bold.value,
    border: primary
      ? tokens.borders.border.size.hairline.value
      : `solid ${tokens.borders.border.size.hairline.value} ${tokens.colors.neutral.color[5].value}`,
    cursor: "pointer",
    fontFamily: tokens.fonts.font.family.highlight.value,
  };
};
