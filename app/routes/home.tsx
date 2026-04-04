
import { Hero } from "../components/Hero";
import { products } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import { InfoSection } from "../components/InfoSection";
import { Reviews } from "../components/Reviews"; 
import { ProductOverview } from "../components/ProductOverview";
import type { Route } from "./+types/home"; 

export async function clientLoader({ params }: Route.LoaderArgs) {
  return {
    items: products,
  };
}

export default function HomePage() {
  const mainProduct = products[0];

  return (
    <main>
      <Hero />
      
      <section className="max-w-6xl mx-auto p-6 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">Наш флагман</h2>
        <div className="flex justify-center">
          <div className="max-w-sm w-full">
            <ProductCard product={mainProduct} />
          </div>
        </div>
      </section>

      <InfoSection />
      <ProductOverview />
      <Reviews/>
    </main>
  );
}