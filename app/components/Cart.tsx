import { s } from "../styles/cart.style";
import { useCart } from "../context/CartContext";

export function Cart({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const { cartItems, removeFromCart, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div className={s.overlay} onClick={onClose} />
      <div className={s.drawer}>
        <div className={s.header}>
          <h2 className={s.title}>Ваш кошик ({cartItems.length})</h2>
          <button onClick={onClose} className={s.closeBtn}>&times;</button>
        </div>

        <div className={s.content}>
          {cartItems.length === 0 ? (
            <div className="text-center py-20 text-slate-400">Кошик порожній</div>
          ) : (
            cartItems.map((item, index) => (
              <div key={`${item.id}-${index}`} className={s.item}>
                <img src={item.image} alt={item.name} className={s.itemImg} />
                <div className={s.itemInfo}>
                  <h4 className={s.itemName}>{item.name}</h4>
                  <p className={s.itemPrice}>{item.price} ₴</p>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-slate-300 hover:text-red-500 transition-colors p-1"
                  title="Видалити"
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>

        <div className={s.footer}>
          <div className={s.totalRow}>
            <span className={s.totalLabel}>Загальна сума:</span>
            <span className={s.totalAmount}>{totalPrice} ₴</span>
          </div>
          <button 
            disabled={cartItems.length === 0}
            className={`${s.checkoutBtn} disabled:bg-slate-300 disabled:shadow-none`}
            onClick={() => alert('Функціонал оплати буде підключено!')}
          >
            <span>Оформити замовлення</span>
          </button>
        </div>
      </div>
    </>
  );
}