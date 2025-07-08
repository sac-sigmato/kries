import React from 'react';
import Header, { AppProvider } from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <AppProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </AppProvider>
  );
};

export default Layout;