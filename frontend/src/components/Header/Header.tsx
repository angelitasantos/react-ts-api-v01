import { Link, NavLink } from 'react-router-dom';
import { Container } from '../Container';
import type { HeaderProps } from '../../types/header';
import './Header.css';

export function Header({
  logoText,
  logoTo,
  links,
  theme = 'light',
  userName,
  actions,
  containerSize = 'default',
  useContainer = true,
}: HeaderProps) {
  const hasRightContent = userName || actions;
  
  const content = (
    <div className='site-header__content'>
      <Link to={logoTo} className='site-header__logo'>
        {logoText}
      </Link>

      <nav className={`site-header__nav site-header__nav--${theme}`} aria-label='Navegação principal'>
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              isActive
                ? 'site-header__link site-header__link--active'
                : 'site-header__link'
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      {hasRightContent && (
        <div className='site-header__right'>
          {userName && <span>Olá, {userName}</span>}
          {actions}
        </div>
      )}
    </div>
  );

  return (
    <header className={`site-header site-header--${theme}`}>
      {useContainer ? (
        <Container size={containerSize}>{content}</Container>
      ) : (
        content
      )}
    </header>
  );
}