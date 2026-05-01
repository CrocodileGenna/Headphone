import{s as t}from"./useTranslation-BA5JSnOe.js";const i=t.div`
  padding-top: 80px; /* Отступ под хедер */
`,o=t.section`
  padding: 80px 0;
  &:nth-of-type(even) {
    background-color: #f8fafc;
  }
`,r=t.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`,n=t.h2`
  font-family: ${a=>a.theme.fonts.accent};
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: ${a=>a.theme.colors.textMain};
`,s=t.p`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  font-size: 1.25rem;
  line-height: 1.8;
  color: ${a=>a.theme.colors.secondary};
`,p=t.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  
  img {
    width: 100%;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    transition: transform 0.3s ease;
    &:hover { transform: translateY(-5px); }
  }
`,d=t.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 50px;
  opacity: 0.7;

  img {
    height: 50px;
    filter: grayscale(100%);
    transition: all 0.3s ease;
    &:hover {
      filter: grayscale(0%);
      opacity: 1;
    }
  }
`,c=t.div`
  width: 100%;
  display: flex;
  justify-content: center; /* Центрування на великих екранах */
  padding: 40px 0; /* Невеликі відступи зверху/знизу за бажанням */
`,l=t.img`
  width: 100%;        /* На мобільних займає всю ширину */
  height: auto;       /* Зберігає пропорції */
  display: block;
  
  @media (min-width: 1500px) {
    width: 1500px;    /* Максимальна ширина на десктопі */
    border-radius: 20px; /* Можна додати заокруглення для краси на десктопі */
  }
`;export{i as A,r as C,c as F,s as I,d as P,o as S,n as a,p as b,l as c};
