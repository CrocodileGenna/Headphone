import * as S from "../styles/info.style";

export function InfoSection() {
  const benefits = [
    { title: "Автономність", desc: "До 12 годин роботи від одного заряду.", icon: "🔋" },
    { title: "Тиха робота", desc: "Рівень шуму нижче 20 дБ.", icon: "🤫" },
    { title: "Компактність", desc: "Легко поміщається у вашу сумку.", icon: "🎒" },
  ];

  return (
    <S.Section>
      <S.Container>
        <S.Content>
          <S.Title>Свіжість та комфорт у будь-який час</S.Title>
          <S.Text>
            Ми створюємо портативні рішення для вашого мікроклімату. Наші гаджети допомагають підтримувати вологість повітря та прохолоду, де б ви не були.
          </S.Text>
        </S.Content>

        <S.BenefitsGrid>
          {benefits.map((item, index) => (
            <S.BenefitCard key={index}>
              <S.IconWrapper>{item.icon}</S.IconWrapper>
              <div>
                <S.BenefitTitle>{item.title}</S.BenefitTitle>
                <S.BenefitDesc>{item.desc}</S.BenefitDesc>
              </div>
            </S.BenefitCard>
          ))}
        </S.BenefitsGrid>
      </S.Container>
    </S.Section>
  );
}