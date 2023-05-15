import { tokens } from "../../../tokens/index";

export const getShapeStyle = (
  width: number,
  height: number
): React.CSSProperties => {
  return {
    backgroundColor: tokens.colors.neutral.color[1].value,
    boxShadow: `${tokens.shadows.shadow.level[1].stack.value} ${tokens.colors.neutral.color[3].value}`,
    width: width,
    height: height,
    borderRadius: tokens.borders.radius.size.sm.value,
  };
};
