import React from 'react';
import { ShieldCheck, Stethoscope, Pill, GitFork, BookOpen, AlertTriangle } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab }) {
  const navItems = [
    { id: 'screeners', label: 'Screeners & Notes', icon: Stethoscope },
    { id: 'medications', label: 'Medication Dosing Guide', icon: Pill },
    { id: 'pathways', label: 'Step-Therapy Pathways', icon: GitFork },
    { id: 'safety', label: 'Safety & Rule-Outs', icon: AlertTriangle },
  ];

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center text-white font-black shadow-sm">
              Ψ
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900 text-lg leading-tight">PsyNurse CDS</span>
                <span className="badge-phi">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Zero-PHI Certified
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">Clinical Decision Support • Monica Preder, ARNP</p>
            </div>
          </div>

          <nav className="flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-teal-50 text-teal-700 border border-teal-200 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-teal-600' : 'text-slate-400'}`} />
                  <span className="hidden md:inline">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
