import type { Meta, StoryObj } from "@storybook/angular";
import { AcdsInputComponent } from "./input.component";

const meta: Meta<AcdsInputComponent> = {
  title: "Forms/Input",
  component: AcdsInputComponent,
  tags: ["autodocs"],
  args: {
    label: "Full name",
    placeholder: "Ada Lovelace",
    hint: "We will display this publicly.",
  },
};

export default meta;

type Story = StoryObj<AcdsInputComponent>;

export const Default: Story = {};
