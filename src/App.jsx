import React from 'react';
import { HashRouter } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import PageWrapper from './components/layout/PageWrapper';
import AppRoutes from './routes';

export default function App() {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen bg-brand-cream text-brand-charcoal">
        <Navbar />
        <PageWrapper>
          <AppRoutes />
        </PageWrapper>
        <Footer />
      </div>
    </HashRouter>
  );
}
