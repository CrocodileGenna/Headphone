import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, Link, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createContext, useContext, useState } from "react";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  if (request.method.toUpperCase() === "HEAD") {
    return new Response(null, {
      status: responseStatusCode,
      headers: responseHeaders
    });
  }
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    let timeoutId = setTimeout(
      () => abort(),
      streamTimeout + 1e3
    );
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough({
            final(callback) {
              clearTimeout(timeoutId);
              timeoutId = void 0;
              callback();
            }
          });
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          pipe(body);
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
const s$7 = {
  header: "bg-white/90 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 w-full",
  container: "max-w-6xl mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-between items-center",
  logo: "text-lg md:text-xl font-bold tracking-tight text-blue-600 uppercase z-[60]",
  nav: "hidden md:flex space-x-8 font-medium text-sm text-slate-600",
  link: "hover:text-blue-600 transition-colors duration-200",
  mobileMenu: "fixed inset-0 bg-white z-50 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 md:hidden",
  mobileLink: "text-2xl font-bold text-slate-900 hover:text-blue-600",
  actions: "flex items-center gap-2 md:gap-4 z-[60]",
  burgerBtn: "p-2 text-slate-900 md:hidden flex flex-col gap-1.5 focus:outline-none",
  burgerLine: "w-6 h-0.5 bg-slate-900 rounded-full transition-all duration-300",
  cartBtn: "relative p-2 hover:bg-slate-100 rounded-full transition text-slate-700",
  badge: "absolute -top-1 -right-1 bg-blue-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold shadow-sm"
};
const CartContext = createContext(void 0);
function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };
  const removeFromCart = (productId) => {
    setCartItems((prev) => {
      const index = prev.findIndex((item) => item.id === productId);
      if (index !== -1) {
        const newCart = [...prev];
        newCart.splice(index, 1);
        return newCart;
      }
      return prev;
    });
  };
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);
  return /* @__PURE__ */ jsx(CartContext.Provider, { value: { cartItems, addToCart, removeFromCart, totalPrice }, children });
}
const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};
const s$6 = {
  overlay: "fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60] transition-opacity duration-300",
  drawer: "fixed right-0 top-0 h-full w-full sm:w-[400px] bg-white shadow-2xl z-[70] flex flex-col transition-transform duration-500 ease-out",
  header: "p-5 border-b border-slate-100 flex justify-between items-center bg-white",
  title: "text-xl font-bold text-slate-900 flex items-center gap-2",
  closeBtn: "w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-900 transition",
  content: "flex-grow overflow-y-auto p-5 space-y-4 scrollbar-thin",
  item: "flex gap-4 p-3 rounded-xl border border-transparent hover:border-slate-100 transition-colors",
  itemImg: "w-16 h-16 bg-slate-50 rounded-lg object-contain p-1 border border-slate-100",
  itemInfo: "flex-grow py-1",
  itemName: "font-bold text-slate-900 text-sm leading-tight mb-1",
  itemPrice: "text-blue-600 font-bold text-sm",
  footer: "p-6 border-t border-slate-100 bg-slate-50/80 backdrop-blur-md",
  totalRow: "flex justify-between items-center mb-6",
  totalLabel: "text-slate-500 font-medium",
  totalAmount: "text-2xl font-black text-slate-900",
  checkoutBtn: "w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-200 flex justify-center items-center gap-3 active:scale-[0.98] disabled:opacity-50 disabled:grayscale"
};
function Cart({ isOpen, onClose }) {
  const { cartItems, removeFromCart, totalPrice } = useCart();
  if (!isOpen) return null;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: s$6.overlay, onClick: onClose }),
    /* @__PURE__ */ jsxs("div", { className: s$6.drawer, children: [
      /* @__PURE__ */ jsxs("div", { className: s$6.header, children: [
        /* @__PURE__ */ jsxs("h2", { className: s$6.title, children: [
          "Ваш кошик (",
          cartItems.length,
          ")"
        ] }),
        /* @__PURE__ */ jsx("button", { onClick: onClose, className: s$6.closeBtn, children: "×" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: s$6.content, children: cartItems.length === 0 ? /* @__PURE__ */ jsx("div", { className: "text-center py-20 text-slate-400", children: "Кошик порожній" }) : cartItems.map((item, index) => /* @__PURE__ */ jsxs("div", { className: s$6.item, children: [
        /* @__PURE__ */ jsx("img", { src: item.image, alt: item.name, className: s$6.itemImg }),
        /* @__PURE__ */ jsxs("div", { className: s$6.itemInfo, children: [
          /* @__PURE__ */ jsx("h4", { className: s$6.itemName, children: item.name }),
          /* @__PURE__ */ jsxs("p", { className: s$6.itemPrice, children: [
            item.price,
            " ₴"
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => removeFromCart(item.id),
            className: "text-slate-300 hover:text-red-500 transition-colors p-1",
            title: "Видалити",
            children: "✕"
          }
        )
      ] }, `${item.id}-${index}`)) }),
      /* @__PURE__ */ jsxs("div", { className: s$6.footer, children: [
        /* @__PURE__ */ jsxs("div", { className: s$6.totalRow, children: [
          /* @__PURE__ */ jsx("span", { className: s$6.totalLabel, children: "Загальна сума:" }),
          /* @__PURE__ */ jsxs("span", { className: s$6.totalAmount, children: [
            totalPrice,
            " ₴"
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            disabled: cartItems.length === 0,
            className: `${s$6.checkoutBtn} disabled:bg-slate-300 disabled:shadow-none`,
            onClick: () => alert("Функціонал оплати буде підключено!"),
            children: /* @__PURE__ */ jsx("span", { children: "Оформити замовлення" })
          }
        )
      ] })
    ] })
  ] });
}
function Header() {
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
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("header", { className: s$7.header, children: [
      /* @__PURE__ */ jsxs("div", { className: s$7.container, children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", onClick: closeAll, className: s$7.logo, children: [
          "Fresh",
          /* @__PURE__ */ jsx("span", { className: "text-slate-900", children: "Tech" })
        ] }),
        /* @__PURE__ */ jsxs("nav", { className: s$7.nav, children: [
          /* @__PURE__ */ jsx(Link, { to: "/", className: s$7.link, children: "Головна" }),
          /* @__PURE__ */ jsx(Link, { to: "/catalog", className: s$7.link, children: "Каталог" }),
          /* @__PURE__ */ jsx(Link, { to: "/reviews", className: s$7.link, children: "Огляди" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: s$7.actions, children: [
          /* @__PURE__ */ jsxs("button", { onClick: () => setIsCartOpen(true), className: s$7.cartBtn, children: [
            "🛒 ",
            cartItems.length > 0 && /* @__PURE__ */ jsx("span", { className: s$7.badge, children: cartItems.length })
          ] }),
          /* @__PURE__ */ jsxs("button", { onClick: toggleMenu, className: s$7.burgerBtn, children: [
            /* @__PURE__ */ jsx("div", { className: `${s$7.burgerLine} ${isMenuOpen ? "rotate-45 translate-y-2" : ""}` }),
            /* @__PURE__ */ jsx("div", { className: `${s$7.burgerLine} ${isMenuOpen ? "opacity-0" : ""}` }),
            /* @__PURE__ */ jsx("div", { className: `${s$7.burgerLine} ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}` })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: `${s$7.mobileMenu} ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`, children: [
        /* @__PURE__ */ jsx(Link, { to: "/", onClick: closeAll, className: s$7.mobileLink, children: "Головна" }),
        /* @__PURE__ */ jsx(Link, { to: "/catalog", onClick: closeAll, className: s$7.mobileLink, children: "Каталог" }),
        /* @__PURE__ */ jsx(Link, { to: "/reviews", onClick: closeAll, className: s$7.mobileLink, children: "Огляди" })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Cart, { isOpen: isCartOpen, onClose: () => setIsCartOpen(false) })
  ] });
}
const s$5 = {
  footer: "bg-slate-900 text-slate-400 py-12 md:py-16 mt-auto",
  grid: "max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 text-sm",
  logo: "text-xl font-bold text-white uppercase tracking-tight",
  colTitle: "text-white font-bold mb-4 md:mb-6 uppercase text-xs tracking-widest text-center md:text-left",
  link: "hover:text-white transition-colors duration-200 py-1",
  bottom: "border-t border-slate-800 mt-10 md:mt-12 pt-8 text-center text-[10px] md:text-xs tracking-wide uppercase"
};
function Footer() {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsxs("footer", { className: s$5.footer, children: [
    /* @__PURE__ */ jsxs("div", { className: s$5.grid, children: [
      /* @__PURE__ */ jsxs("div", { className: "col-span-1", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: s$5.logo, children: [
          "Fresh",
          /* @__PURE__ */ jsx("span", { className: "text-blue-500", children: "Tech" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4", children: "Найкращі рішення для вашого комфорту з 2024 року." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: s$5.colTitle, children: "Клієнтам" }),
        /* @__PURE__ */ jsxs("nav", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/catalog", className: s$5.link, children: "Каталог" }),
          /* @__PURE__ */ jsx(Link, { to: "/shipping", className: s$5.link, children: "Доставка" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: s$5.colTitle, children: "Підтримка" }),
        /* @__PURE__ */ jsxs("nav", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/privacy", className: s$5.link, children: "Приватність" }),
          /* @__PURE__ */ jsx(Link, { to: "/returns", className: s$5.link, children: "Повернення" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: s$5.colTitle, children: "Контакти" }),
        /* @__PURE__ */ jsx("p", { className: "mb-2 text-white", children: "м. Дніпро, пр. Науки" }),
        /* @__PURE__ */ jsx("p", { className: "text-blue-400 font-medium", children: "info@freshtech.ua" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: s$5.bottom, children: /* @__PURE__ */ jsxs("p", { children: [
      "© ",
      year,
      " FreshTech. Всі права захищені."
    ] }) })
  ] });
}
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "uk",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsx("body", {
      children: /* @__PURE__ */ jsxs(CartProvider, {
        children: [/* @__PURE__ */ jsx(Header, {}), children, /* @__PURE__ */ jsx(Footer, {}), /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
      })
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
const s$4 = {
  section: "relative min-h-[90vh] md:h-[550px] flex items-center bg-white overflow-hidden py-12 md:py-0",
  bg: "absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50",
  wrapper: "relative z-10 max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-12",
  badge: "inline-block px-3 py-1 bg-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-wider rounded-full mb-6",
  title: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-[1.1]",
  desc: "text-slate-600 text-base md:text-lg mb-8 max-w-md md:max-w-none leading-relaxed",
  btn: "w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-10 rounded-xl transition-all shadow-lg shadow-blue-200 active:scale-95",
  imgBox: "flex justify-center items-center w-full",
  placeholder: "w-48 h-64 sm:w-60 sm:h-80 md:w-72 md:h-96 bg-gradient-to-tr from-blue-100 to-white rounded-[2rem] border border-white shadow-2xl flex items-center justify-center text-blue-200"
};
function Hero() {
  return /* @__PURE__ */ jsxs("section", { className: s$4.section, children: [
    /* @__PURE__ */ jsx("div", { className: s$4.bg }),
    /* @__PURE__ */ jsxs("div", { className: s$4.wrapper, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: s$4.badge, children: "Новинка 2026" }),
        /* @__PURE__ */ jsxs("h1", { className: s$4.title, children: [
          "Твій особистий ",
          /* @__PURE__ */ jsx("span", { className: "text-blue-600", children: "мікроклімат" }),
          " у кишені"
        ] }),
        /* @__PURE__ */ jsx("p", { className: s$4.desc, children: "Портативні зволожувачі та компактні вентилятори для вашого комфорту вдома, в офісі чи в дорозі." }),
        /* @__PURE__ */ jsx("button", { className: s$4.btn, children: "Переглянути каталог" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: s$4.imgBox, children: /* @__PURE__ */ jsx("div", { className: s$4.placeholder, children: "[Фото гаджета]" }) })
    ] })
  ] });
}
const products = [
  {
    id: 1,
    name: "AquaMist Desktop",
    price: 850,
    description: "Компактний зволожувач з LED-підсвіткою та низьким рівнем шуму.",
    image: "https://images.unsplash.com/photo-1585351082955-3e8f814df3b0?q=80&w=400&h=400&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "NanoBreeze Pocket",
    price: 450,
    description: "Кишеньковий вентилятор, що працює до 8 годин від одного заряду.",
    image: "https://images.unsplash.com/photo-1619241638225-231553641245?q=80&w=400&h=400&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "FrostyHand V2",
    price: 600,
    description: "Потужний ручний вентилятор з трьома режимами швидкості.",
    image: "https://images.unsplash.com/photo-1591129841117-3adfd313e34f?q=80&w=400&h=400&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "CloudHumid Mini",
    price: 1200,
    description: "Ультразвуковий зволожувач з функцією аромадифузора.",
    image: "https://images.unsplash.com/photo-1602928294221-441892985244?q=80&w=400&h=400&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "StormPocket Turbo",
    price: 750,
    description: "Турбо-вентилятор для екстремальної прохолоди в спеку.",
    image: "https://via.placeholder.com/400x400?text=Fan+Turbo"
  },
  {
    id: 6,
    name: "AquaGlow Portable",
    price: 950,
    description: "Портативний зволожувач з вбудованим акумулятором 2000mAh.",
    image: "https://via.placeholder.com/400x400?text=Humidifier+Battery"
  },
  {
    id: 7,
    name: "BreezeNeck Pro",
    price: 1100,
    description: "Вентилятор на шию — вільні руки та повний комфорт.",
    image: "https://via.placeholder.com/400x400?text=Neck+Fan"
  },
  {
    id: 8,
    name: "PureAir Mist",
    price: 1400,
    description: "Преміум зволожувач з фільтром очищення води.",
    image: "https://via.placeholder.com/400x400?text=Premium+Mist"
  },
  {
    id: 9,
    name: "SilentCool Desk",
    price: 550,
    description: "Настільний вентилятор з гнучкою ніжкою та USB живленням.",
    image: "https://via.placeholder.com/400x400?text=Desk+Cool"
  },
  {
    id: 10,
    name: "H2O Office Star",
    price: 800,
    description: "Стильний зволожувач у формі кристала для робочого столу.",
    image: "https://via.placeholder.com/400x400?text=Crystal+Humid"
  }
];
const s$3 = {
  wrapper: "bg-white border border-slate-100 p-4 md:p-5 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group",
  imgBox: "bg-slate-50 rounded-xl mb-4 overflow-hidden aspect-square flex items-center justify-center group-hover:bg-blue-50 transition-colors",
  img: "object-contain w-full h-full p-4 mix-blend-multiply transition-transform duration-500 group-hover:scale-110",
  title: "text-base md:text-lg font-bold text-slate-900 mb-1 line-clamp-1",
  desc: "text-slate-500 text-xs mb-4 line-clamp-2 leading-relaxed",
  footer: "flex justify-between items-center mt-auto pt-2",
  price: "text-lg md:text-xl font-black text-slate-900",
  buyBtn: "bg-slate-900 text-white p-2.5 rounded-lg hover:bg-blue-600 transition-all active:scale-90 flex items-center justify-center sm:px-4"
};
function ProductCard({ product }) {
  const { addToCart } = useCart();
  return /* @__PURE__ */ jsxs("div", { className: s$3.wrapper, children: [
    /* @__PURE__ */ jsx("div", { className: s$3.imgBox, children: /* @__PURE__ */ jsx("img", { src: product.image, alt: product.name, className: s$3.img }) }),
    /* @__PURE__ */ jsx("h3", { className: s$3.title, children: product.name }),
    /* @__PURE__ */ jsx("p", { className: s$3.desc, children: product.description }),
    /* @__PURE__ */ jsxs("div", { className: s$3.footer, children: [
      /* @__PURE__ */ jsxs("span", { className: s$3.price, children: [
        product.price,
        " ₴"
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => addToCart(product),
          className: s$3.buyBtn,
          children: "Купити"
        }
      )
    ] })
  ] });
}
const s$2 = {
  section: "bg-slate-50 py-12 md:py-20 border-y border-slate-100",
  container: "max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center",
  title: "text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6 leading-tight",
  text: "text-slate-600 leading-relaxed text-sm md:text-base mb-8 max-w-2xl mx-auto md:mx-0",
  benefitCard: "flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-3 sm:space-y-0 sm:space-x-4 p-5 bg-white rounded-2xl shadow-sm border border-slate-50 hover:shadow-md transition-shadow",
  benefitTitle: "font-bold text-slate-900 mb-1",
  benefitDesc: "text-slate-500 text-xs leading-relaxed"
};
function InfoSection() {
  const benefits = [
    { title: "Автономність", desc: "До 12 годин роботи від одного заряду.", icon: "🔋" },
    { title: "Тиха робота", desc: "Рівень шуму нижче 20 дБ.", icon: "🤫" },
    { title: "Компактність", desc: "Легко поміщається у вашу сумку.", icon: "🎒" }
  ];
  return /* @__PURE__ */ jsx("section", { className: s$2.section, children: /* @__PURE__ */ jsxs("div", { className: s$2.container, children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: s$2.title, children: "Свіжість та комфорт у будь-який час" }),
      /* @__PURE__ */ jsx("p", { className: s$2.text, children: "Ми створюємо портативні рішення для вашого мікроклімату. Наші гаджети допомагають підтримувати вологість повітря та прохолоду, де б ви не були." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-6", children: benefits.map((item, index) => /* @__PURE__ */ jsxs("div", { className: s$2.benefitCard, children: [
      /* @__PURE__ */ jsx("span", { className: "text-3xl", children: item.icon }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: s$2.benefitTitle, children: item.title }),
        /* @__PURE__ */ jsx("p", { className: s$2.benefitDesc, children: item.desc })
      ] })
    ] }, index)) })
  ] }) });
}
const s$1 = {
  section: "py-12 md:py-16 bg-white",
  container: "max-w-6xl mx-auto px-6",
  divider: "hidden md:block w-8 h-1 bg-blue-600 rounded-full mr-3",
  title: "text-xl md:text-2xl font-bold text-slate-900 text-center md:text-left",
  card: "bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-100 italic relative",
  author: "text-slate-900 font-bold not-italic mt-4 text-xs md:text-sm uppercase tracking-wide flex items-center gap-2"
};
function Reviews() {
  const reviews = [
    { name: "Олександр", text: "Найкращий зволожувач для офісу. Працює тихо.", rating: 5 },
    { name: "Марія", text: "Вентилятор дуже рятує у дорозі. Якісний пластик.", rating: 5 }
  ];
  return /* @__PURE__ */ jsx("section", { className: s$1.section, children: /* @__PURE__ */ jsxs("div", { className: s$1.container, children: [
    /* @__PURE__ */ jsxs("h2", { className: s$1.title, children: [
      /* @__PURE__ */ jsx("span", { className: s$1.divider }),
      "Відгуки клієнтів"
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: reviews.map((rev, i) => /* @__PURE__ */ jsxs("div", { className: s$1.card, children: [
      /* @__PURE__ */ jsxs("p", { className: "text-slate-600", children: [
        '"',
        rev.text,
        '"'
      ] }),
      /* @__PURE__ */ jsxs("p", { className: s$1.author, children: [
        "— ",
        rev.name
      ] })
    ] }, i)) })
  ] }) });
}
const s = {
  section: "bg-white py-12 md:py-20",
  container: "max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-8 md:gap-16 items-center",
  videoBox: "w-full md:w-1/2 aspect-video bg-blue-50 rounded-2xl md:rounded-3xl border border-blue-100 flex items-center justify-center relative overflow-hidden shadow-xl",
  content: "w-full md:w-1/2 text-center md:text-left",
  title: "text-2xl md:text-3xl font-black uppercase mb-6 text-slate-900",
  desc: "text-slate-600 leading-relaxed mb-8 text-sm md:text-base",
  list: "space-y-3 md:space-y-4 inline-block md:block text-left",
  listItem: "flex items-center text-xs md:text-sm font-medium text-slate-700"
};
function ProductOverview() {
  return /* @__PURE__ */ jsx("section", { className: s.section, children: /* @__PURE__ */ jsxs("div", { className: s.container, children: [
    /* @__PURE__ */ jsx("div", { className: s.videoBox, children: /* @__PURE__ */ jsx("span", { className: "text-blue-200 italic font-bold text-xl uppercase tracking-widest", children: "Відеоогляд" }) }),
    /* @__PURE__ */ jsxs("div", { className: s.content, children: [
      /* @__PURE__ */ jsx("h2", { className: s.title, children: "Технології для життя" }),
      /* @__PURE__ */ jsx("p", { className: s.desc, children: "Дізнайтеся більше про те, як наші пристрої створюють ідеальний баланс вологості та свіжості у вашому домі." }),
      /* @__PURE__ */ jsxs("ul", { className: s.list, children: [
        /* @__PURE__ */ jsxs("li", { className: s.listItem, children: [
          /* @__PURE__ */ jsx("span", { className: "text-blue-500 mr-3", children: "✦" }),
          " Розумне споживання енергії"
        ] }),
        /* @__PURE__ */ jsxs("li", { className: s.listItem, children: [
          /* @__PURE__ */ jsx("span", { className: "text-blue-500 mr-3", children: "✦" }),
          " Екологічно чисті матеріали"
        ] })
      ] })
    ] })
  ] }) });
}
async function loader({
  params
}) {
  return {
    items: products
  };
}
const home = UNSAFE_withComponentProps(function HomePage() {
  const mainProduct = products[0];
  return /* @__PURE__ */ jsxs("main", {
    children: [/* @__PURE__ */ jsx(Hero, {}), /* @__PURE__ */ jsxs("section", {
      className: "max-w-6xl mx-auto p-6 py-20",
      children: [/* @__PURE__ */ jsx("h2", {
        className: "text-3xl font-bold mb-12 text-center text-slate-900",
        children: "Наш флагман"
      }), /* @__PURE__ */ jsx("div", {
        className: "flex justify-center",
        children: /* @__PURE__ */ jsx("div", {
          className: "max-w-sm w-full",
          children: /* @__PURE__ */ jsx(ProductCard, {
            product: mainProduct
          })
        })
      })]
    }), /* @__PURE__ */ jsx(InfoSection, {}), /* @__PURE__ */ jsx(ProductOverview, {})]
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  loader
}, Symbol.toStringTag, { value: "Module" }));
const catalog = UNSAFE_withComponentProps(function CatalogPage() {
  return /* @__PURE__ */ jsxs("main", {
    className: "max-w-6xl mx-auto p-6 py-16",
    children: [/* @__PURE__ */ jsx("h1", {
      className: "text-4xl font-extrabold text-slate-900 mb-4 text-center uppercase tracking-tight",
      children: "Повний каталог"
    }), /* @__PURE__ */ jsx("p", {
      className: "text-slate-500 text-center mb-16",
      children: "Оберіть свій ідеальний пристрій для комфорту"
    }), /* @__PURE__ */ jsx("div", {
      className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8",
      children: products.map((product) => /* @__PURE__ */ jsx(ProductCard, {
        product
      }, product.id))
    })]
  });
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: catalog
}, Symbol.toStringTag, { value: "Module" }));
const reviewsPage = UNSAFE_withComponentProps(function ReviewsPage() {
  return /* @__PURE__ */ jsxs("main", {
    className: "py-16",
    children: [/* @__PURE__ */ jsxs("div", {
      className: "max-w-6xl mx-auto px-6 mb-20 text-center",
      children: [/* @__PURE__ */ jsx("h1", {
        className: "text-4xl font-extrabold text-slate-900 mb-6",
        children: "Детальні огляди та відгуки"
      }), /* @__PURE__ */ jsx("p", {
        className: "text-slate-600 max-w-2xl mx-auto",
        children: "Ми тестуємо кожен гаджет, щоб ви були впевнені у своєму виборі. Дивіться відео та читайте думки реальних користувачів."
      })]
    }), /* @__PURE__ */ jsx(ProductOverview, {}), /* @__PURE__ */ jsx("div", {
      className: "bg-slate-50",
      children: /* @__PURE__ */ jsx(Reviews, {})
    })]
  });
});
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: reviewsPage
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/Headphone/assets/entry.client-C7Gz1A9M.js", "imports": ["/Headphone/assets/chunk-EPOLDU6W-BSEkFbdz.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/Headphone/assets/root-5LjiuMDj.js", "imports": ["/Headphone/assets/chunk-EPOLDU6W-BSEkFbdz.js", "/Headphone/assets/CartContext-DokHE0gF.js"], "css": ["/Headphone/assets/root-DyiGeT4t.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/Headphone/assets/home-HjDQXuak.js", "imports": ["/Headphone/assets/chunk-EPOLDU6W-BSEkFbdz.js", "/Headphone/assets/ProductCard-BwzS4DsT.js", "/Headphone/assets/ProductOverview-DEQSEZ2t.js", "/Headphone/assets/CartContext-DokHE0gF.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/catalog": { "id": "routes/catalog", "parentId": "root", "path": "catalog", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/Headphone/assets/catalog-B2oj6-gC.js", "imports": ["/Headphone/assets/chunk-EPOLDU6W-BSEkFbdz.js", "/Headphone/assets/ProductCard-BwzS4DsT.js", "/Headphone/assets/CartContext-DokHE0gF.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/reviews-page": { "id": "routes/reviews-page", "parentId": "root", "path": "reviews", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/Headphone/assets/reviews-page-BLlyDr-u.js", "imports": ["/Headphone/assets/chunk-EPOLDU6W-BSEkFbdz.js", "/Headphone/assets/ProductOverview-DEQSEZ2t.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/Headphone/assets/manifest-2b0857d4.js", "version": "2b0857d4", "sri": void 0 };
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "unstable_optimizeDeps": false, "unstable_subResourceIntegrity": false, "unstable_trailingSlashAwareDataRequests": false, "v8_middleware": false, "v8_splitRouteModules": false, "v8_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/Headphone/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "routes/catalog": {
    id: "routes/catalog",
    parentId: "root",
    path: "catalog",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/reviews-page": {
    id: "routes/reviews-page",
    parentId: "root",
    path: "reviews",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  }
};
const allowedActionOrigins = false;
export {
  allowedActionOrigins,
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
