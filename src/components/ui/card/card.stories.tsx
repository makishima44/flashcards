import { Meta, StoryObj } from "@storybook/react";
import { Card } from "./card";

const meta = {
  component: Card,
  tags: ["autodocs"],
  title: "Components/UI/Card",
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultCard: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil illo, deleniti laborum modi, reiciendis explicabo magni, repellat perspiciatis pariatur excepturi qui dolore quod eveniet accusantium asperiores tempore? Vel, voluptas eveniet accusantium asperiores tempore? Vel, voluptaseveniet accusantium asperiores tempore? Vel, voluptaseveniet accusantium asperiores tempore? Vel, voluptaseveniet accusantium asperiores tempore? Vel, voluptaseveniet accusantium asperiores tempore? Vel, voluptaseveniet accusantium asperiores tempore? Vel, voluptaseveniet accusantium asperiores tempore? Vel, voluptaseveniet accusantium asperiores tempore? Vel, voluptaseveniet accusantium asperiores tempore? Vel, voluptaseveniet accusantium asperiores tempore? Vel, voluptaseveniet accusantium asperiores tempore? Vel, voluptaseveniet accusantium asperiores tempore? Vel, voluptaseveniet accusantium asperiores tempore? Vel, voluptaseveniet accusantium asperiores tempore? Vel, voluptaseveniet accusantium asperiores tempore? Vel, voluptaseveniet accusantium asperiores tempore? Vel, voluptaseveniet accusantium asperiores tempore? Vel, voluptaseveniet accusantium asperiores tempore? Vel, voluptaseveniet accusantium asperiores tempore? Vel, voluptaseveniet accusantium asperiores tempore? Vel, voluptaseveniet accusantium asperiores tempore? Vel, voluptas",
  },
};
