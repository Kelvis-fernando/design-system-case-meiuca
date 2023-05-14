import { ParagraphProps } from "../../types/Paragraph";
import { paragraphStyle } from "./Paragraph.style";

export const Paragraph: React.FC<ParagraphProps> = ({ text, ...props }) => {
  return (
    <p style={paragraphStyle} {...props}>
      {text}
    </p>
  );
};
