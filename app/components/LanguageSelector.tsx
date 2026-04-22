// LanguageSelector.tsx
import { useState } from 'react';
import * as S from '../styles/header.style'; // Додайте стилі для випадаючого списку

const languages = [
  { code: 'uk', name: 'Українська' },
  { code: 'en', name: 'English' },
  { code: 'pl', name: 'Polski' },
  { code: 'de', name: 'Deutsch' }
];

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('uk');

  const handleLangChange = (langCode: string) => {
    setCurrentLang(langCode);
    setIsOpen(false);
    // Тут будемо викликати подію перекладу
    window.dispatchEvent(new CustomEvent('changeLanguage', { detail: langCode }));
  };

  return (
    <div style={{ position: 'relative' }}>
      <button onClick={() => setIsOpen(!isOpen)}>
        🌐 {languages.find(l => l.code === currentLang)?.name}
      </button>
      {isOpen && (
        <ul style={{ position: 'absolute', background: '#fff', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
          {languages.map(lang => (
            <li key={lang.code} onClick={() => handleLangChange(lang.code)}>
              {lang.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}