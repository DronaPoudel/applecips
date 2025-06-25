import React from 'react';
import { CreditCard, Building, Smartphone, Star, Wallet } from 'lucide-react';

const accountTypes = [
  { icon: CreditCard, label: 'Bank Account', active: true },
  { icon: Building, label: 'Own Account' },
  { icon: Smartphone, label: 'NEPALPAY Instant' },
  { icon: Star, label: 'Favourite Account' },
  { icon: Wallet, label: 'Wallet' },
];

export function TransferSection() {
  return (
    <div className="glass rounded-2xl p-6 mb-6">
      <h3 className="text-white mb-4">Transfer To</h3>
      
      <div className="flex gap-2 mb-4">
        <button className="glass-blue rounded-xl px-4 py-2 text-white text-sm">
          Fund Transfer
        </button>
        <button className="glass-subtle rounded-xl px-4 py-2 text-white/70 text-sm hover:glass-hover transition-all duration-300">
          NEPALPAY Request
        </button>
      </div>

      <div className="grid grid-cols-5 gap-3">
        {accountTypes.map((type, index) => {
          const Icon = type.icon;
          return (
            <button
              key={index}
              className={`p-4 rounded-xl text-center transition-all duration-300 ${
                type.active
                  ? 'glass-blue text-white'
                  : 'glass-subtle text-white/70 hover:glass-hover hover:text-white'
              }`}
            >
              <Icon className="w-6 h-6 mx-auto mb-2" />
              <span className="text-xs block">{type.label}</span>
            </button>
          );
        })}
      </div>

      <button className="w-full glass-subtle rounded-xl p-3 mt-4 text-white/70 text-sm hover:glass-hover transition-all duration-300">
        Cross Border
      </button>
    </div>
  );
}