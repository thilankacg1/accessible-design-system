import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Badge } from '@/components/ui/Badge';

const meta: Meta<typeof Badge> = {
  title: 'UI/Badge',
  component: Badge,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'danger', 'info', 'outline'],
    },
    dot: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: 'Default' },
};

export const Primary: Story = {
  args: { children: 'Primary', variant: 'primary' },
};

export const Success: Story = {
  args: { children: 'Active', variant: 'success' },
};

export const Warning: Story = {
  args: { children: 'Pending', variant: 'warning' },
};

export const Danger: Story = {
  args: { children: 'Overdue', variant: 'danger' },
};

export const Info: Story = {
  args: { children: 'In review', variant: 'info' },
};

export const Outline: Story = {
  args: { children: 'Outline', variant: 'outline' },
};

export const WithDot: Story = {
  args: { children: 'Online', variant: 'success', dot: true },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 p-4">
      <Badge variant="default">Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success" dot>Active</Badge>
      <Badge variant="warning" dot>Pending</Badge>
      <Badge variant="danger" dot>Overdue</Badge>
      <Badge variant="info">In review</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
};

export const StatusList: Story = {
  render: () => (
    <div className="flex flex-col gap-3 p-4">
      <div className="flex items-center justify-between w-64">
        <span className="text-sm text-gray-700">Server status</span>
        <Badge variant="success" dot>Online</Badge>
      </div>
      <div className="flex items-center justify-between w-64">
        <span className="text-sm text-gray-700">Deployment</span>
        <Badge variant="warning" dot>Pending</Badge>
      </div>
      <div className="flex items-center justify-between w-64">
        <span className="text-sm text-gray-700">Last build</span>
        <Badge variant="danger" dot>Failed</Badge>
      </div>
    </div>
  ),
};