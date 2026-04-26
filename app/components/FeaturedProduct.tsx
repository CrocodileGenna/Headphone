import { ProductCard } from "./ProductCard";
import * as S from "../styles/featuredProduct.style";

interface FeaturedProductProps {
  product: any; // Замените на ваш интерфейс продукта, если он есть
  title?: string;
}

export function FeaturedProduct({ product, title = "Топ продаж" }: FeaturedProductProps) {
  if (!product) return null;

  return (
    <S.FeaturedSection>
      {/* <S.SectionTitle>{title}</S.SectionTitle> */}
      <S.CardWrapper>
        <ProductCard product={product} />
      </S.CardWrapper>
    </S.FeaturedSection>
  );
}