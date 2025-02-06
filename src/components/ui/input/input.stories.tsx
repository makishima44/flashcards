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
  args: { label: "input disabled", placeholder: "input", disabled: true },
};

export const ErrorInput: Story = {
  args: { label: "input error", placeholder: "input", error: true },
};

export const DefaultPasswordInput: Story = {
  args: { label: "input password", variant: "password", placeholder: "input" },
};

export const DisabledPasswordInput: Story = {
  args: {
    label: "input password disabled",
    variant: "password",
    placeholder: "input",
    disabled: true,
  },
};

export const ErrorPasswordInput: Story = {
  args: {
    value: "sdas",
    label: "input password error",
    variant: "password",
    placeholder: "input",
    error: true,
  },
};
