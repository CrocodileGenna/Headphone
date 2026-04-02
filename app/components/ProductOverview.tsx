import { s } from "../styles/overview.style";

export function ProductOverview() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.videoBox}>
          <span className="text-blue-200 italic font-bold text-xl uppercase tracking-widest">Відеоогляд</span>
        </div>
        <div className={s.content}>
          <h2 className={s.title}>Технології для життя</h2>
          <p className={s.desc}>Дізнайтеся більше про те, як наші пристрої створюють ідеальний баланс вологості та свіжості у вашому домі.</p>
          <ul className={s.list}>
            <li className={s.listItem}><span className="text-blue-500 mr-3">✦</span> Розумне споживання енергії</li>
            <li className={s.listItem}><span className="text-blue-500 mr-3">✦</span> Екологічно чисті матеріали</li>
          </ul>
        </div>
      </div>
    </section>
  );
}