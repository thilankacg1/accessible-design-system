import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Mail, ArrowRight, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'destructive', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    loading:   { control: 'boolean' },
    disabled:  { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: 'Save changes' },
};

export const Secondary: Story = {
  args: { children: 'Cancel', variant: 'secondary' },
};

export const Outline: Story = {
  args: { children: 'View details', variant: 'outline' },
};

export const Destructive: Story = {
  args: { children: 'Delete', variant: 'destructive' },
};

export const Ghost: Story = {
  args: { children: 'Dismiss', variant: 'ghost' },
};

export const Loading: Story = {
  args: { children: 'Saving...', loading: true },
};

export const Disabled: Story = {
  args: { children: 'Unavailable', disabled: true },
};

export const SmallSize: Story = {
  args: { children: 'Small button', size: 'sm' },
};

export const LargeSize: Story = {
  args: { children: 'Large button', size: 'lg' },
};

export const WithLeftIcon: Story = {
  args: {
    children: 'Send email',
    leftIcon: <Mail className="h-4 w-4" />,
  },
};

export const WithRightIcon: Story = {
  args: {
    children: 'Continue',
    rightIcon: <ArrowRight className="h-4 w-4" />,
  },
};

export const FullWidth: Story = {
  args: { children: 'Submit form', fullWidth: true },
  parameters: { layout: 'padded' },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 p-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="destructive">
        <Trash2 className="h-4 w-4" aria-hidden />
        Destructive
      </Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
};