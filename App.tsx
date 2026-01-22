import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import CarbonEmissions from './components/CarbonEmissions';
import Trend from './components/Trend';
import Reports from './components/Reports';
import Profile from './components/Profile';
import EditProfile from './components/EditProfile';
import Settings from './components/Settings';

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentView, setCurrentView] = useState('dashboard');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleNavigate = (view: string) => {
    setCurrentView(view);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'trend':
        return <Trend />;
      case 'reports':
        return <Reports />;
      case 'profile':
        return <Profile onEdit={() => handleNavigate('edit-profile')} />;
      case 'edit-profile':
        return <EditProfile onBack={() => handleNavigate('profile')} />;
      case 'settings':
        return <Settings />;
      case 'carbon-emissions':
        return <CarbonEmissions />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden font-sans bg-[var(--color-bg-canvas)] text-[var(--color-text-primary)]">
      <Sidebar 
        isOpen={isSidebarOpen} 
        currentView={currentView}
        onNavigate={handleNavigate}
      />
      
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header 
          onToggleSidebar={toggleSidebar} 
          onNavigate={handleNavigate}
        />
        
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-[var(--space-lg)]">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default App;