import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Input } from './Input';

expect.extend(toHaveNoViolations);

describe('Input', () => {

  // ── Rendering ───────────────────────────────────────────────────────
  it('renders label and input', () => {
    render(<Input label="Email" />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
  });

  it('renders helper text when provided', () => {
    render(<Input label="Password" helperText="At least 8 characters" />);
    expect(screen.getByText('At least 8 characters')).toBeInTheDocument();
  });

  it('renders error message when provided', () => {
    render(<Input label="Email" error="Invalid email address" />);
    expect(screen.getByText('Invalid email address')).toBeInTheDocument();
  });

  it('does not render helper text when error is shown', () => {
    render(
      <Input label="Email" helperText="Enter your email" error="Invalid email" />
    );
    expect(screen.queryByText('Enter your email')).not.toBeInTheDocument();
    expect(screen.getByText('Invalid email')).toBeInTheDocument();
  });

  // ── Accessibility attributes ─────────────────────────────────────────
  it('links label to input via htmlFor', () => {
    render(<Input label="Full name" />);
    const input = screen.getByLabelText('Full name');
    expect(input.tagName).toBe('INPUT');
  });

  it('sets aria-invalid when error is present', () => {
    render(<Input label="Email" error="Required" />);
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });

  it('sets aria-describedby pointing to error message', () => {
    render(<Input label="Email" error="Required field" />);
    const input = screen.getByRole('textbox');
    const errorId = input.getAttribute('aria-describedby');
    expect(errorId).toBeTruthy();
    const errorEl = document.getElementById(errorId!);
    expect(errorEl).toHaveTextContent('Required field');
  });

  it('sets aria-describedby pointing to helper text', () => {
    render(<Input label="Email" helperText="Enter your email" />);
    const input = screen.getByRole('textbox');
    const helperId = input.getAttribute('aria-describedby');
    expect(helperId).toBeTruthy();
    const helperEl = document.getElementById(helperId!);
    expect(helperEl).toHaveTextContent('Enter your email');
  });

  it('error message has role=alert', () => {
    render(<Input label="Email" error="Something went wrong" />);
    expect(screen.getByRole('alert')).toHaveTextContent('Something went wrong');
  });

  // ── Interaction ──────────────────────────────────────────────────────
  it('accepts user input', async () => {
    render(<Input label="Name" />);
    const input = screen.getByLabelText('Name');
    await userEvent.type(input, 'Thilanka');
    expect(input).toHaveValue('Thilanka');
  });

  it('is not interactive when disabled', async () => {
    render(<Input label="Name" disabled defaultValue="locked" />);
    const input = screen.getByLabelText('Name');
    expect(input).toBeDisabled();
  });

  // ── WCAG ────────────────────────────────────────────────────────────
  it('has no WCAG violations — default', async () => {
    const { container } = render(<Input label="Email" />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no WCAG violations — with error', async () => {
    const { container } = render(
      <Input label="Email" error="Invalid email address" />
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no WCAG violations — with helper text', async () => {
    const { container } = render(
      <Input label="Password" helperText="At least 8 characters" />
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no WCAG violations — required', async () => {
    const { container } = render(<Input label="Full name" required />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no WCAG violations — disabled', async () => {
    const { container } = render(<Input label="Username" disabled />);
    expect(await axe(container)).toHaveNoViolations();
  });

});