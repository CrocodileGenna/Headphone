import { products } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import { s } from "../styles/cart.style";
export default function CatalogPage() {
  return (
    <main className="max-w-6xl mx-auto p-6 py-16">
      <h1 className="text-4xl font-extrabold text-slate-900 mb-4 text-center uppercase tracking-tight">
        Повний каталог
      </h1>
      <p className="text-slate-500 text-center mb-16">Оберіть свій ідеальний пристрій для комфорту</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
  {products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ))}
</div>
    </main>
  );
}