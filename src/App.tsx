import React from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { TransferSection } from './components/TransferSection';
import { CreditorsSection } from './components/CreditorsSection';
import { PaymentsSection } from './components/PaymentsSection';
import { AccountsSection } from './components/AccountsSection';
import { RightSidebar } from './components/RightSidebar';

export default function App() {
  return (
    <div className="min-h-screen p-6">
      <div className="flex gap-6 max-w-7xl mx-auto">
        {/* Left Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 space-y-6">
          <Header />
          
          
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <div className="space-y-6">
              <TransferSection />
              <CreditorsSection />
              <PaymentsSection />
            </div>
            
            
            <div>
              <AccountsSection />
            </div>
          </div>

          {/* Footer */}
          <div className="glass-subtle rounded-2xl p-4 text-center">
            <p className="text-white/60 text-sm">
              Copyright © Nepal Clearing House Limited, 2018-2025
            </p>
          </div>
        </div>

        {/* Right Sidebar */}
        <RightSidebar />
      </div>
    </div>
  );
}