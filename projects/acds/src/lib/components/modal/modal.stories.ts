import type { Meta, StoryObj } from "@storybook/angular";
import { AcdsModalComponent } from "./modal.component";

const meta: Meta<AcdsModalComponent> = {
  title: "UI/Modal",
  component: AcdsModalComponent,
  tags: ["autodocs"],
  args: {
    open: true,
    title: "Invite team",
    subtitle: "Add your teammates to collaborate.",
  },
  render: (args) => ({
    props: args,
    template: `
      <acds-modal [open]="open" [title]="title" [subtitle]="subtitle">
        <p class="text-sm text-muted">Team invites will be emailed immediately.</p>
      </acds-modal>
    `,
  }),
};

export default meta;

type Story = StoryObj<AcdsModalComponent>;

export const Default: Story = {};
