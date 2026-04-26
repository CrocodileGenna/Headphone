import { useState } from "react";
import * as S from "../styles/contactsPage.style";
import { Container, SectionTitle } from "../styles/aboutPage.style"; // Используем общие стили заголовков
import { useTranslation } from 'react-i18next';
export default function ContactsPage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: "", email: "", message: "", agree: false });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.agree) {
      alert(`Дякуємо, ${formData.name}! Ми зв'яжемося з вами за адресою ${formData.email}`);
    } else {
      alert("Будь ласка, підтвердіть згоду на обробку даних");
    }
  };

  const socials = [
    { name: "Facebook", url: "#", icon: "FB" },
    { name: "YouTube", url: "#", icon: "YT" },
    { name: "Threads", url: "#", icon: "TH" },
    { name: "Instagram", url: "#", icon: "IG" },
    { name: "TikTok", url: "#", icon: "TT" },
  ];

  return (
    <S.ContactsWrapper>
      <Container>
        <SectionTitle>{t('contacts.title')}</SectionTitle>
        
        <S.ContactGrid>
          {/* 1. БЛОК С ФОРМОЙ */}
          <S.FormCard>
            <form onSubmit={handleSubmit}>
              <S.InputGroup>
                <label>{t('contacts.name_label')}</label>
                <input 
                  type="text" 
                  placeholder="Введіть ім'я" 
                  required 
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </S.InputGroup>

              <S.InputGroup>
                <label>Email</label>
                <input 
                  type="email" 
                  placeholder="example@mail.com" 
                  required 
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </S.InputGroup>

              <S.InputGroup>
                <label>{t('contacts.comments_label')}</label>
                <textarea 
                  placeholder="Ваше повідомлення..." 
                  rows={4} // Высота поля
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  style={{
                    padding: '12px 16px',
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px',
                    outline: 'none',
                    fontFamily: 'inherit',
                    resize: 'vertical' // Позволяет менять высоту, но не ширину
                  }}
                />
              </S.InputGroup>

              <S.CheckboxGroup>
                <input 
                  type="checkbox" 
                  id="agree" 
                  onChange={(e) => setFormData({...formData, agree: e.target.checked})}
                />
                <label htmlFor="agree">{t('contacts.consent')}</label>
              </S.CheckboxGroup>

              <button 
                type="submit" 
                style={{
                  width: '100%', padding: '15px', borderRadius: '12px', 
                  background: '#2563eb', color: '#fff', border: 'none', fontWeight: 700, cursor: 'pointer'
                }}
              >
                {t('contacts.send_button')}
              </button>
            </form>
          </S.FormCard>

          {/* 2. БЛОК СОЦСЕТЕЙ */}
          <S.SocialSection>
            <h3 style={{marginBottom: '10px'}}>{t('contacts.socials_title')}</h3>
            {socials.map((soc) => (
              <S.SocialLink key={soc.name} href={soc.url} target="_blank">
                <span>{soc.icon}</span>
                {soc.name}
              </S.SocialLink>
            ))}

            {/* 3. ДОПОЛНИТЕЛЬНЫЙ БЛОК (На усмотрение) */}
            <S.InfoBox>
              <h4>Графік роботи</h4>
              <p>Пн - Пт: 09:00 — 19:00</p>
              <p>Сб - Нд: 10:00 — 17:00</p>
              <hr style={{margin: '15px 0', border: '0.5px solid #cbd5e1'}} />
              <h4>Адреса</h4>
              <p>м. Київ, вул. Центральна, 12, оф. 404</p>
            </S.InfoBox>
          </S.SocialSection>
        </S.ContactGrid>
      </Container>
    </S.ContactsWrapper>
  );
}