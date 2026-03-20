import type { Meta, StoryObj } from "@storybook/angular";
import { AcdsButtonComponent } from "./button.component";

const meta: Meta<AcdsButtonComponent> = {
  title: "UI/Button",
  component: AcdsButtonComponent,
  tags: ["autodocs"],
  args: {
    variant: "primary",
    size: "md",
    loading: false,
    block: false,
  },
  render: (args) => ({
    props: args,
    template: `<acds-button [variant]="variant" [size]="size" [loading]="loading" [block]="block">Action</acds-button>`,
  }),
};

export default meta;

type Story = StoryObj<AcdsButtonComponent>;

export const Primary: Story = {};

export const Danger: Story = {
  args: {
    variant: "danger",
  },
};
