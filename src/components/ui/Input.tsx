import * as React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className, id, disabled, ...props }, ref) => {
    const generatedId = React.useId();
    const inputId = id ?? generatedId;
    const errorId = `${inputId}-error`;
    const helperId = `${inputId}-helper`;

    const describedBy = [
      error ? errorId : null,
      helperText ? helperId : null,
    ]
      .filter(Boolean)
      .join(' ') || undefined;

    return (
      <div className="flex flex-col gap-1.5 w-full">

        {/* Label */}
        <label
          htmlFor={inputId}
          className={cn(
            'text-sm font-medium',
            disabled ? 'text-gray-400' : 'text-gray-700'
          )}
        >
          {label}
          {props.required && (
            <span className="ml-1 text-red-500" aria-hidden="true">*</span>
          )}
          {props.required && (
            <span className="sr-only">(required)</span>
          )}
        </label>

        {/* Input */}
        <input
          ref={ref}
          id={inputId}
          disabled={disabled}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={describedBy}
          className={cn(
            'h-10 w-full rounded-md border px-3 py-2 text-sm',
            'transition-colors duration-150',
            'placeholder:text-gray-400',
            'focus-visible:outline-none focus-visible:ring-2',
            'focus-visible:ring-offset-1 focus-visible:ring-blue-600',
            'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-50',
            error
              ? 'border-red-500 text-red-900 focus-visible:ring-red-500'
              : 'border-gray-300 text-gray-900',
            className
          )}
          {...props}
        />

        {/* Error message */}
        {error && (
          <p
            id={errorId}
            role="alert"
            className="text-xs text-red-600 flex items-center gap-1"
          >
            <span aria-hidden="true">✕</span>
            {error}
          </p>
        )}

        {/* Helper text */}
        {helperText && !error && (
          <p id={helperId} className="text-xs text-gray-500">
            {helperText}
          </p>
        )}

      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };