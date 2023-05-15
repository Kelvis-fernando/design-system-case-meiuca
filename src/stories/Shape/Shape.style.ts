import { tokens } from "../../../tokens/index";

export const getShapeStyle = (
  width: string,
  height: string
): React.CSSProperties => {
  return {
    backgroundColor: tokens.colors.neutral.color[1].value,
    boxShadow: `${tokens.shadows.shadow.level[1].stack.value} ${tokens.colors.neutral.color[3].value}`,
    height: height,
    width: width,
    borderRadius: tokens.borders.radius.size.sm.value,
  };
};
