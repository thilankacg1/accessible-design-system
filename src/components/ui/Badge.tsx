import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  [
    'inline-flex items-center gap-1.5',
    'rounded-full px-2.5 py-0.5',
    'text-xs font-medium',
    'transition-colors',
    'focus-visible:outline-none focus-visible:ring-2',
    'focus-visible:ring-offset-2 focus-visible:ring-blue-600',
  ],
  {
    variants: {
      variant: {
        default:     'bg-gray-100 text-gray-700',
        primary:     'bg-blue-100 text-blue-700',
        success:     'bg-green-100 text-green-700',
        warning:     'bg-amber-100 text-amber-700',
        danger:      'bg-red-100 text-red-700',
        info:        'bg-sky-100 text-sky-700',
        outline:     'border border-gray-300 text-gray-700 bg-transparent',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  dot?: boolean;
}

const DOT_COLORS: Record<string, string> = {
  default: 'bg-gray-400',
  primary: 'bg-blue-500',
  success: 'bg-green-500',
  warning: 'bg-amber-500',
  danger:  'bg-red-500',
  info:    'bg-sky-500',
  outline: 'bg-gray-400',
};

function Badge({ className, variant = 'default', dot = false, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(badgeVariants({ variant, className }))}
      {...props}
    >
      {dot && (
        <span
          className={cn('h-1.5 w-1.5 rounded-full', DOT_COLORS[variant ?? 'default'])}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}

Badge.displayName = 'Badge';

export { Badge, badgeVariants };