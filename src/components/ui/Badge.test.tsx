import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Badge } from './Badge';

expect.extend(toHaveNoViolations);

describe('Badge', () => {

  it('renders with correct text', () => {
    render(<Badge>Active</Badge>);
    expect(screen.getByText('Active')).toBeInTheDocument();
  });

  it('applies default variant by default', () => {
    render(<Badge>Default</Badge>);
    expect(screen.getByText('Default')).toHaveClass('bg-gray-100');
  });

  it('applies success variant classes', () => {
    render(<Badge variant="success">Success</Badge>);
    expect(screen.getByText('Success')).toHaveClass('bg-green-100');
  });

  it('applies danger variant classes', () => {
    render(<Badge variant="danger">Error</Badge>);
    expect(screen.getByText('Error')).toHaveClass('bg-red-100');
  });

  it('renders dot when dot prop is true', () => {
    const { container } = render(<Badge dot>Online</Badge>);
    const dot = container.querySelector('[aria-hidden="true"]');
    expect(dot).toBeInTheDocument();
    expect(dot).toHaveClass('rounded-full');
  });

  it('does not render dot by default', () => {
    const { container } = render(<Badge>No dot</Badge>);
    const dot = container.querySelector('[aria-hidden="true"]');
    expect(dot).not.toBeInTheDocument();
  });

  it('accepts and applies custom className', () => {
    render(<Badge className="custom-class">Styled</Badge>);
    expect(screen.getByText('Styled')).toHaveClass('custom-class');
  });

  it('has no WCAG violations — default', async () => {
    const { container } = render(<Badge>Accessible</Badge>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no WCAG violations — all variants', async () => {
    const { container } = render(
      <div>
        <Badge variant="default">Default</Badge>
        <Badge variant="primary">Primary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="danger">Danger</Badge>
        <Badge variant="info">Info</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no WCAG violations — with dot', async () => {
    const { container } = render(
      <div>
        <Badge variant="success" dot>Online</Badge>
        <Badge variant="warning" dot>Pending</Badge>
        <Badge variant="danger" dot>Offline</Badge>
      </div>
    );
    expect(await axe(container)).toHaveNoViolations();
  });

});