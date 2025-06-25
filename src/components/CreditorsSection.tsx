import React from 'react';
import { Star, Clock, MoreHorizontal } from 'lucide-react';

const creditors = [
  {
    name: 'NCELL Mobile',
    type: 'Mobile Top Up',
    logo: '📱'
  }
];

const topUpServices = [
  {
    name: 'Ncell Mobile Top Up',
    image: '📱',
    color: 'from-purple-500 to-blue-600'
  },
  {
    name: 'NTC Mobile Top Up',
    image: '📞',
    color: 'from-green-500 to-blue-600'
  },
  {
    name: 'Broker Payment',
    image: '💼',
    color: 'from-orange-500 to-red-600'
  }
];

export function CreditorsSection() {
  return (
    <div className="glass rounded-2xl p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white">My Creditors</h3>
        <button className="p-1 glass-subtle rounded-lg hover:glass-hover transition-all duration-300">
          <MoreHorizontal className="w-4 h-4 text-white/60" />
        </button>
      </div>

      <div className="flex gap-4 mb-4">
        <button className="flex items-center gap-2 glass-blue rounded-xl px-4 py-2 text-white text-sm">
          <Star className="w-4 h-4" />
          Favourite
        </button>
        <button className="flex items-center gap-2 glass-subtle rounded-xl px-4 py-2 text-white/70 text-sm hover:glass-hover transition-all duration-300">
          <Clock className="w-4 h-4" />
          Recent
        </button>
      </div>

      <div className="space-y-3 mb-6">
        {creditors.map((creditor, index) => (
          <div key={index} className="flex items-center gap-3 p-3 glass-subtle rounded-xl hover:glass-hover transition-all duration-300">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center text-lg">
              {creditor.logo}
            </div>
            <div className="flex-1">
              <p className="text-white text-sm">{creditor.name}</p>
              <p className="text-white/60 text-xs">{creditor.type}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-3">
        {topUpServices.map((service, index) => (
          <div key={index} className="glass-hover rounded-xl overflow-hidden cursor-pointer">
            <div className={`h-20 bg-gradient-to-br ${service.color} flex items-center justify-center text-2xl`}>
              {service.image}
            </div>
            <div className="p-3 glass-subtle">
              <p className="text-white text-xs text-center">{service.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}