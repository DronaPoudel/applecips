import React from 'react';
import { CreditCard, Home, Building2, Users, FileText, History, HelpCircle } from 'lucide-react';

const sidebarItems = [
  { icon: Home, label: 'Dashboard', active: true },
  { icon: CreditCard, label: 'Bank Account' },
  { icon: Users, label: 'Favourite Listing' },
  { icon: Building2, label: 'Government of Nepal' },
  { icon: CreditCard, label: 'Utilities Payment' },
  { icon: FileText, label: 'Financial Institution' },
  { icon: Users, label: 'Corporate Payment' },
  { icon: Users, label: 'Creditors Payment' },
  { icon: History, label: 'Transaction History' },
];

export function Sidebar() {
  return (
    <div className="w-64 h-full glass rounded-2xl p-6 flex flex-col">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 glass-blue rounded-xl flex items-center justify-center">
          <span className="text-white text-lg">℩</span>
        </div>
        <div>
          <h2 className="gradient-text">connect IPS</h2>
          <p className="text-xs text-white/60">pay direct from here</p>
        </div>
      </div>

      {/* Transfer To */}
      <div className="mb-8">
        <div className="glass-subtle rounded-xl p-4 mb-4">
          <div className="flex items-center gap-2 text-white/80 mb-2">
            <span className="text-sm">⚡</span>
            <span className="text-sm">Transfer To</span>
          </div>
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 space-y-2">
        {sidebarItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={index}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                item.active
                  ? 'glass-blue text-white'
                  : 'text-white/70 hover:text-white hover:glass-subtle'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Help */}
      <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 hover:text-white hover:glass-subtle transition-all duration-300 mt-4">
        <HelpCircle className="w-5 h-5" />
        <span className="text-sm">Help</span>
      </button>
    </div>
  );
}