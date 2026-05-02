
import * as S from "../styles/aboutPage.style";
import { Reviews } from "../components/Reviews"; // Используем ваш готовый компонент
import { useTranslation } from 'react-i18next';
// Данные (в будущем можно вынести в JSON)
const awards = [
  "photos/awards/award1.png",
  "photos/awards/award2.png"
  // "/photos/award3.jpg"
];

const partners = [
  { name: "Partner 1", logo: "photos/partners/aliexpress.png.png" },
  { name: "Partner 2", logo: "photos/partners/mazon.png.png" },
  { name: "Partner 3", logo: "photos/partners/temu.png.png" }
];

export default function AboutPage() {
  const { t } = useTranslation();
  return (
    <S.AboutWrapper>
      {/* 1. Заголовок и описание */}
      <S.Section>
        <S.Container>
          <S.SectionTitle>{t('about.title')}</S.SectionTitle>
          <S.IntroText>
            {t('about.intro_text')}
          </S.IntroText>
        </S.Container>
      </S.Section>

      {/* 2. Наші досягнення (Грамоти) */}
      <S.Section>
        <S.Container>
          <S.SectionTitle>{t('about.achievements_title')}</S.SectionTitle>
          <S.AwardsGrid>
            {awards.map((src, i) => (
              <img key={i} src={src} alt={`Грамота ${i + 1}`} />
            ))}
          </S.AwardsGrid>
        </S.Container>
      </S.Section>

      {/* 3. Партнери */}
      <S.Section>
        <S.Container>
          <S.SectionTitle>{t('about.trust_title')}</S.SectionTitle>
          <S.PartnersFlex>
            {partners.map((partner, i) => (
              <img key={i} src={partner.logo} alt={partner.name} title={partner.name} />
            ))}
          </S.PartnersFlex>
        </S.Container>
      </S.Section>
      <S.FullWidthImageWrapper>
        <S.AdaptiveImage 
          src="photos/about-bg.jpg" 
          alt="About us additional photo" 
        />
      </S.FullWidthImageWrapper>

      {/* 4. Слайдер з відгуками */}
      <S.Section>
        <Reviews /> 
      </S.Section>
    </S.AboutWrapper>
  );
}