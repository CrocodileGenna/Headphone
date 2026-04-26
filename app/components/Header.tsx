import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";
import { Cart } from "./Cart";
import * as Icons from "../icons";
import * as S from "../styles/header.style"; 

import { LanguageSelector } from "./LanguageSelector";

import { useTranslation } from 'react-i18next';

// function LanguagePicker() {
//   const { i18n } = useTranslation();

//   const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     i18n.changeLanguage(e.target.value);
//   };

//   return (
//     <select value={i18n.language} onChange={changeLanguage}>
//       <option value="ua">UA</option>
//       <option value="en">EN</option>
//       <option value="pl">PL</option>
//       <option value="de">DE</option>
//       <option value="fr">FR</option>
//     </select>
//   );
// }

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems } = useCart();
  const { t } = useTranslation();
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);


  return (
    <>
      <S.StyledHeader>
        <S.Container>
          {/* <S.Logo to="/" onClick={closeMenu}>
            Pocket<span>.Fresh</span>
          </S.Logo> */}
          <S.Logo to="/" onClick={closeMenu}>
  {/* <S.LogoImage src="/logo.png" alt="Pocket Fresh Logo" /> */}

  <S.LogoTextGroup>
    <span className="top">chillax</span>
    <span className="bottom">cooling</span>
    
    <S.CommunityTag>2.0</S.CommunityTag>
  </S.LogoTextGroup>
</S.Logo>

          <S.Nav>
             {/* <S.NavLink to="/">Головна</S.NavLink>
            <S.NavLink to="/catalog">Каталог</S.NavLink>
            <S.NavLink to="/about">Про нас</S.NavLink>
            <S.NavLink to="/contacts">Контакти</S.NavLink> */}
            <S.NavLink to="/">{t('nav.home')}</S.NavLink>
            <S.NavLink to="/catalog">{t('nav.catalog')}</S.NavLink>
            <S.NavLink to="/about">{t('nav.about')}</S.NavLink>
            <S.NavLink to="/contacts">{t('nav.contacts')}</S.NavLink>
          </S.Nav>
{/* <LanguageSelector/> */}
          <S.Actions>
            <LanguageSelector />
            <S.CartBtn onClick={() => setIsCartOpen(true)}>
              🛒 {cartItems.length > 0 && <S.Badge>{cartItems.length}</S.Badge>}
            </S.CartBtn>
            <S.BurgerBtn onClick={toggleMenu}>
              <S.BurgerLine isOpen={isMenuOpen} />
              <S.BurgerLine isOpen={isMenuOpen} />
              <S.BurgerLine isOpen={isMenuOpen} />
            </S.BurgerBtn>
          </S.Actions>
        </S.Container>
      </S.StyledHeader>

      <AnimatePresence>
        {isMenuOpen && (
          <S.MobileMenuWrapper
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <S.MobileBackdrop onClick={closeMenu} />
            <S.MobilePanel
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 280, damping: 28 }}
            >
             <S.MobileCloseBtn onClick={closeMenu}>
          &times; 
        </S.MobileCloseBtn>

              <S.MobileHeader>
  <S.MobileLogoWrapper to="/" onClick={closeMenu}>
    <S.MobileLogoO>
      <img src="/logo.png" alt="Background Logo" />
    </S.MobileLogoO>

    <S.TextContent>
      <S.MainTitleRow>
        <S.MobileLogoPocke>chillax</S.MobileLogoPocke>
        <S.MobileLogoFresh>cooling</S.MobileLogoFresh>
      </S.MainTitleRow>
      <S.MobileSubtitle>2.0</S.MobileSubtitle>
    </S.TextContent>
  </S.MobileLogoWrapper>
</S.MobileHeader>

              <S.MobileNav>
                {/* <S.MobileLink to="/" onClick={closeMenu}>Головна</S.MobileLink>
                <S.MobileLink to="/catalog" onClick={closeMenu}>Каталог</S.MobileLink>
                <S.MobileLink to="/about" onClick={closeMenu}>Про нас</S.MobileLink>
                <S.MobileLink to="/contacts" onClick={closeMenu}>Контакти</S.MobileLink> */}
                <S.MobileLink to="/" onClick={closeMenu}>{t('nav.home')}</S.MobileLink>
                <S.MobileLink to="/catalog" onClick={closeMenu}>{t('nav.catalog')}</S.MobileLink>
                <S.MobileLink to="/about" onClick={closeMenu}>{t('nav.about')}</S.MobileLink>
                <S.MobileLink to="/contacts" onClick={closeMenu}>{t('nav.contacts')}</S.MobileLink>
              </S.MobileNav>
              <S.MobileSocials>
  <S.SocialIcon href="https://instagram.com" target="_blank" rel="noreferrer">
    <img src={Icons.insta} alt="Instagram" />
  </S.SocialIcon>
  <S.SocialIcon href="https://facebook.com" target="_blank" rel="noreferrer">
    <img src={Icons.facebook} alt="facebook" />
  </S.SocialIcon>
  <S.SocialIcon href="https://tiktok.com" target="_blank" rel="noreferrer">
    <img src={Icons.tiktok} alt="tiktok" />
  </S.SocialIcon>
  <S.SocialIcon href="https://youtube.com" target="_blank" rel="noreferrer">
    <img src={Icons.youtube} alt="youtube" />
  </S.SocialIcon>
</S.MobileSocials>
            </S.MobilePanel>
          </S.MobileMenuWrapper>
        )}
      </AnimatePresence>
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}