import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Footer } from '../../components/Footer/Footer';
import {
  managerTopLinks,
  managerSidebarLinks,
} from '../../types/managerNavigation';
import './ManagerLayout.css';

export function ManagerLayout() {
  return (
    <div className='manager-layout'>
      <Header
        logoText='Manager Panel'
        logoTo='/manager'
        links={managerTopLinks}
        theme='manager'
        userName='Carlos'
        actions={<button type='button'>Sair</button>}
        useContainer={false}
      />

      <div className='manager-layout__body'>
        <Sidebar links={managerSidebarLinks} />

        <main className='manager-layout__content'>
          <Outlet />
        </main>
      </div>

      <Footer variant='manager' containerSize='full' />
    </div>
  );
}