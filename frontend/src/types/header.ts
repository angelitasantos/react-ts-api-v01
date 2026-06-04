import type { ReactNode } from 'react';
import type { NavigationItem } from './navigation';
import type { HeaderTheme } from './layout';

export type HeaderProps = {
  logoText: string;
  logoTo: string;
  links: NavigationItem[];
  theme?: HeaderTheme;
  userName?: string;
  actions?: ReactNode;
  containerSize?: 'default' | 'wide' | 'full';
  useContainer?: boolean;
};