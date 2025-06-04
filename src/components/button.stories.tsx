import type { Meta, StoryObj } from "@storybook/react";
import CustomButton from "./button";

const meta = {
  title: "COMPONENTS/Button",
  component: CustomButton,
  parameters: {
    layout: "centered",
  },
  args: { variant: "primary" },
} satisfies Meta<typeof CustomButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};
