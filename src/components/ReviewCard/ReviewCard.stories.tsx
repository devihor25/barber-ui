import type { Meta, StoryObj } from "@storybook/react";
import { ReviewCard } from "./ReviewCard";
import { mockReviews } from "../../mock";

const meta: Meta<typeof ReviewCard> = {
  title: "Features/ReviewCard",
  component: ReviewCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Displays a list of customer reviews including avatar, name, comment, and date.",
      },
    },
  },
  argTypes: {
    reviews: {
      description: "Array of review objects to display",
      control: { type: "object" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ReviewCard>;

export const Default: Story = {
  args: {
    reviews: mockReviews,
  },
};

export const Empty: Story = {
  args: {
    reviews: [],
  },
  parameters: {
    docs: {
      description: {
        story:
          "Displays an empty state when there are no reviews. Useful for testing fallback UI.",
      },
    },
  },
};
