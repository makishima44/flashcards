import { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./typography";

const meta = {
  component: Typography,
  tags: ["autodocs"],
  title: "Components/UI/Typography",
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TypographyH1: Story = {
  args: {
    children: "Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH",
    variant: "h1",
    as: "h1",
  },
};

export const TypographyH2: Story = {
  args: {
    children: "Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH",
    variant: "h2",
    as: "h2",
  },
};

export const TypographyH3: Story = {
  args: {
    children: "Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH",
    variant: "h3",
    as: "h3",
  },
};

export const TypographyH4: Story = {
  args: {
    children: "Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH",
    variant: "h4",
    as: "h4",
  },
};

export const TypographyBody1: Story = {
  args: {
    children: "Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH",
    variant: "body1",
    as: "p",
  },
};

export const TypographyBody2: Story = {
  args: {
    children: "Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH",
    variant: "body2",
    as: "p",
  },
};

export const TypographySubtitle1: Story = {
  args: {
    children: "Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH",
    variant: "subtitle1",
    as: "span",
  },
};

export const TypographySubtitle2: Story = {
  args: {
    children: "Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH",
    variant: "subtitle2",
    as: "span",
  },
};

export const TypographyCaption: Story = {
  args: {
    children: "Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH",
    variant: "caption",
    as: "span",
  },
};

export const TypographyOverline: Story = {
  args: {
    children: "Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH",
    variant: "overline",
    as: "span",
  },
};

export const TypographyLink1: Story = {
  args: {
    children: "Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH",
    variant: "link1",
    as: "a",
    href: "#",
  },
};

export const TypographyLink2: Story = {
  args: {
    children: "Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH",
    variant: "link2",
    as: "a",
    href: "#",
  },
};
