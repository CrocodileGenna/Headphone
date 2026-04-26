import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import { Suspense, useEffect } from "react";
import { Header } from "./components/Header"
import { Footer } from "./components/Footer";
import { ScrollToTop } from './components/ScrollToTop';
import type { Route } from "./+types/root";
import "./styles/app.css";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme";
import { CartProvider } from "./context/CartContext";
import './i18n';

// async function translatePageContent(targetLang: string) {
//   // Находим элементы именно в момент вызова
//   const elements = document.querySelectorAll('[data-translate="true"]');
//   console.log("Найдено элементов для перевода:", elements.length);

//   if (elements.length === 0) return;

//   const textsToTranslate = Array.from(elements).map(el => el.textContent || "");

//   try {
//     const response = await fetch('http://localhost:3001/api/translate', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ texts: textsToTranslate, targetLang })
//     });

//     const data = await response.json();
//     console.log("Данные от сервера получены:", data);

//     if (data.translations && Array.isArray(data.translations)) {
//       elements.forEach((el, index) => {
//         // Используем textContent для безопасности
//         el.textContent = data.translations[index];
//       });
//     }
//   } catch (error) {
//     console.error("Ошибка фронтенда при переводе:", error);
//   }
// }

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&family=Roboto:wght@400;500&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  // useEffect(() => {
  //   const handleLanguageChange = (event: any) => {
  //     const newLang = event.detail;
  //     // Запускаем перевод
  //     translatePageContent(newLang);
  //   };

  //   window.addEventListener('changeLanguage', handleLanguageChange);
    
  //   return () => {
  //     window.removeEventListener('changeLanguage', handleLanguageChange);
  //   };
  // }, []);
  return (
    <html lang="uk">
      <head>
        <Meta />
        <Links />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body>
        <ThemeProvider theme={theme}>
        <CartProvider>
          <Suspense fallback={<div className="h-screen flex items-center justify-center">Завантаження...</div>}>
          <Header />
          {children}
          <Footer />
          </Suspense>
          <ScrollToTop />
          <ScrollRestoration />
          <Scripts />
        </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
