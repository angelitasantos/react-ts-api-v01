import type { IconType } from 'react-icons';

export type NavigationItem = {
  to: string;
  label: string;
  icon?: IconType;
};