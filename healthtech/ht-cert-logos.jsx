// Xorora — Health Tech · security-standard badge lockups
// Recognizable SVG renderings of each compliance standard (styled lockups,
// not pixel-exact trademark files). Drop in official SVGs when licensed.

function CertHIPAA() {
  return (
    <svg viewBox="0 0 150 158" height="84" role="img" aria-label="HIPAA compliant" style={{ overflow: 'visible' }}>
      <path d="M75 6 L136 29 V82 C136 121 109 145 75 154 C41 145 14 121 14 82 V29 Z"
        fill="#0E8C6A" stroke="#0B7457" strokeWidth="2" />
      <path d="M75 16 L126 35 V81 C126 114 103 134 75 142 C47 134 24 114 24 81 V35 Z"
        fill="none" stroke="rgba(255,255,255,.45)" strokeWidth="1.5" />
      <path d="M58 80 L70 92 L94 64" fill="none" stroke="#fff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <text x="75" y="120" textAnchor="middle" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 26, letterSpacing: '.04em', fill: '#fff' }}>HIPAA</text>
      <text x="75" y="135" textAnchor="middle" style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 500, fontSize: 8.5, letterSpacing: '.22em', fill: 'rgba(255,255,255,.9)' }}>COMPLIANT</text>
    </svg>
  );
}

function CertHITRUST() {
  return (
    <svg viewBox="0 0 210 84" height="58" role="img" aria-label="HITRUST CSF certified">
      <g transform="translate(8 22)">
        <rect x="0" y="0" width="13" height="13" rx="2" fill="#1FB6A6" />
        <rect x="16" y="0" width="13" height="13" rx="2" fill="#16284B" />
        <rect x="0" y="16" width="13" height="13" rx="2" fill="#16284B" />
        <rect x="16" y="16" width="13" height="13" rx="2" fill="#1FB6A6" />
      </g>
      <text x="52" y="44" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 30, letterSpacing: '-.01em', fill: '#16284B' }}>HITRUST</text>
      <text x="53" y="62" style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 500, fontSize: 9.5, letterSpacing: '.26em', fill: '#5B6B86' }}>CSF CERTIFIED</text>
    </svg>
  );
}

function CertSOC2() {
  return (
    <svg viewBox="0 0 180 180" height="92" role="img" aria-label="SOC 2 Type II — AICPA Service Organization Control">
      <defs>
        <path id="soc-top" d="M 22 90 A 68 68 0 0 1 158 90" />
        <path id="soc-bot" d="M 28 96 A 62 62 0 0 0 152 96" />
      </defs>
      <circle cx="90" cy="90" r="84" fill="#fff" stroke="#1B3F8B" strokeWidth="3" />
      <circle cx="90" cy="90" r="74" fill="none" stroke="#1B3F8B" strokeWidth="1" opacity=".5" />
      <text style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 500, fontSize: 11.5, letterSpacing: '.12em', fill: '#1B3F8B' }}>
        <textPath href="#soc-top" startOffset="50%" textAnchor="middle">SERVICE ORGANIZATION CONTROL</textPath>
      </text>
      <text style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 500, fontSize: 11, letterSpacing: '.18em', fill: '#1B3F8B' }}>
        <textPath href="#soc-bot" startOffset="50%" textAnchor="middle">AICPA</textPath>
      </text>
      <text x="90" y="86" textAnchor="middle" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 38, letterSpacing: '-.02em', fill: '#16284B' }}>SOC</text>
      <text x="90" y="116" textAnchor="middle" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 17, letterSpacing: '.04em', fill: '#1B3F8B' }}>2 · TYPE II</text>
      <line x1="46" y1="124" x2="134" y2="124" stroke="#1B3F8B" strokeWidth="1" opacity=".35" />
    </svg>
  );
}

function CertFDA() {
  return (
    <svg viewBox="0 0 170 84" height="62" role="img" aria-label="U.S. Food and Drug Administration">
      <text x="85" y="50" textAnchor="middle" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 50, letterSpacing: '-.06em', fill: '#00529B' }}>FDA</text>
      <text x="85" y="70" textAnchor="middle" style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 500, fontSize: 8, letterSpacing: '.14em', fill: '#5B6B86' }}>U.S. FOOD &amp; DRUG ADMIN.</text>
    </svg>
  );
}

function CertISO27001() {
  return (
    <svg viewBox="0 0 180 180" height="92" role="img" aria-label="ISO/IEC 27001 information security certified">
      <defs>
        <path id="iso-top" d="M 22 90 A 68 68 0 0 1 158 90" />
        <path id="iso-bot" d="M 28 96 A 62 62 0 0 0 152 96" />
      </defs>
      <circle cx="90" cy="90" r="84" fill="#fff" stroke="#1F3A5F" strokeWidth="3" />
      <circle cx="90" cy="90" r="74" fill="none" stroke="#C8102E" strokeWidth="1.5" opacity=".7" />
      <text style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 500, fontSize: 12, letterSpacing: '.14em', fill: '#1F3A5F' }}>
        <textPath href="#iso-top" startOffset="50%" textAnchor="middle">ISO/IEC 27001</textPath>
      </text>
      <text style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 500, fontSize: 10, letterSpacing: '.14em', fill: '#1F3A5F' }}>
        <textPath href="#iso-bot" startOffset="50%" textAnchor="middle">INFORMATION SECURITY</textPath>
      </text>
      <text x="90" y="84" textAnchor="middle" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 30, letterSpacing: '-.01em', fill: '#16284B' }}>ISO</text>
      <text x="90" y="112" textAnchor="middle" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 19, letterSpacing: '.02em', fill: '#C8102E' }}>27001</text>
      <text x="90" y="130" textAnchor="middle" style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 500, fontSize: 8, letterSpacing: '.2em', fill: '#5B6B86' }}>CERTIFIED</text>
    </svg>
  );
}

Object.assign(window, { CertHIPAA, CertHITRUST, CertSOC2, CertFDA, CertISO27001 });
