import { ProductOverview } from "../components/ProductOverview";
import { Reviews } from "../components/Reviews";

export default function ReviewsPage() {
  return (
    <main className="py-16">
      <div className="max-w-6xl mx-auto px-6 mb-20 text-center">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Детальні огляди та відгуки</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Ми тестуємо кожен гаджет, щоб ви були впевнені у своєму виборі. Дивіться відео та читайте думки реальних користувачів.
        </p>
      </div>

      {/* Можна додати кілька блоків огляду для різних категорій */}
      <ProductOverview />
      
      <div className="bg-slate-50">
        <Reviews />
      </div>
    </main>
  );
}