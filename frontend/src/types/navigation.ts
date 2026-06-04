import type { ReactNode } from 'react';

export type NavigationItem = {
  to: string;
  label: string;
  icon?: ReactNode;
};