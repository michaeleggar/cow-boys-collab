import { Outlet } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="site-wrapper">
      <Header />
      <Navigation />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
