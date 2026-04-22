// import * as S from "../styles/hero.style";
// import { useTranslation } from 'react-i18next';

// export function Hero() {
//   const { t } = useTranslation();
//   return (
//     // <S.HeroSection>
//     //   <S.Background />
//     //   <S.Wrapper>
//     //     <S.Content>
//     //       <S.Badge>Новинка 2026</S.Badge>
//     //       <S.Title>
//     //         Твій особистий <span>мікроклімат</span> у кишені
//     //         {/* {t('hero_title')} */}
//     //       </S.Title>
//     //       <S.Description>
//     //         Портативні зволожувачі та компактні вентилятори для вашого комфорту вдома, в офісі чи в дорозі.
//     //       </S.Description>
//     //       <S.Button>Переглянути каталог</S.Button>
//     //     </S.Content>
        
//     //     <S.ImageBox>
//     //       <S.Placeholder>
//     //         <S.Image 
//     //   src='public/photos/hero-photo.png'
//     //   alt="Pocket Fresh Gadget" 
//     // />
//     //       </S.Placeholder>
//     //     </S.ImageBox>
//     //   </S.Wrapper>
//     // </S.HeroSection>

//     <S.HeroSection>
//       {/* Картинка теперь самостоятельный фоновый элемент */}
//       <S.HeroImage 
//         src='/photos/herophoto.png' 
//         alt="Background" 
//       />
//       {/* Слой с затемнением и градиентом */}
//       <S.Overlay />
      
//       <S.Wrapper>
//         <S.Content>
//           <S.Badge>Новинка 2026</S.Badge>
//           <S.Title>
//             Твій особистий <span>мікроклімат</span> у кишені
//           </S.Title>
//           <S.Description>
//             Портативні зволожувачі та компактні вентилятори для вашого комфорту вдома, в офісі чи в дорозі.
//           </S.Description>
//           <S.Button>Переглянути каталог</S.Button>
//         </S.Content>
//       </S.Wrapper>
//     </S.HeroSection>
//   );
// }

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import products from '../data/products.json'; // Путь к вашему json
import * as S from "../styles/hero.style";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export function Hero() {
  const allowedProducts = ["NanoBreeze Pocket", "FrostyHand V2", "CloudHumid Mini"];
  const sliderProducts = products.filter(product => 
    allowedProducts.includes(product.name)
  );
  return (
    <S.HeroSection>
       <Swiper
    modules={[Autoplay, Pagination]}
    speed={1500}
    autoplay={{ 
      delay: 5000, 
      disableOnInteraction: false 
    }}
    pagination={{ 
      clickable: true,
      renderBullet: (index, className) => {
        return `<span class="${className}"><span class="progress"></span></span>`;
      }
    }}
    loop={true}
    style={{ width: '100%', height: '100%' }}
  >
     {sliderProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <S.SlideContent>
              <S.BackgroundImage 
                src={product["image-hero"]} 
                alt={product.name} 
              />
              <S.Overlay />
              
              <S.Wrapper>
                <S.TextContent>
                  {(product.name === "CloudHumid Mini") && (
            <S.Badge>Новинка</S.Badge>
          )}
                  <S.Title>
                    {product.name}
                  </S.Title>
                  <S.Description>
                    {product.description}
                  </S.Description>
                  
                </S.TextContent>
                <S.Button to={`/product/${product.slug}`}>
                    Перейти до продукту
                  </S.Button>
              </S.Wrapper>
            </S.SlideContent>
          </SwiperSlide>
        ))}
      </Swiper>
    </S.HeroSection>
  );
}