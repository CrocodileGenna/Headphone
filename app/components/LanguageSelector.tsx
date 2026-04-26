// // import { useTranslation } from 'react-i18next';
// // import styled from '@emotion/styled';

// // export function LanguageSelector() {
// //   const { i18n } = useTranslation();

// //   const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
// //     i18n.changeLanguage(e.target.value);
// //   };
// // const flags: Record<string, string> = {
// //     ua: "🇺🇦",
// //     en: "🇺🇸",
// //     pl: "🇵🇱",
// //     de: "🇩🇪",
// //     fr: "🇫🇷"
// //   };
// //   return (
// //     <SelectWrapper style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
// //       {/* Відображаємо прапор поточної обраної мови поруч із селектором */}
// //       <span style={{ fontSize: '1.2rem' }}>
// //         {flags[i18n.language] || flags['ua']}
// //       </span>
      
// //       <select 
// //         value={i18n.language} 
// //         onChange={changeLanguage}
// //         style={{
// //           background: 'transparent',
// //           border: '1px solid #ccc',
// //           borderRadius: '4px',
// //           cursor: 'pointer'
// //         }}
// //       >
// //         <option value="ua">UA</option>
// //         <option value="en">EN</option>
// //         <option value="pl">PL</option>
// //         <option value="de">DE</option>
// //         <option value="fr">FR</option>
// //       </select>
// //     </SelectWrapper>
// //   );
// // }

// // const SelectWrapper = styled.div`
// //   select {
// //     background: transparent;
// //     border: 1px solid #ccc;
// //     border-radius: 4px;
// //     padding: 2px 5px;
// //     cursor: pointer;
// //     font-size: 0.9rem;
// //   }
// // `;

// import { useTranslation } from 'react-i18next';
// import styled from '@emotion/styled';
// // import flagUA from '../icons/flags/ua.svg';
// // import flagEN from '../icons/flags/en.svg';
// export function LanguageSelector() {
//   const { i18n } = useTranslation();

//   const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     i18n.changeLanguage(e.target.value);
//   };

//   // Словник для відображення прапорів та назв
//   const languages = [
//     { code: 'ua', label: 'UA', flag: '🇺🇦' },
//     { code: 'en', label: 'EN', flag: '🇺🇸' },
//     { code: 'pl', label: 'PL', flag: '🇵🇱' },
//     { code: 'de', label: 'DE', flag: '🇩🇪' },
//     { code: 'fr', label: 'FR', flag: '🇫🇷' },
//   ];

//   return (
//     <SelectWrapper>
//       <select 
//         value={i18n.language} 
//         onChange={changeLanguage}
//       >
//         {languages.map((lang) => (
//           <option key={lang.code} value={lang.code}>
//             {lang.flag} {lang.label}
//           </option>
//         ))}
//       </select>
//     </SelectWrapper>
//   );
// }

// const SelectWrapper = styled.div`
//   display: flex;
//   align-items: center;

//   select {
//     background: rgba(255, 255, 255, 0.1); /* Напівпрозорий фон */
//     border: 1px solid rgba(255, 255, 255, 0.2);
//     border-radius: 8px;
//     padding: 5px 10px;
//     cursor: pointer;
//     font-size: 0.9rem;
//     color: inherit; /* Бере колір тексту від бацьківського елемента (білий у хедері) */
//     outline: none;
//     transition: all 0.2s ease;

//     &:hover {
//       background: rgba(255, 255, 255, 0.2);
//       border-color: #2563eb;
//     }

//     /* Стилізація випадаючого списку (працює частково в деяких браузерах) */
//     option {
//       background: #1a1a1a; /* Темний фон для списку */
//       color: #fff;
//       padding: 10px;
//     }
//   }
// `;
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { useState } from 'react';

// Приклад імпорту іконок (замініть шляхи на ваші реальні файли)
// import flagUA from '../icons/flags/ua.svg';
// import flagEN from '../icons/flags/en.svg';
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
    <CustomSelectContainer>
      <SelectedLanguage onClick={() => setIsOpen(!isOpen)}>
        <FlagImg src={currentLang.flag} alt={currentLang.label} />
        <span>{currentLang.label}</span>
      </SelectedLanguage>

      {isOpen && (
        <Dropdown>
          {languages.map((lang) => (
            <Option key={lang.code} onClick={() => handleSelect(lang.code)}>
              <FlagImg src={lang.flag} alt={lang.label} />
              <span>{lang.label}</span>
            </Option>
          ))}
        </Dropdown>
      )}
    </CustomSelectContainer>
  );
}

const CustomSelectContainer = styled.div`
  position: relative;
  cursor: pointer;
  user-select: none;
`;

const SelectedLanguage = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  transition: all 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0,0,0,0.5);
  z-index: 100;
  min-width: 100px;
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 15px;
  transition: background 0.2s;

  &:hover {
    background: #2563eb;
  }
`;

const FlagImg = styled.img`
  width: 20px;
  height: 15px;
  object-fit: cover;
  border-radius: 2px;
`;