import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./checkbox";

const meta = {
  component: Checkbox,
  tags: ["autodocs"],
  title: "Components/UI/Checkbox",
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CheckboxDefault: Story = {
  args: {},
};

export const CheckboxDisabled: Story = {
  args: { disabled: true },
};
export const CheckboxWithLabel: Story = {
  args: { label: "checkbox" },
};

export const CheckboxWithLabelDisabled: Story = {
  args: { label: "checkbox", disabled: true },
};
