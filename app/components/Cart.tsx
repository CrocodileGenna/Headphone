import { AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";
import * as S from "../styles/cart.style";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

export function Cart({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const { cartItems, removeFromCart, totalPrice, clearCart } = useCart();
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleCheckout = () => {
    if (cartItems.length > 0) {
      onClose(); // Закрываем корзину перед переходом
      navigate('/checkout'); // Переходим на страницу заказа
    }
  };

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const panelVariants = {
    initial: isMobile ? { x: "100%" } : { opacity: 0, scale: 0.9, x: "-50%", y: "-45%" },
    animate: isMobile ? { x: 0 } : { opacity: 1, scale: 1, x: "-50%", y: "-50%" },
    exit: isMobile ? { x: "100%" } : { opacity: 0, scale: 0.9, x: "-50%", y: "-45%" },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <S.Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <S.CartPanel
            variants={panelVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <S.Header>
              <S.Title>{t('cart.title') || 'Кошик'} ({cartItems.length})</S.Title>
              
              <S.CloseBtn onClick={onClose}>&times;</S.CloseBtn>
            </S.Header>

            <S.Content>
              {cartItems.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '40px', color: '#94a3b8' }}>
                  {t('cart.empty') || 'Кошик порожній'}
                </div>
              ) : (
                cartItems.map((item, index) => (
                  <S.Item key={`${item.id}-${index}`}>
                    {/* <S.ItemImg src={item.image} alt={item.name} /> */}
                    <S.ItemImg 
                       src={item.image.startsWith('http') ? item.image : (import.meta.env.BASE_URL || '/') + (item.image.startsWith('/') ? item.image.slice(1) : item.image)} 
                       alt={item.name} 
                     />
                    <S.ItemInfo>
                      <S.ItemName>{item.name}</S.ItemName>
                      <S.ItemPrice>{item.price} {t('catalog.currency')}</S.ItemPrice>
                    </S.ItemInfo>
                    <S.RemoveBtn onClick={() => removeFromCart(index)}>✕</S.RemoveBtn>
                  </S.Item>
                ))
              )}
            </S.Content>

            {/* <S.Footer>
              <S.TotalRow>
                <span>{t('cart.total') || 'Всього к оплаті'}:</span>
                <strong style={{ fontSize: '1.2rem' }}>{totalPrice} ₴</strong>
              </S.TotalRow>
              <S.CheckoutBtn 
                disabled={cartItems.length === 0}
                onClick={() => alert(t('cart.order_success'))}
              >
                {t('cart.checkout') || 'Оформити замовлення'}
              </S.CheckoutBtn>
            </S.Footer> */}
            <S.Footer>
  <S.TotalRow>
    <span>{t('cart.total')}:</span>
    {/* Замінено ₴ на динамічну валюту з i18n */}
    <strong style={{ fontSize: '1.2rem' }}>{totalPrice} {t('catalog.currency')}</strong>
  </S.TotalRow>
  <S.CheckoutBtn 
    disabled={cartItems.length === 0}
    onClick={handleCheckout}
  >
    {t('cart.checkout')}
  </S.CheckoutBtn>
  {cartItems.length > 0 && (
    <S.ClearCartBtn onClick={clearCart}>
      {t('cart.clear_all') || 'Очистити кошик'}
    </S.ClearCartBtn>
    )}
</S.Footer>
          </S.CartPanel>
        </>
      )}
    </AnimatePresence>
  );
}