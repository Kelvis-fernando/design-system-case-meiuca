import type { Meta, StoryObj } from "@storybook/react";

import { Subtitle } from "./Subtitle";

const meta = {
  title: "Components/Subtitle",
  component: Subtitle,
  tags: ["autodocs"],
} satisfies Meta<typeof Subtitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "This is the First Subtitle",
    size: "lg",
  },
};
