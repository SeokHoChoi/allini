import type { Meta, StoryObj } from "@storybook/react";

import Button from "../components/button/button";
import styles from "./button.module.scss";

const meta: Meta = {
  title: "Button",
  component: Button,
  argTypes: {
    clickHandler: { actions: "clicked" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Button",
  },
};

export const Warning: Story = {
  args: {
    label: "Delete now",
    className: styles.storybook_test_class,
  },
};
