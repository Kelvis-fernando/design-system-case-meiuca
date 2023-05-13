import tokens from "../../../tokens/global.json";

export const getShapeStyle = (
  height: string,
  width: string
): React.CSSProperties => {
  return {
    backgroundColor: tokens.neutral.color[1].value,
    boxShadow: `${tokens.shadow.level[1].stack.value} ${tokens.neutral.color[3].value}`,
    padding: tokens.spacing.size.xxxs.value,
    height: height,
    width: width,
  };
};
