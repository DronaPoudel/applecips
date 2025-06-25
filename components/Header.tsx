import { Search, Menu, Bell } from 'lucide-react';

export function Header() {
  return (
    <div className="glass rounded-2xl p-4 mb-6">
      <div className="flex items-center justify-between">
        {/* Left side - Menu and Search */}
        <div className="flex items-center gap-4 flex-1">
          <button className="p-2 glass-subtle rounded-xl hover:glass-hover transition-all duration-300">
            <Menu className="w-5 h-5 text-white/80" />
          </button>
          
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
            <input
              type="text"
              placeholder="Click here to Search..."
              className="w-full pl-10 pr-4 py-2 glass-subtle rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-300"
            />
          </div>
        </div>

        {/* Right side - User Profile */}
        <div className="flex items-center gap-4">
          <button className="p-2 glass-subtle rounded-xl hover:glass-hover transition-all duration-300 relative">
            <Bell className="w-5 h-5 text-white/80" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
          </button>
          
          <div className="flex items-center gap-3 glass-subtle rounded-xl p-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm">D</span>
            </div>
            <span className="text-white text-sm">Dronachardra</span>
          </div>
        </div>
      </div>
    </div>
  );
}