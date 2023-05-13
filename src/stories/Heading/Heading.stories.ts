import type { Meta, StoryObj } from "@storybook/react";

import { Heading } from "./Heading";

const meta = {
  title: "Components/Heading",
  component: Heading,
  tags: ["autodocs"],
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    text: "First Heading",
    level: 1,
  },
};

export const H2: Story = {
  args: {
    text: "First Heading",
    level: 2,
  },
};

export const H3: Story = {
  args: {
    text: "First Heading",
    level: 3,
  },
};

export const H4: Story = {
  args: {
    text: "First Heading",
    level: 4,
  },
};

export const H5: Story = {
  args: {
    text: "First Heading",
    level: 5,
  },
};
export const H6: Story = {
  args: {
    text: "First Heading",
    level: 5,
  },
};
