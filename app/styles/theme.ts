export const theme = {
  colors: {
    primary: "#2563eb",       // Основний синій (кнопки, акценти)
    primaryHover: "#1d4ed8",  // Темніший синій для ховерів
    secondary: "#64748b",     // Другорядний (сірий текст)
    
    background: "#ffffff",    // Основний фон сторінок
    backgroundSoft: "#f8fafc",// Світло-сірий фон для секцій (Hero, Відгуки)
    backgroundAlt: "#f1f5f9", // Трохи темніший фон (Відео секція)

    textMain: "#0f172a",      // Майже чорний для заголовків
    textBody: "#475569",      // Темно-сірий для описів
    
    border: "#e2e8f0",        // Колір ліній та рамок
    white: "#ffffff",
    error: "#ef4444",
  },
  
  fonts: {
    main: "'Roboto', sans-serif",
    accent: "'Noto Sans', sans-serif",
  },
  
  shadows: {
    card: "0 10px 25px rgba(0, 0, 0, 0.08)",
    button: "0 4px 12px rgba(37, 99, 235, 0.2)",
  },

  borderRadius: {
    small: "8px",
    medium: "12px",
    large: "24px",
    full: "999px",
  }
};

export type ThemeType = typeof theme;