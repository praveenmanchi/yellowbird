import React, { ReactNode } from 'react';
import { posthog } from 'posthog-js';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  event?: string;
  properties?: Record<string, any>;
  children: ReactNode;
}

const TrackedButton: React.FC<Props> = ({ event, properties, onClick, children, ...rest }) => {
  const generateEventName = () => {
    if (event) return event;
    if (rest.id) return `Clicked Button: ${rest.id}`;
    if (typeof children === 'string') return `Clicked Button: ${children.trim()}`;
    if (
      Array.isArray(children) &&
      children.some((child) => typeof child === 'string')
    ) {
      const text = children.filter((c) => typeof c === 'string').join(' ').trim();
      return `Clicked Button: ${text}`;
    }
    return 'Clicked Button';
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    posthog.capture(generateEventName(), properties);
    onClick?.(e);
  };

  return (
    <button onClick={handleClick} {...rest}>
      {children}
    </button>
  );
};

export default TrackedButton;
