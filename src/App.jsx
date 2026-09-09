import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ScreenerAssessment from './components/ScreenerAssessment';
import MedicationDirectory from './components/MedicationDirectory';
import DecisionTreeWizard from './components/DecisionTreeWizard';
import SafetyGuide from './components/SafetyGuide';

export default function App() {
  const [activeTab, setActiveTab] = useState('screeners');

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <div>
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {activeTab === 'screeners' && <ScreenerAssessment />}
          {activeTab === 'medications' && <MedicationDirectory />}
          {activeTab === 'pathways' && <DecisionTreeWizard />}
          {activeTab === 'safety' && <SafetyGuide />}
        </main>
      </div>

      <footer className="bg-white border-t border-slate-200 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-xs text-slate-500 space-y-1">
          <p className="font-semibold text-slate-700">
            PsyNurse Clinical Decision Support (CDS) Tool • Confidential Clinical Reference
          </p>
          <p>
            Zero-PHI Client-Side Architecture • Built for Monica Preder, ARNP, PMHNP-BC • Washington State Telehealth
          </p>
        </div>
      </footer>
    </div>
  );
}
