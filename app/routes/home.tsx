
import { Hero } from "../components/Hero";
import products  from "../data/products.json";
import { InfoSection } from "../components/InfoSection";
import { Reviews } from "../components/Reviews"; 
import { ProductOverview } from "../components/ProductOverview";
import { FeaturedProduct } from "../components/FeaturedProduct";
import type { Route } from "./+types/home"; 

export async function clientLoader({ params }: Route.LoaderArgs) {
  return {
    items: products,
  };
}

export default function HomePage() {
  const mainProduct = products[0];
  const mainProduct1 = products[5];

  return (
    <main>
      <Hero />
      <FeaturedProduct product={mainProduct} />
      <ProductOverview />
      {/* <InfoSection /> */}
      <FeaturedProduct product={mainProduct1} />
      <Reviews/>
    </main>
  );
}