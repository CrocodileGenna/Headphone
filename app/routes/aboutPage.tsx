// import { ProductOverview } from "../components/ProductOverview";
// import { Reviews } from "../components/Reviews";

// export default function ReviewsPage() {
//   return (
//     <main className="py-16">
//       <div className="max-w-6xl mx-auto px-6 mb-20 text-center">
//         <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Детальні огляди та відгуки</h1>
//         <p className="text-slate-600 max-w-2xl mx-auto">
//           Ми тестуємо кожен гаджет, щоб ви були впевнені у своєму виборі. Дивіться відео та читайте думки реальних користувачів.
//         </p>
//       </div>

//       <ProductOverview />
      
//       <div className="bg-slate-50">
//         <Reviews />
//       </div>
//     </main>
//   );
// }
import * as S from "../styles/aboutPage.style";
import { Reviews } from "../components/Reviews"; // Используем ваш готовый компонент

// Данные (в будущем можно вынести в JSON)
const awards = [
  "/photos/award1.jpg",
  "/photos/award2.jpg",
  "/photos/award3.jpg"
];

const partners = [
  { name: "Partner 1", logo: "/logos/partner1.svg" },
  { name: "Partner 2", logo: "/logos/partner2.svg" },
  { name: "Partner 3", logo: "/logos/partner3.svg" },
  { name: "Partner 4", logo: "/logos/partner4.svg" },
];

export default function AboutPage() {
  return (
    <S.AboutWrapper>
      {/* 1. Заголовок и описание */}
      <S.Section>
        <S.Container>
          <S.SectionTitle>Про нас</S.SectionTitle>
          <S.IntroText>
            Ми — команда професіоналів, що прагне створювати інноваційні рішення для вашого комфорту. 
            Завдяки багаторічному досвіду ми втілюємо у життя найсміливіші ідеї у сфері портативних девайсів. 
            Наша місія — зробити сучасні технології доступними та зручними для кожного клієнта.
          </S.IntroText>
        </S.Container>
      </S.Section>

      {/* 2. Наші досягнення (Грамоти) */}
      <S.Section>
        <S.Container>
          <S.SectionTitle>Наші досягнення</S.SectionTitle>
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
          <S.SectionTitle>Нам довіряють</S.SectionTitle>
          <S.PartnersFlex>
            {partners.map((partner, i) => (
              <img key={i} src={partner.logo} alt={partner.name} title={partner.name} />
            ))}
          </S.PartnersFlex>
        </S.Container>
      </S.Section>
      <S.FullWidthImageWrapper>
        <S.AdaptiveImage 
          src="/photos/about-bg.jpg" 
          alt="Про нас додаткове фото" 
        />
      </S.FullWidthImageWrapper>

      {/* 4. Слайдер з відгуками */}
      <S.Section>
        <Reviews /> 
      </S.Section>
    </S.AboutWrapper>
  );
}