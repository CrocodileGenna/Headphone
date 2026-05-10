import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useTranslation } from 'react-i18next';
import * as S from '../styles/checkout.style'; // Создадим этот файл ниже

export default function Checkout() {
  const { cartItems, totalPrice } = useCart();
  const { t } = useTranslation();

  // Состояние формы с инициализацией из LocalStorage
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem('checkout_form');
    return saved ? JSON.parse(saved) : {
      fullName: '',
      email: '',
      address: '',
      postOffice: '',
      phone: '',
      consent: false
    };
  });

  // Сохранение данных при каждом изменении
  useEffect(() => {
    localStorage.setItem('checkout_form', JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) return alert(t('checkout.error_consent'));
    console.log("Order Data:", { ...formData, items: cartItems, total: totalPrice });
    alert(t('checkout.success'));
  };

  return (
    <S.PageContainer>
      <S.Title>{t('checkout.title')}</S.Title>
      {/* ПРЕВЬЮ ЗАКАЗА */}
        <S.Summary>
          <S.SectionTitle>{t('checkout.your_order')}</S.SectionTitle>
          <S.OrderList>
            {cartItems.map((item, idx) => (
              <S.OrderItem key={idx}>
                {/* <img src={item.image.startsWith('/') ? item.image : `/${item.image}`} alt={item.name} /> */}
                <img 
                  src={item.image.startsWith('/') ? item.image : `/${item.image}`} 
                  alt={item.name} 
                />
                <div>
                  <p>{item.name}</p>
                  <span>{item.price} {t('catalog.currency')}</span>
                </div>
              </S.OrderItem>
            ))}
          </S.OrderList>
          <S.TotalBlock>
            <span>{t('cart.total')}:</span>
            <strong>{totalPrice} {t('catalog.currency')}</strong>
          </S.TotalBlock>
        </S.Summary>
      
      <S.Grid>
        {/* ФОРМА ДАННЫХ */}
        <S.Form onSubmit={handleSubmit}>
          <S.SectionTitle>{t('checkout.contact_info')}</S.SectionTitle>
          <S.Input name="fullName" placeholder={t('checkout.placeholder_name')} value={formData.fullName} onChange={handleChange} required />
          <S.Input name="email" type="email" placeholder={t('checkout.placeholder_email')} value={formData.email} onChange={handleChange} required />
          <S.Input name="phone" type="tel" placeholder={t('checkout.placeholder_phone')} value={formData.phone} onChange={handleChange} required />
          
          <S.SectionTitle>{t('checkout.shipping_info')}</S.SectionTitle>
          <S.Input name="address" placeholder={t('checkout.placeholder_address')} value={formData.address} onChange={handleChange} required />
          <S.Input name="postOffice" placeholder={t('checkout.placeholder_post')} value={formData.postOffice} onChange={handleChange} required />

          <S.CheckboxLabel>
            <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} />
            <span>{t('checkout.consent_text')}</span>
          </S.CheckboxLabel>

          <S.SubmitBtn type="submit">{t('checkout.confirm_order')}</S.SubmitBtn>
        </S.Form>

        
      </S.Grid>
    </S.PageContainer>
  );
}