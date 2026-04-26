import * as S from "../styles/reviews.style";
import { useTranslation } from 'react-i18next';
export function Reviews() {
  const { t } = useTranslation();
  // const reviews = [
  //   { name: "Олександр", text: "Найкращий зволожувач для офісу. Працює тихо.", rating: 5 },
  //   { name: "Марія", text: "Вентилятор дуже рятує у дорозі. Якісний пластик.", rating: 5 },
  // ];
const reviews = t('reviews.items', { returnObjects: true }) as Array<{name: string, text: string, rating: number}>;
  return (
    <S.Section>
      <S.Container>
        <S.Title>
          <S.Divider />
          {t('reviews.title')}
        </S.Title>

        {/* <S.ReviewsGrid>
          {reviews.map((rev, i) => (
            <S.ReviewCard key={i}>
              <S.StarWrapper>
                {"★".repeat(rev.rating)}
              </S.StarWrapper>
              <S.QuoteText>"{rev.text}"</S.QuoteText>
              <S.Author>— {rev.name}</S.Author>
            </S.ReviewCard>
          ))}
        </S.ReviewsGrid> */}
        <S.ReviewsGrid>
        {Array.isArray(reviews) && reviews.map((review, index) => (
          <S.ReviewCard key={index}>
            <S.Author>{review.name}</S.Author>
            <S.QuoteText>"{review.text}"</S.QuoteText>
            <S.StarWrapper>{"★".repeat(review.rating)}</S.StarWrapper>
          </S.ReviewCard>
        ))}
      </S.ReviewsGrid>
      </S.Container>
    </S.Section>
  );
}