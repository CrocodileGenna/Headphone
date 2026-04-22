import * as S from "../styles/reviews.style";

export function Reviews() {
  const reviews = [
    { name: "Олександр", text: "Найкращий зволожувач для офісу. Працює тихо.", rating: 5 },
    { name: "Марія", text: "Вентилятор дуже рятує у дорозі. Якісний пластик.", rating: 5 },
  ];

  return (
    <S.Section>
      <S.Container>
        <S.Title>
          <S.Divider />
          Відгуки клієнтів
        </S.Title>

        <S.ReviewsGrid>
          {reviews.map((rev, i) => (
            <S.ReviewCard key={i}>
              <S.StarWrapper>
                {"★".repeat(rev.rating)}
              </S.StarWrapper>
              <S.QuoteText>"{rev.text}"</S.QuoteText>
              <S.Author>— {rev.name}</S.Author>
            </S.ReviewCard>
          ))}
        </S.ReviewsGrid>
      </S.Container>
    </S.Section>
  );
}