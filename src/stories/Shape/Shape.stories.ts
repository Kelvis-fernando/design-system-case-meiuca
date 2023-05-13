import type { Meta, StoryObj } from "@storybook/react";

import { Shape } from "./Shape";

const meta = {
  title: "Components/Shape",
  component: Shape,
  tags: ["autodocs"],
} satisfies Meta<typeof Shape>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: `Ola`,
    width: "100px",
    height: "100px",
  },
};
