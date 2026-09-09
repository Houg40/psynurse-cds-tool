import React from 'react';
import { ShieldCheck, Stethoscope, Pill, GitFork, AlertTriangle, ArrowLeftRight } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab }) {
  const navItems = [
    { id: 'screeners', label: 'Screeners & Notes', shortLabel: 'Screeners', icon: Stethoscope },
    { id: 'medications', label: 'Dosing Guide', shortLabel: 'Dosing', icon: Pill },
    { id: 'pathways', label: 'Step-Therapy', shortLabel: 'Pathways', icon: GitFork },
    { id: 'crosstaper', label: 'Cross-Taper', shortLabel: 'Cross-Taper', icon: ArrowLeftRight },
    { id: 'safety', label: 'Safety & Rules', shortLabel: 'Safety', icon: AlertTriangle },
  ];

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between py-2.5 lg:py-0 lg:h-16 gap-3">
          
          {/* Brand & Subtitle */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="w-9 h-9 rounded-xl bg-teal-600 flex items-center justify-center text-white font-black text-lg shadow-xs flex-shrink-0">
              Ψ
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-slate-900 text-base leading-none tracking-tight">
                  PsyNurse CDS
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  Zero-PHI
                </span>
              </div>
              <span className="text-[11px] text-slate-500 font-medium leading-normal mt-0.5 whitespace-nowrap">
                Clinical Decision Support • Monica Preder, ARNP
              </span>
            </div>
          </div>

          {/* Clean Segmented Navigation Bar */}
          <nav className="flex items-center p-1 bg-slate-100 rounded-xl border border-slate-200/70 overflow-x-auto scrollbar-none flex-shrink-0">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex-shrink-0 ${
                    isActive
                      ? 'bg-white text-teal-800 shadow-xs font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-teal-600' : 'text-slate-400'}`} />
                  <span className="hidden sm:inline">{item.label}</span>
                  <span className="sm:hidden">{item.shortLabel}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
