import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./";

const meta = {
  component: Button,
  tags: ["autodocs"],
  title: "Components/UI/Button",
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: "Primary Button", disabled: false, variant: "primary" },
};

export const PrimaryDisabled: Story = {
  args: { children: "Primary Button Disabled", disabled: true, variant: "primary" },
};

export const Secondary: Story = {
  args: { children: "Secondary Button", disabled: false, variant: "secondary" },
};

export const FullWidth: Story = {
  args: {
    children: "FullWidth Primary Button",
    disabled: false,
    fullWidth: true,
    variant: "primary",
  },
};
export const AsLink: Story = {
  args: { as: "a", children: "Link that looks like a button", variant: "primary" },
};
