import { useState } from "react"; 
import { useCart } from "../context/CartContext";
import { useTranslation } from "react-i18next";
import * as S from "../styles/card.style";

export function ProductCard({ product }: { product: any }) {
  const { addToCart } = useCart();
  const { t } = useTranslation();
  // const translationPath = `catalog.product_${product.id}`;
  const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0] || { img: product.image });
const [isAnimated, setIsAnimated] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Зупиняє перехід за посиланням
    e.stopPropagation(); // Зупиняє спливання події
    addToCart({ ...product, selectedColor: selectedVariant.color, image: selectedVariant.img });
    
    // Включаем анимацию
    setIsAnimated(true);

    // Ровно через 1 секунду (1000 мс) выключаем её
    setTimeout(() => {
      setIsAnimated(false);
    }, 1000);
  };

  const handleColorClick = (e: React.MouseEvent, variant: any) => {
    e.preventDefault(); // Зупиняє перехід за посиланням
    e.stopPropagation(); // Зупиняє спливання події
    setSelectedVariant(variant);
  };

  return (
    // {/* Перетворюємо Wrapper на Link */}
    <S.Wrapper to={`/product/${product.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <S.ImageBox>
        <S.Image src={selectedVariant.img} alt={product.name} />
        
      </S.ImageBox>
      
      <S.Title>{product.name}</S.Title>
      <S.Description>{t(`catalog.products.${product.slug}.description`)}</S.Description>

      {product.variants && (
        <S.ColorVariants>
          {product.variants.map((variant: any, index: number) => (
            <S.ColorCircle
              key={index}
              bgColor={variant.color}
              isActive={selectedVariant.color === variant.color}
              onClick={(e) => handleColorClick(e, variant)}
              title={variant.colorName || ""}
            />
          ))}
        </S.ColorVariants>
      )}
      
      <S.Footer>
        <S.Price>{t(`catalog.products.${product.slug}.price`)}{t('catalog.currency') }</S.Price>
        <S.BuyButton onClick={handleAddToCart} isAnimated={isAnimated}>
          <S.ButtonText>{t('catalog.buy') }</S.ButtonText>
          <span style={{ marginLeft: '4px' }}>🛒</span> 
        </S.BuyButton>
      </S.Footer>
    </S.Wrapper>
  );
}