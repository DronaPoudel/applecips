import React from 'react';
import { Building2, Zap, Building, Users, CreditCard, ChevronLeft, ChevronRight } from 'lucide-react';

const paymentCategories = [
  { icon: Building2, label: 'Government of Nepal', active: true },
  { icon: Zap, label: 'Utilities Payment' },
  { icon: Building, label: 'Financial Institution' },
  { icon: Users, label: 'Corporate Payment' },
  { icon: CreditCard, label: 'Credit Payment' },
];

const paymentServices = [
  {
    name: 'Government of Nepal',
    logo: '🏛️',
    color: 'from-green-500 to-blue-600'
  },
  {
    name: 'Semi-Govt/Sansthan',
    logo: '🏢',
    color: 'from-blue-500 to-purple-600'
  },
  {
    name: 'Local Level Revenue',
    logo: '🏘️',
    color: 'from-orange-500 to-red-600'
  }
];

export function PaymentsSection() {
  return (
    <div className="glass rounded-2xl p-6 mb-6">
      <h3 className="text-white mb-4">Payments</h3>
      
      <div className="flex gap-2 mb-6 overflow-x-auto">
        {paymentCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <button
              key={index}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm whitespace-nowrap transition-all duration-300 ${
                category.active
                  ? 'glass-blue text-white'
                  : 'glass-subtle text-white/70 hover:glass-hover hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4" />
              {category.label}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-3 gap-4">
        {paymentServices.map((service, index) => (
          <div key={index} className="glass-subtle rounded-xl p-4 hover:glass-hover transition-all duration-300 cursor-pointer text-center">
            <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-xl mx-auto mb-3`}>
              {service.logo}
            </div>
            <p className="text-white text-sm">{service.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}