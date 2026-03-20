import type { Meta, StoryObj } from "@storybook/angular";
import { AcdsBadgeComponent } from "./badge.component";

const meta: Meta<AcdsBadgeComponent> = {
  title: "UI/Badge",
  component: AcdsBadgeComponent,
  tags: ["autodocs"],
  args: {
    tone: "neutral",
  },
  render: (args) => ({
    props: args,
    template: `<acds-badge [tone]="tone">Status</acds-badge>`,
  }),
};

export default meta;

type Story = StoryObj<AcdsBadgeComponent>;

export const Neutral: Story = {};
export const Accent: Story = { args: { tone: "accent" } };
