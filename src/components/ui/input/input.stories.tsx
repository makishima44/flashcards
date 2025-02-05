import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";

const meta = {
  component: Input,
  tags: ["autodocs"],
  title: "Components/UI/Input",
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultInput: Story = {
  args: { label: "input", placeholder: "input" },
};

export const DisabledInput: Story = {
  args: { label: "input", placeholder: "input", disabled: true },
};
