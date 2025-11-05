import type { Meta, StoryObj } from "@storybook/react";
import { WorksGallery } from "./WorksGallery"; // cleaner alias import
import { mockWorks } from "../../mock";

const meta: Meta<typeof WorksGallery> = {
  title: "Features/WorksGallery",
  component: WorksGallery,
  tags: ["autodocs"], // enables automatic docs page in Storybook
  parameters: {
    layout: "fullscreen", // better for wide galleries
    docs: {
      description: {
        component:
          "A horizontally scrollable gallery component used to showcase barber portfolio work. Supports dynamic data via the `works` prop.",
      },
    },
  },
  argTypes: {
    works: {
      description: "Array of work items to display in the gallery",
      control: { type: "object" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof WorksGallery>;

export const Default: Story = {
  args: {
    works: mockWorks,
  },
};

export const EmptyState: Story = {
  args: {
    works: [],
  },
  parameters: {
    docs: {
      description: {
        story:
          "Displays an empty gallery when no works are provided. Useful for testing fallback states.",
      },
    },
  },
};
