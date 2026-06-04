import type { ReactNode } from 'react';
import './Container.css';

type ContainerProps = {
  children: ReactNode;
  size?: 'default' | 'wide' | 'full';
  className?: string;
};

export function Container({
  children,
  size = 'default',
  className = '',
}: ContainerProps) {
  return (
    <div className={`container container--${size} ${className}`.trim()}>
      {children}
    </div>
  );
}