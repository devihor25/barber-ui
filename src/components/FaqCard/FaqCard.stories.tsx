import type { Meta, StoryObj } from "@storybook/react";
import { FaqCard } from "./FaqCard";
import { mockFaq } from "../../mock";

const meta: Meta<typeof FaqCard> = {
  title: "Features/FaqCard",
  component: FaqCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "An accordion-style FAQ section where users can expand and collapse answers. Supports dynamic FAQ items.",
      },
    },
  },
  argTypes: {
    items: {
      description: "List of FAQ items with title and description",
      control: { type: "object" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FaqCard>;

export const Default: Story = {
  args: {
    items: mockFaq,
  },
};

export const Empty: Story = {
  args: {
    items: [],
  },
  parameters: {
    docs: {
      description: {
        story:
          "Displays an empty FAQ container when no items are provided.",
      },
    },
  },
};
