
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import * as S from "../styles/languageSelector.style"; 
import uaFlag from '../icons/flags/ua.png';
import usFlag from '../icons/flags/us.png';
import plFlag from '../icons/flags/pl.png';
import deFlag from '../icons/flags/de.png';
import csFlag from '../icons/flags/cs.png';
import hiFlag from '../icons/flags/hi.png';

export function LanguageSelector() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'ua', label: 'UA', flag: uaFlag },
    { code: 'us', label: 'US', flag: usFlag },
    { code: 'pl', label: 'PL', flag: plFlag },
    { code: 'de', label: 'DE', flag: deFlag },
    { code: 'cs', label: 'CS', flag: csFlag },
    { code: 'hi', label: 'HI', flag: hiFlag },
  ];

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

  const handleSelect = (code: string) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <S.CustomSelectContainer>
      <S.SelectedLanguage onClick={() => setIsOpen(!isOpen)}>
        <S.FlagImg src={currentLang.flag} alt={currentLang.label} />
        <span>{currentLang.label}</span>
      </S.SelectedLanguage>

      {isOpen && (
        <S.Dropdown>
          {languages.map((lang) => (
            <S.Option key={lang.code} onClick={() => handleSelect(lang.code)}>
              <S.FlagImg src={lang.flag} alt={lang.label} />
              <span>{lang.label}</span>
            </S.Option>
          ))}
        </S.Dropdown>
      )}
    </S.CustomSelectContainer>
  );
}

