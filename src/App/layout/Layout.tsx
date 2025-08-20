import { Outlet } from 'react-router-dom';
import Header from '../../widgets/Header/Header';

const Layout = () => {
  return (
    <>
      <Header></Header>
      <Outlet />
    </>
  );
};

export default Layout;
