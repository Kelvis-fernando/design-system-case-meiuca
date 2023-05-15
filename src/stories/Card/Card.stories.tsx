import type { Meta, StoryObj } from "@storybook/react";
import { tokens } from "../../../tokens/index";
import { Card } from "./Card";
import { Heading } from "../Heading/Heading";
import { Subtitle } from "../Subtitle/Subtitle";
import { Button } from "../Button/Button";
import { Paragraph } from "../Paragraph/Paragraph";
import { CardContent } from "./Card.style";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <img
          src="https://secure-static.vans.com.br/medias/sys_master/vans/vans/h66/h49/h00/h00/11319247536158/1002001070011U-01-BASEIMAGE-Hires.jpg"
          alt="tenis"
          style={{ width: "100%" }}
        />
        <div style={CardContent}>
          <Heading level={1} text={"Tenis"} />
          <Subtitle text={"Vans Old skool"} />
          <Paragraph text="Feito e entregue no Brasil" />
          <Button label={"Comprar"} />
        </div>
      </>
    ),
    width: 150,
  },
};
