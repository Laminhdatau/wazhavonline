'use client'
import { SetStateAction, useState } from 'react';
import Sidebar from "./components/_partials/Sidebar";
import Navbar from "./components/_partials/Navbar";
import Footer from "./components/_partials/Footer";
import { MessagesPage } from './pages/messages/page';
import { BroadcastPage } from './pages/broadcast/page';
import { FinancePage } from './pages/finance/page';
import { ReportPage } from './pages/report/page';
import { SettingsPage } from './pages/settings/page';
import { IntegrationsPage } from './pages/integrations/page';

export default function Home() {
  const [currentPage, setCurrentPage] = useState('messages');



  // Function to set current page based on sidebar item clicked
  const handleSidebarItemClick = (page: any) => {
    setCurrentPage(page);
  };

  // Render the corresponding page based on the current page state
  const renderPage = () => {
    switch (currentPage) {
      case 'messages':
        return <MessagesPage />;
      case 'broadcast':
        return <BroadcastPage />;
      case 'finance':
        return <FinancePage />;
      case 'report':
        return <ReportPage />;
      case 'settings':
        return <SettingsPage />;
      case 'integrasi':
        return <IntegrationsPage />;
      default:
        return null;
    }
  };

    // Fungsi untuk membuka dan menutup sidebar
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar onItemClick={handleSidebarItemClick} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className={`flex flex-col flex-1`}>
        {/* Navbar */}
        <Navbar toggleSidebar={toggleSidebar} />

        {/* Page Content */}
        <main className="flex-1 p-4">
          {/* Render the corresponding page based on current page state */}
          {renderPage()}
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
