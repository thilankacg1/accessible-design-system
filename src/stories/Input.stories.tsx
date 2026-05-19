import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Input } from '@/components/ui/Input';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Email address',
    placeholder: 'you@example.com',
    type: 'email',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: '••••••••',
    helperText: 'Must be at least 8 characters.',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email address',
    type: 'email',
    placeholder: 'you@example.com',
    error: 'Please enter a valid email address.',
    defaultValue: 'not-an-email',
  },
};

export const Required: Story = {
  args: {
    label: 'Full name',
    placeholder: 'Jane Smith',
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Username',
    defaultValue: 'thilanka',
    disabled: true,
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-80">
      <Input label="Default" placeholder="Enter value" />
      <Input label="With helper" placeholder="Enter value" helperText="This is some helpful context." />
      <Input label="With error" defaultValue="bad input" error="This field is required." />
      <Input label="Required field" placeholder="Enter value" required />
      <Input label="Disabled" defaultValue="Cannot edit" disabled />
    </div>
  ),
  parameters: { layout: 'padded' },
};