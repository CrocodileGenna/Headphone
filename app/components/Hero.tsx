import { s } from "../styles/hero.style";

export function Hero() {
  return (
    <section className={s.section}>
      <div className={s.bg} />
      <div className={s.wrapper}>
        <div>
          <span className={s.badge}>Новинка 2026</span>
          <h1 className={s.title}>
            Твій особистий <span className="text-blue-600">мікроклімат</span> у кишені
          </h1>
          <p className={s.desc}>
            Портативні зволожувачі та компактні вентилятори для вашого комфорту вдома, в офісі чи в дорозі.
          </p>
          <button className={s.btn}>Переглянути каталог</button>
        </div>
        <div className={s.imgBox}>
          <div className={s.placeholder}>[Фото гаджета]</div>
        </div>
      </div>
    </section>
  );
}