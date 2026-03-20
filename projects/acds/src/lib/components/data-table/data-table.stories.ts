import type { Meta, StoryObj } from "@storybook/angular";
import { AcdsDataTableComponent } from "./data-table.component";

const meta: Meta<AcdsDataTableComponent<{ name: string; role: string }>> = {
  title: "Data/DataTable",
  component: AcdsDataTableComponent,
  tags: ["autodocs"],
  args: {
    columns: [
      { key: "name", label: "Name" },
      { key: "role", label: "Role" },
    ],
    rows: [
      { name: "Ayo Harper", role: "Designer" },
      { name: "Mika Stone", role: "Engineer" },
    ],
  },
};

export default meta;

type Story = StoryObj<AcdsDataTableComponent<{ name: string; role: string }>>;

export const Default: Story = {};
