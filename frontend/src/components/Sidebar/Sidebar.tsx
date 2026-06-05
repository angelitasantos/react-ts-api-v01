import { NavLink } from 'react-router-dom';
import { FiCircle } from 'react-icons/fi';
import type { NavigationItem } from '../../types/navigation';
import './Sidebar.css';

type SidebarProps = {
  links: NavigationItem[];
};

export function Sidebar({ links }: SidebarProps) {
  return (
    <aside className='sidebar'>
      <nav className='sidebar__nav' aria-label='Navegação do painel'>
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/manager'}
            className={({ isActive }) =>
              isActive
                ? 'sidebar__link sidebar__link--active'
                : 'sidebar__link'
            }
          >
            <span className='sidebar__icon'>
              {link.icon ?? <FiCircle />}
            </span>

            <span className='sidebar__label'>
              {link.label}
            </span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}