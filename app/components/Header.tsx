import { useState } from "react";
import { Link } from "react-router";
import { s } from "../styles/header.style";
import { useCart } from "../context/CartContext";
import { Cart } from "./Cart";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "auto";
  };

  const closeAll = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <header className={s.header}>
        <div className={s.container}>
          <Link to="/Headphone" onClick={closeAll} className={s.logo}>
            Fresh<span className="text-slate-900">Tech</span>
          </Link>
          
          <nav className={s.nav}>
            <Link to="/Headphone" className={s.link}>Головна</Link>
            <Link to="/Headphone/catalog" className={s.link}>Каталог</Link>
            <Link to="/Headphone/reviews" className={s.link}>Огляди</Link>
          </nav>

          <div className={s.actions}>
            <button onClick={() => setIsCartOpen(true)} className={s.cartBtn}>
              🛒 {cartItems.length > 0 && <span className={s.badge}>{cartItems.length}</span>}
            </button>

            <button onClick={toggleMenu} className={s.burgerBtn}>
              <div className={`${s.burgerLine} ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <div className={`${s.burgerLine} ${isMenuOpen ? "opacity-0" : ""}`} />
              <div className={`${s.burgerLine} ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>

        <div className={`${s.mobileMenu} ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <Link to="/Headphone" onClick={closeAll} className={s.mobileLink}>Головна</Link>
          <Link to="/Headphone/catalog" onClick={closeAll} className={s.mobileLink}>Каталог</Link>
          <Link to="/Headphone/reviews" onClick={closeAll} className={s.mobileLink}>Огляди</Link>
        </div>
      </header>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}