import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Button } from './Button';

expect.extend(toHaveNoViolations);

describe('Button', () => {

  it('renders with correct text', () => {
    render(<Button>Save</Button>);
    expect(screen.getByRole('button', { name: 'Save' })).toBeInTheDocument();
  });

  it('calls onClick when clicked', async () => {
    const handler = vi.fn();
    render(<Button onClick={handler}>Click</Button>);
    await userEvent.click(screen.getByRole('button'));
    expect(handler).toHaveBeenCalledTimes(1);
  });

  it('does not fire onClick when disabled', async () => {
    const handler = vi.fn();
    render(<Button disabled onClick={handler}>Disabled</Button>);
    await userEvent.click(screen.getByRole('button'));
    expect(handler).not.toHaveBeenCalled();
  });

  it('sets aria-busy and disables when loading', () => {
    render(<Button loading>Saving</Button>);
    const btn = screen.getByRole('button');
    expect(btn).toHaveAttribute('aria-busy', 'true');
    expect(btn).toBeDisabled();
  });

  it('does not fire onClick when loading', async () => {
    const handler = vi.fn();
    render(<Button loading onClick={handler}>Saving</Button>);
    await userEvent.click(screen.getByRole('button'));
    expect(handler).not.toHaveBeenCalled();
  });

  it('is focusable by keyboard Tab', async () => {
    render(<Button>Tab target</Button>);
    await userEvent.tab();
    expect(screen.getByRole('button')).toHaveFocus();
  });

  it('activates on Enter key', async () => {
    const handler = vi.fn();
    render(<Button onClick={handler}>Enter</Button>);
    await userEvent.tab();
    await userEvent.keyboard('{Enter}');
    expect(handler).toHaveBeenCalledTimes(1);
  });

  it('has no WCAG violations — default', async () => {
    const { container } = render(<Button>Accessible</Button>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no WCAG violations — disabled', async () => {
    const { container } = render(<Button disabled>Disabled</Button>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no WCAG violations — loading', async () => {
    const { container } = render(<Button loading>Loading</Button>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no WCAG violations — all variants', async () => {
    const { container } = render(
      <div>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="destructive">Delete</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
    );
    expect(await axe(container)).toHaveNoViolations();
  });

});