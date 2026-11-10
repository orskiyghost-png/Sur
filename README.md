# Surkove.ru - Персональный Сайт-Портфолио

![Status](https://img.shields.io/badge/status-in%20development-yellow)
![License](https://img.shields.io/badge/license-MIT-blue)

Современный персональный сайт-визитка и портфолио, созданный с использованием React, TypeScript и Vite.

🌐 **Домен:** https://www.surkove.ru  
📦 **Репозиторий:** https://github.com/orskiyghost-png/Sur

---

## ✨ Особенности

- ⚡️ **Быстрая сборка** с Vite
- ⚛️ **React 19** с TypeScript
- 🎨 **Tailwind CSS 4** для стилизации
- 🎭 **Framer Motion** для плавных анимаций
- 📱 **Полностью адаптивный** дизайн
- ♿️ **Доступность** (accessibility) из коробки
- 🎯 **Компоненты из ReactBits** для современного UI
- 📦 **Статическая генерация** для GitHub Pages
- 🔧 **ESLint** и строгий TypeScript

---

## 🚀 Быстрый старт

### Требования

- Node.js >= 18.0.0
- npm >= 9.0.0

### Установка

```bash
# Клонировать репозиторий
git clone https://github.com/orskiyghost-png/Sur.git
cd Sur

# Установить зависимости
npm install

# Запустить dev сервер
npm run dev
```

Откройте http://localhost:3000 в браузере.

---

## 📜 Доступные команды

| Команда | Описание |
|---------|----------|
| `npm run dev` | Запуск development сервера на порту 3000 |
| `npm run build` | Сборка production версии в `dist/` |
| `npm run preview` | Предпросмотр production сборки локально |
| `npm run lint` | Запуск ESLint для проверки кода |

---

## 📁 Структура проекта

```
Sur/
├── public/              # Статические файлы
│   ├── images/         # Публичные изображения
│   └── fonts/          # Шрифты
├── src/
│   ├── assets/         # Оптимизированные медиа
│   ├── components/     # React компоненты
│   │   ├── ui/        # UI компоненты из ReactBits
│   │   ├── animations/# Анимационные компоненты
│   │   └── layout/    # Header, Footer, Navigation
│   ├── sections/       # Секции страницы
│   │   ├── Hero/      # Главная секция
│   │   ├── About/     # О себе
│   │   ├── Portfolio/ # Портфолио/проекты
│   │   ├── Skills/    # Навыки
│   │   └── Contact/   # Контакты
│   ├── data/          # Данные (проекты, навыки, тексты)
│   ├── hooks/         # Кастомные React хуки
│   ├── utils/         # Вспомогательные функции
│   ├── styles/        # Глобальные стили
│   ├── types/         # TypeScript типы
│   ├── App.tsx        # Главный компонент
│   └── main.tsx       # Точка входа
├── index.html          # HTML шаблон
├── vite.config.ts      # Конфигурация Vite
├── tailwind.config.js  # Конфигурация Tailwind
├── tsconfig.json       # Конфигурация TypeScript
└── package.json        # Зависимости и скрипты
```

---

## 🛠️ Технологический стек

### Core
- [React 19.3.1](https://react.dev/) - UI библиотека
- [TypeScript 5.5.3](https://www.typescriptlang.org/) - Типизация
- [Vite 8.3.7](https://vitejs.dev/) - Build tool

### Styling & Animation
- [Tailwind CSS 4.3.5](https://tailwindcss.com/) - Утилитарный CSS
- [Framer Motion 14.11.1](https://www.framer.com/motion/) - Библиотека анимаций
- PostCSS + Autoprefixer - Обработка CSS

### Development
- ESLint - Линтинг кода
- TypeScript ESLint - TypeScript специфичный линтинг

### UI Components
- [ReactBits](https://reactbits.dev/) - Коллекция React компонентов и эффектов

---

## 🎨 Дизайн-система

### Цветовая палитра

Основана на голубых оттенках (`primary`), определённых в `tailwind.config.js`:
- `primary-50` до `primary-950` - 11 оттенков синего

### Типографика

- **Основной шрифт:** Inter
- **Заголовки:** Poppins

### Анимации

Предустановленные анимации:
- `animate-fade-in` - Плавное появление
- `animate-slide-up` - Скольжение вверх
- `animate-slide-down` - Скольжение вниз  
- `animate-scale-in` - Масштабирование

---

## 📦 Деплой на GitHub Pages

Проект настроен для развёртывания на GitHub Pages.

### Автоматический деплой (будет настроен)

После push в `main` ветку GitHub Actions автоматически:
1. Соберёт проект (`npm run build`)
2. Развернёт содержимое `dist/` на GitHub Pages

### Ручной деплой

```bash
# Собрать проект
npm run build

# Результат в папке dist/ готов к деплою
```

---

## 🤝 Вклад в проект

Этот проект находится в активной разработке. Для ИИ-агентов и разработчиков, работающих с проектом, смотрите [AGENTS.md](./AGENTS.md) для подробных правил и гайдлайнов.

---

## 📝 Лицензия

MIT License - смотрите [LICENSE](./LICENSE) для деталей.

---

## 👤 Автор

Создано для Surkove.ru

---

## 📞 Контакты

- 🌐 Сайт: https://www.surkove.ru
- 💻 GitHub: https://github.com/orskiyghost-png/Sur

---

**Создано с ❤️ используя React, TypeScript и Vite**