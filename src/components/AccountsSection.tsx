import React from 'react';
import { MoreHorizontal, Download, Plus } from 'lucide-react';

const accounts = [
  {
    type: 'Primary Account',
    accountNumber: '****4001',
    bank: 'NIC Asia Bank Limited',
    branch: 'Golhujar Branch',
    balance: 'Dron',
    status: 'active',
    color: 'from-red-500 to-pink-600'
  },
  {
    type: 'Other Account',
    accountNumber: '****0013',
    holder: 'Dronachardra Poudel',
    status: 'verified',
    color: 'from-orange-500 to-red-600'
  },
  {
    type: 'Other Account',
    accountNumber: '****0025',
    holder: 'Dronachardra Poudel',
    status: 'verified',
    color: 'from-green-500 to-blue-600'
  }
];

export function AccountsSection() {
  return (
    <div className="space-y-4">
      <div className="glass rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white">Primary Account</h3>
          <button className="text-blue-400 text-sm hover:text-blue-300 transition-colors">
            Change Primary
          </button>
        </div>

        <div className="glass-subtle rounded-xl p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className={`w-12 h-12 bg-gradient-to-br ${accounts[0].color} rounded-xl flex items-center justify-center`}>
              <span className="text-white text-lg">N</span>
            </div>
            <div className="flex-1">
              <p className="text-white">{accounts[0].accountNumber}</p>
              <p className="text-white/60 text-sm">{accounts[0].balance}</p>
            </div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          
          <div className="text-white/80 text-sm mb-3">
            <p>{accounts[0].bank}</p>
            <p>{accounts[0].branch}</p>
          </div>

          <button className="w-full glass-blue rounded-xl py-2 text-white text-sm hover:opacity-90 transition-opacity">
            Mini Statement
          </button>
        </div>
      </div>

      <div className="glass rounded-2xl p-6">
        <h3 className="text-white mb-4">Other Account</h3>
        
        <div className="space-y-3 mb-4">
          {accounts.slice(1).map((account, index) => (
            <div key={index} className="glass-subtle rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 bg-gradient-to-br ${account.color} rounded-xl flex items-center justify-center`}>
                  <span className="text-white text-sm">
                    {account.accountNumber.slice(-1)}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-white text-sm">{account.accountNumber}</p>
                  <p className="text-white/60 text-xs">{account.holder}</p>
                </div>
                <div className="flex gap-2">
                  <button className="text-blue-400 text-xs hover:text-blue-300 transition-colors">
                    Mini Statement
                  </button>
                  <button className="text-blue-400 text-xs hover:text-blue-300 transition-colors">
                    Download Form
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full glass-subtle rounded-xl p-3 text-white/70 text-sm hover:glass-hover transition-all duration-300 flex items-center justify-center gap-2">
          <Plus className="w-4 h-4" />
          Add New Bank Account
        </button>
      </div>
    </div>
  );
}