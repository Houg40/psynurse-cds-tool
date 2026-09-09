# PsyNurse CDS — Clinical Decision Support & Prescribing Reference

A confidential, zero-PHI Clinical Decision Support (CDS) platform designed for **Monica Preder, ARNP, PMHNP-BC** (`psychiatristnurse.com`) to assist in adult psychiatric assessments, evidence-based medication selection, titration scheduling, and rapid Tebra EHR chart note generation.

---

## 1. Architectural Principles

### Zero-PHI by Design (100% Client-Side)
* **No Database Transmission:** The entire decision engine, scoring algorithms, and reference matrices execute entirely within the local browser memory.
* **No Patient Identifiers:** No names, medical record numbers (MRNs), or dates of birth are captured, stored, or processed.
* **Zero Attack Surface:** Eliminates HIPAA data breach risks and eliminates server hosting dependencies.

### Regulatory Exemption (FDA Non-Device CDS)
Designed strictly in accordance with **Section 3060(a) of the 21st Century Cures Act (FDA Guidance for Clinical Decision Support Software)**:
* Surfaces peer-reviewed, evidence-based clinical recommendations (APA, CANMAT, Maudsley Prescribing Guidelines, DSM-5-TR).
* Explicitly preserves independent clinical judgment with human-in-the-loop oversight by a licensed psychiatric nurse practitioner.

---

## 2. Core Functional Modules

1. **Screeners & Tebra EHR Note Exporter (`ScreenerAssessment.jsx`):**
   - **PHQ-9:** Depression severity scoring with automated Question 9 self-harm safety alerting.
   - **GAD-7:** Generalized anxiety assessment.
   - **ASRS-v1.1:** Adult ADHD screening with Part A diagnostic threshold detection.
   - **MDQ:** Mood Disorder Questionnaire for mandatory Bipolar 1/2 rule-out prior to antidepressant initiation.
   - **One-Click EHR Formatter:** Transforms scores and clinical interpretations into a structured note ready to paste into Tebra.

2. **Psychiatric Medication Reference & Dosing (`MedicationDirectory.jsx`):**
   - Covers core SSRIs, SNRIs, NDRIs, NaSSAs, CNS stimulants (Vyvanse, Adderall XR), non-stimulant ADHD agents (Strattera), anxiolytics (Buspar), and mood stabilizers (Lamictal).
   - Instant filtering for starting doses, titration increments, therapeutic ranges, FDA ceilings, half-lives, and CYP450 metabolic profiles.
   - Clinical pearls and expandable Black Box Warnings.

3. **Step-Therapy Pathways (`DecisionTreeWizard.jsx`):**
   - Algorithmic 1st-line, 2nd-line, and augmentation pathways for MDD, GAD, and Adult ADHD.
   - Patient-specific modifier tags (*Insomnia, Fatigue, Sexual Sensitivity, Substance History, Cardiac Risk*) that dynamically highlight tailored prescribing choices.

4. **Safety & Compliance Guide (`SafetyGuide.jsx`):**
   - Bipolar manic switch prevention protocols.
   - Washington State telehealth and Ryan Haight Act controlled substance requirements (WA PDMP, patient location verification).
   - Cross-tapering protocols to prevent antidepressant discontinuation syndrome.

---

## 3. Getting Started

### Local Development
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
```
Generates an optimized static bundle in `dist/` that can be hosted on Azure App Service, Vercel, or run offline.
