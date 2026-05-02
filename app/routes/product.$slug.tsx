import { useState, useMemo } from "react";
import { useParams } from "react-router";
import { useCart } from "../context/CartContext";
import products from "../data/products.json"; 
import * as S from "../styles/product.$slug."; 
import { useTranslation } from "react-i18next";

export default function ProductPage() {
  const { slug } = useParams();
  const { addToCart } = useCart();
  const [isAnimated, setIsAnimated] = useState(false);
  const { t } = useTranslation();

 

//  const product = products.find(p => p.slug === slug);
const product = useMemo(() => products.find(p => p.slug === slug), [slug]);

  // const [selectedVariant, setSelectedVariant] = useState(
  //   product?.variants?.[0] || { color: "", img: product?.image }
  // );
const translatedProduct = t(`catalog.products.${slug}`, { returnObjects: true }) as any;

// const benefits = product?.slug 
//   ? (t(`catalog.products.${product.slug}.benefits`, { returnObjects: true }) as string[])
//   : [];
const benefits = useMemo(() => {
    if (translatedProduct && typeof translatedProduct === 'object' && Array.isArray(translatedProduct.benefits)) {
      return translatedProduct.benefits;
    }
    return [];
  }, [translatedProduct]);

  // Стан для вибраного варіанту
  const [selectedVariant, setSelectedVariant] = useState(() => 
    product?.variants?.[0] || { color: "", img: product?.image }
  );

  // Якщо продукт не знайдено в базі даних JSON
  if (!product) {
    return <div className="text-center py-20 text-xl font-bold">Товар не знайдено</div>;
  }

  const handleAddToCart = () => {
    addToCart({ 
        ...product, 
        name: translatedProduct?.name || product.name, 
        selectedColor: selectedVariant.color, 
        image: selectedVariant.img 
    });
    setIsAnimated(true);
    setTimeout(() => setIsAnimated(false), 1000);
  };

  return (
    <S.PageWrapper>
      {/* 1. БЛОК ХИРО */}
      <S.HeroBanner src={product["image-all-colors"] || product.image}>
        
        <S.Container>
          <S.HeroContent>
          </S.HeroContent>
        </S.Container>
      </S.HeroBanner>

      {/* 2. БЛОК ПРОДУКТА (ВЫБОР И ПОКУПКА) */}
      <S.ProductMainSection>
        <S.Container>
          <S.MainGrid>
            <S.ImageBox>
              <img src={selectedVariant.img} alt={product.name} />
        
            </S.ImageBox>
            
            <S.InfoBox>
              <S.StatusTag available={true}>{t('product_details.status_available')}</S.StatusTag>
              <S.Title>{product.name}</S.Title>
              <S.Price>{translatedProduct?.price || ""} {t('catalog.currency')}</S.Price>
              
              <div>
                <p style={{marginBottom: '10px', fontWeight: 600}}>{t('product_details.choose_color')}:</p>
                <S.ColorGrid>
                  {product.variants.map((v, i) => (
                    <S.ColorCircle 
                      key={i} 
                      bgColor={v.color} 
                      isActive={selectedVariant.color === v.color}
                      onClick={() => setSelectedVariant(v)}
                    />
                  ))}
                </S.ColorGrid>
              </div>

              <S.BuyButton $isAnimated={isAnimated} onClick={handleAddToCart}>
  {isAnimated ? t('cart.added') : t('cart.add_to_cart')}
</S.BuyButton>
            </S.InfoBox>
          </S.MainGrid>
        </S.Container>
      </S.ProductMainSection>

      {/* 3. БЛОК ИНФОГРАФИКА */}
      <S.InfoGraphicSection>
        <S.Container>
          <S.InfoGraphicGrid>
            <img 
              src={product["image-description"]} 
              alt="Features" 
              style={{width: '100%', borderRadius: '20px'}} 
            />
            <div>
              <h2 style={{fontSize: '2rem', marginBottom: '30px'}}>{t('product_details.why_title')}</h2>
              <S.List>
                {Array.isArray(benefits) && benefits.map((benefit, index) => (
                  <S.ListItem key={index}>{benefit}</S.ListItem>
                ))}
              </S.List>
            </div>
          </S.InfoGraphicGrid>
        </S.Container>
      </S.InfoGraphicSection>

      {/* 4. БЛОК ВИДЕО */}
      <S.VideoSection>
        <S.Container>
          <h2 style={{textAlign: 'center', fontSize: '2rem', marginBottom: '40px'}}>
            {t('product_details.video_title')}
          </h2>
          <S.VideoWrapper>
            <iframe
              width="100%" height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </S.VideoWrapper>
        </S.Container>
      </S.VideoSection>
    </S.PageWrapper>
  );
}