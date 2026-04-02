import { s } from "../styles/reviews.style";

export function Reviews() {
  const reviews = [
    { name: "Олександр", text: "Найкращий зволожувач для офісу. Працює тихо.", rating: 5 },
    { name: "Марія", text: "Вентилятор дуже рятує у дорозі. Якісний пластик.", rating: 5 },
  ];

  return (
    <section className={s.section}>
      <div className={s.container}>
        <h2 className={s.title}><span className={s.divider} />Відгуки клієнтів</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((rev, i) => (
            <div key={i} className={s.card}>
              <p className="text-slate-600">"{rev.text}"</p>
              <p className={s.author}>— {rev.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}