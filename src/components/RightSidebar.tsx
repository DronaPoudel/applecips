import React from 'react';
import { MapPin, Phone, Mail, Download, Store } from 'lucide-react';

const notifications = [
  {
    title: 'Mahila Laghubitta Bittiya Sanstha Ltd',
    time: '2m ago',
    avatar: 'M'
  },
  {
    title: 'Swastik Laghubitta Bittiya Sanstha Ltd',
    time: '5m ago',
    avatar: 'S'
  },
  {
    title: 'Ganapati Laghubitta Bittiya Sanstha Limited',
    time: '10m ago',
    avatar: 'G'
  },
  {
    title: 'Deprosc Laghubitta Bittiya Sanstha Limited',
    time: '15m ago',
    avatar: 'D'
  },
  {
    title: 'Vijaya Laghubitta Bittiya Sanstha Ltd',
    time: '20m ago',
    avatar: 'V'
  }
];

const acceptedAt = [
  { name: 'Lic Nepal Limited', logo: 'L' },
  { name: 'State 1 Nekta', logo: 'S' },
  { name: 'Met Life Insurance', logo: 'M' },
  { name: 'Bhojesk', logo: 'B' },
  { name: 'Buddha Air', logo: 'B' },
  { name: 'Yeti Airlines', logo: 'Y' },
  { name: 'Shree Airlines', logo: 'S' },
];

export function RightSidebar() {
  return (
    <div className="w-80 space-y-6">
      {/* User Profile */}
      <div className="glass rounded-2xl p-6">
        <div className="text-center mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
            <span className="text-white text-xl">D</span>
          </div>
          <h3 className="text-white">Namaste Dronachardra,</h3>
          <p className="text-white/60 text-sm">gurdakshyanpal@gmail.com</p>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-white/80">
            <Phone className="w-4 h-4" />
            <span>9847471533</span>
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <Mail className="w-4 h-4" />
            <span>9847471533@tips</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-white/20">
          <p className="text-white/60 text-sm">What's New</p>
        </div>
      </div>

      {/* Notifications */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-white mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {notifications.slice(0, 5).map((notification, index) => (
            <div key={index} className="flex items-start gap-3 p-2 glass-subtle rounded-xl hover:glass-hover transition-all duration-300">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center text-white text-xs">
                {notification.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm truncate">{notification.title}</p>
                <p className="text-white/60 text-xs">{notification.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* App Download */}
      <div className="glass rounded-2xl p-6">
        <div className="flex gap-3">
          <button className="flex-1 glass-subtle rounded-xl p-3 hover:glass-hover transition-all duration-300">
            <Store className="w-6 h-6 text-white/80 mx-auto mb-1" />
            <p className="text-white/80 text-xs text-center">App Store</p>
          </button>
          <button className="flex-1 glass-subtle rounded-xl p-3 hover:glass-hover transition-all duration-300">
            <Download className="w-6 h-6 text-white/80 mx-auto mb-1" />
            <p className="text-white/80 text-xs text-center">Google Play</p>
          </button>
        </div>
      </div>

      {/* Accepted At */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-white mb-4">We are accepted at</h3>
        <div className="grid grid-cols-4 gap-3">
          {acceptedAt.map((place, index) => (
            <div key={index} className="glass-subtle rounded-xl p-3 hover:glass-hover transition-all duration-300 text-center">
              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-1">
                <span className="text-white text-xs">{place.logo}</span>
              </div>
              <p className="text-white/70 text-xs truncate">{place.name}</p>
            </div>
          ))}
          <button className="glass-subtle rounded-xl p-3 hover:glass-hover transition-all duration-300 text-center">
            <div className="text-white/60 text-lg">...</div>
            <p className="text-white/60 text-xs">View More</p>
          </button>
        </div>
      </div>
    </div>
  );
}