import { useTranslation } from "react-i18next";
import { useState,useEffect } from "react";

export function Price({ basePriceUah }: { basePriceUah: number }) {
  const { i18n } = useTranslation();
  const [rates, setRates] = useState<any>(null);

  const currencyMap: Record<string, string> = {
    ua: 'UAH',
    en: 'USD',
    de: 'EUR',
    pl: 'PLN',
    hi: 'INR'
  };

  const currentCurrency = currencyMap[i18n.language] || 'USD';

  useEffect(() => {
    fetchRates().then(setRates);
  }, []);

  if (!rates) return <span>{basePriceUah} ₴</span>;

  // Конвертація: (Ціна в грн / курс грн до бакса) * курс цільової валюти до бакса
  const priceInUsd = basePriceUah / rates['UAH'];
  const finalPrice = priceInUsd * rates[currentCurrency];

  return (
    <span>
      {finalPrice.toFixed(2)} {getCurrencySymbol(currentCurrency)}
    </span>
  );
}