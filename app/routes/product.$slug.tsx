// import { useState } from "react";
// import { useParams } from "react-router";
// import { useCart } from "../context/CartContext";
// // import { useTranslation } from 'react-i18next';
// import products from "../data/products.json"; 
// import * as S from "../styles/product.$slug"; 

// export default function ProductPage() {
//   const { slug } = useParams();
//   // const { t } = useTranslation();
//   const { addToCart } = useCart();
// const [isAnimated, setIsAnimated] = useState(false);
//   const product = products.find(p => p.slug === slug);

//   const [selectedVariant, setSelectedVariant] = useState(
//     product?.variants?.[0] || { color: "", img: product?.image }
//   );

//   if (!product) {
//     return <div className="text-center py-20 text-xl font-bold">Товар не знайдено</div>;
//   }

//   // const translationPath = `catalog.product_${product.id}`;

//   const handleAddToCart = () => {
//     addToCart({ 
//       ...product, 
//       selectedColor: selectedVariant.color, 
//       image: selectedVariant.img 
//     });
//     // Включаем анимацию
//     setIsAnimated(true);

//     // Ровно через 1 секунду (1000 мс) выключаем её
//     setTimeout(() => {
//       setIsAnimated(false);
//     }, 1000);
//   };
//   return (
//     <S.PageWrapper>
//       <S.HeroSection>
//         <S.Container>
//           <S.HeroGrid>
//             <S.ImageBox>
//               <S.MainImage src={selectedVariant.img} alt={product.name}/>
//             </S.ImageBox>
            
//             <S.InfoBox>
//               {/* <S.Badge>{t('common.new')}</S.Badge>
//               <S.Title>{t(`${translationPath}.name`)}</S.Title>
//               <S.Price>{product.price} {t('common.currency')}</S.Price> */}
//               {/* <S.Badge>Новинка</S.Badge> */}
//               <S.Title>{product.name}</S.Title>
//               <S.Price>{product.price}</S.Price>

//               <S.Description>
//                 {/* {t(`${translationPath}.description`)} */}
//                 {product.description}
//               </S.Description>

//               <S.VariantSelector>
//                 <S.SectionLabel>Оберіть колір:</S.SectionLabel>
//                 <S.ColorGrid>
//                   {product.variants.map((v, index) => (
//                     <S.ColorCircle 
//                       key={index} 
//                       bgColor={v.color} 
//                       isActive={selectedVariant.color === v.color}
//                       onClick={() => setSelectedVariant(v)}
//                       title={v.color}
//                     />
//                   ))}
//                 </S.ColorGrid>
//               </S.VariantSelector>

//               {/* <S.BuyButton>{t('common.buy')}</S.BuyButton> */}
//               <S.BuyButton onClick={handleAddToCart} isAnimated={isAnimated}>Купити зараз</S.BuyButton>
//             </S.InfoBox>
//           </S.HeroGrid>
//         </S.Container>
//       </S.HeroSection>

//       <S.DetailsSection>
//         <S.Container>
//           <S.DetailsGrid>
//             <S.DetailsText>
//               <S.SecondaryTitle>Чому варто обрати {product.name}?</S.SecondaryTitle>
//               <S.FullDescription>
//                 У кожній деталі нашого пристрою закладена турбота про ваш комфорт. 
//                 Використовуючи сучасні технології, ми досягли ідеального балансу 
//                 між потужністю та енергоефективністю.
//               </S.FullDescription>
//             </S.DetailsText>
//             <S.DetailsImage src={product.image} alt="Product detail" />
//           </S.DetailsGrid>
//         </S.Container>
//       </S.DetailsSection>


//       <S.VideoSection>
//         <S.Container>
//           <S.SecondaryTitle style={{ textAlign: 'center', marginBottom: '2rem' }}>
//             Відеоогляд та розпакування
//           </S.SecondaryTitle>
//           <S.VideoWrapper>
//             <iframe
//               width="100%"
//               height="100%"
//               src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Здесь будет ссылка на видео
//               title="YouTube video player"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//           </S.VideoWrapper>
//         </S.Container>
//       </S.VideoSection>
//     </S.PageWrapper>
//   );
// }

import { useState } from "react";
import { useParams } from "react-router";
import { useCart } from "../context/CartContext";
import products from "../data/products.json"; 
import * as S from "../styles/product.$slug."; 

export default function ProductPage() {
  const { slug } = useParams();
  const { addToCart } = useCart();
  const [isAnimated, setIsAnimated] = useState(false);

  const product = products.find(p => p.slug === slug);

  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants?.[0] || { color: "", img: product?.image }
  );

  if (!product) {
    return <div className="text-center py-20 text-xl font-bold">Товар не знайдено</div>;
  }

  const handleAddToCart = () => {
    addToCart({ ...product, selectedColor: selectedVariant.color, image: selectedVariant.img });
    setIsAnimated(true);
    setTimeout(() => setIsAnimated(false), 1000);
  };

  return (
    <S.PageWrapper>
      {/* 1. БЛОК ХИРО */}
      <S.HeroBanner src={product["image-all-colors"] || product.image}>
        
        <S.Container>
          <S.HeroContent>
            {/* <h1>{product.name}</h1>
            <p>
              Відкрийте для себе новий уровень комфорту з нашою преміальною серією. 
              Ідеальне поєднання технологій та мінімалістичного дизайну для вашого щоденного життя.
            </p> */}
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
              <S.StatusTag available={true}>В наявності</S.StatusTag>
              <S.Title>{product.name}</S.Title>
              <S.Price>{product.price} ₴</S.Price>
              
              <div>
                <p style={{marginBottom: '10px', fontWeight: 600}}>Оберіть колір:</p>
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
                {isAnimated ? "Додано ✓" : "Додати в кошик"}
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
              <h2 style={{fontSize: '2rem', marginBottom: '30px'}}>Чому цей продукт?</h2>
              <S.List>
                <S.ListItem>Енергоефективність нового покоління для тривалої роботи.</S.ListItem>
                <S.ListItem>Екологічні матеріали, приємні на дотик та безпечні для здоров'я.</S.ListItem>
                <S.ListItem>Компактний розмір, що дозволяє брати пристрій з собою куди завгодно.</S.ListItem>
                <S.ListItem>Інтуїтивне керування однією кнопкою без зайвих налаштувань.</S.ListItem>
              </S.List>
            </div>
          </S.InfoGraphicGrid>
        </S.Container>
      </S.InfoGraphicSection>

      {/* 4. БЛОК ВИДЕО */}
      <S.VideoSection>
        <S.Container>
          <h2 style={{textAlign: 'center', fontSize: '2rem', marginBottom: '40px'}}>
            Відеоогляд та можливості
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