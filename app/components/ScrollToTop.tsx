import { useState, useEffect } from 'react';
import { ScrollButton } from '~/styles/scrollToTop.style';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Показываем кнопку, когда страница прокручена на 300px вниз
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Плавная прокрутка
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <ScrollButton onClick={scrollToTop}>
          ↑
        </ScrollButton>
      )}
    </>
  );
}

