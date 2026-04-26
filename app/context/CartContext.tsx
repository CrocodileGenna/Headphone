import { createContext, useContext, useState, useEffect } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;
}

interface CartContextType {
  cartItems: any[];
  addToCart: (product: any) => void;
  removeFromCart: (index: number) => void;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCartItems((prev) => [...prev, product]);
  };

  // const removeFromCart = (productId: number) => {
  //   setCartItems((prev) => {
  //     const index = prev.findIndex((item) => item.id === productId);
  //     if (index !== -1) {
  //       const newCart = [...prev];
  //       newCart.splice(index, 1);
  //       return newCart;
  //     }
  //     return prev;
  //   });
  // };
  const removeFromCart = (index: number) => {
    setCartItems((prev) => {
      const newCart = [...prev];
      newCart.splice(index, 1); // Удаляем конкретный элемент по его позиции
      return newCart;
    });
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};