import type { Meta, StoryObj } from "@storybook/react";
import { ServiceCard } from "./ServiceCard";
import { mockServices } from "../../mock";

const meta: Meta<typeof ServiceCard> = {
  title: "Features/ServiceCard",
  component: ServiceCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Displays an individual barber service with title, duration, price, and optional description or add-ons.",
      },
    },
  },
  argTypes: {
    service: {
      description: "A single service object containing title, duration, and price info",
      control: { type: "object" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ServiceCard>;

export const SkinFade: Story = {
  args: {
    service: mockServices[0],
  },
  parameters: {
    docs: {
      description: {
        story: "Smooth, seamless fade with a sharp transition from skin to hair.",
      },
    },
  },
};

export const BuzzCut: Story = {
  args: {
    service: mockServices[1],
  },
  parameters: {
    docs: {
      description: {
        story: "Low-maintenance buzz cut for a clean, modern look.",
      },
    },
  },
};

export const DeluxeHaircut: Story = {
  args: {
    service: mockServices[2],
  },
  parameters: {
    docs: {
      description: {
        story:
          "Deluxe haircut includes beard trim and hot towel service for a full grooming experience.",
      },
    },
  },
};
