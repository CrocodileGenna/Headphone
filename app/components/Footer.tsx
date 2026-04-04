import { Link } from "react-router";
import { s } from "../styles/footer.style";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={s.footer}>
      <div className={s.grid}>
        <div className="col-span-1">
          <Link to="/Headphone" className={s.logo}>
            Fresh<span className="text-blue-500">Tech</span>
          </Link>
          <p className="mt-4">Найкращі рішення для вашого комфорту з 2024 року.</p>
        </div>

        <div>
          <h4 className={s.colTitle}>Клієнтам</h4>
          <nav className="space-y-4">
            <Link to="/Headphone/catalog" className={s.link}>Каталог</Link>
            <Link to="/Headphone/shipping" className={s.link}>Доставка</Link>
          </nav>
        </div>

        <div>
          <h4 className={s.colTitle}>Підтримка</h4>
          <nav className="space-y-4">
            <Link to="/Headphone/privacy" className={s.link}>Приватність</Link>
            <Link to="/Headphone/returns" className={s.link}>Повернення</Link>
          </nav>
        </div>

        <div>
          <h4 className={s.colTitle}>Контакти</h4>
          <p className="mb-2 text-white">м. Дніпро, пр. Науки</p>
          <p className="text-blue-400 font-medium">info@freshtech.ua</p>
        </div>
      </div>
      
      <div className={s.bottom}>
        <p>&copy; {year} FreshTech. Всі права захищені.</p>
      </div>
    </footer>
  );
}