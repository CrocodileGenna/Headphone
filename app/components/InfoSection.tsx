import { s } from "../styles/info.style";

export function InfoSection() {
  const benefits = [
    { title: "Автономність", desc: "До 12 годин роботи від одного заряду.", icon: "🔋" },
    { title: "Тиха робота", desc: "Рівень шуму нижче 20 дБ.", icon: "🤫" },
    { title: "Компактність", desc: "Легко поміщається у вашу сумку.", icon: "🎒" },
  ];

  return (
    <section className={s.section}>
      <div className={s.container}>
        <div>
          <h2 className={s.title}>Свіжість та комфорт у будь-який час</h2>
          <p className={s.text}>
            Ми створюємо портативні рішення для вашого мікроклімату. Наші гаджети допомагають підтримувати вологість повітря та прохолоду, де б ви не були.
          </p>
        </div>
        <div className="grid gap-6">
          {benefits.map((item, index) => (
            <div key={index} className={s.benefitCard}>
              <span className="text-3xl">{item.icon}</span>
              <div>
                <h4 className={s.benefitTitle}>{item.title}</h4>
                <p className={s.benefitDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}