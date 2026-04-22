import '@emotion/react';
import { ThemeType } from './theme'; // Импортируем тип, который мы создали в theme.ts

declare module '@emotion/react' {
  export interface Theme extends ThemeType {}
}