import tokens from "../../../tokens/global.json";

export const getShapeStyle = (
  width: string,
  height: string
): React.CSSProperties => {
  return {
    backgroundColor: tokens.neutral.color[1].value,
    boxShadow: `${tokens.shadow.level[1].stack.value} ${tokens.neutral.color[3].value}`,
    height: height,
    width: width,
    borderRadius: tokens.radius.size.sm.value,
  };
};
