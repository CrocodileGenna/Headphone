import { s } from "../styles/card.style";
import { useCart } from "../context/CartContext";
export function ProductCard({ product }: { product: any }) {
  const { addToCart } = useCart();

  return (
    <div className={s.wrapper}>
      <div className={s.imgBox}>
        <img src={product.image} alt={product.name} className={s.img} />
      </div>
      <h3 className={s.title}>{product.name}</h3>
      <p className={s.desc}>{product.description}</p>
      <div className={s.footer}>
        <span className={s.price}>{product.price} ₴</span>
        <button 
          onClick={() => addToCart(product)} 
          className={s.buyBtn}
        >
          Купити
        </button>
      </div>
    </div>
  );
}