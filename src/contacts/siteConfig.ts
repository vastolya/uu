// src/
// ├── app/                     # Next.js App Router
// │   ├── layout.tsx          # Общий layout (обёртка для всех страниц)
// │   ├── page.tsx            # Главная страница
// │   ├── globals.css         # Глобальные стили (включает tailwind и переменные)
// │   └── favicon.ico
// │
// ├── components/             # Переиспользуемые UI-компоненты
// │   ├── ui/                 # Базовые примитивы (Button, Input, Tag)
// │   ├── layout/             # Хедер, футер, сайдбар и пр.
// │   ├── sections/           # Секции для лендинга (Hero, Features, etc.)
// │   └── icons/              # SVG иконки (React компоненты)
// │
// ├── stores/                 # Zustand хранилища
// │   └── modalStore.ts
// │
// ├── lib/                    # Утилиты, функции, API хелперы
// │   └── helpers.ts
// │
// ├── types/                  # Глобальные типы TypeScript
// │   └── index.ts
// │
// ├── styles/                 # Если захочешь вынести темы отдельно
// │   └── tokens.css          # Альтернатива, если не хочешь всё в globals.css
// │
// └── constants/              # Константы, enum'ы, словари
//     └── siteConfig.ts
