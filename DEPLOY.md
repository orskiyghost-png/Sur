# Документация по деплою на GitHub Pages

## Настройка GitHub Pages

После первого push кода в репозиторий необходимо настроить GitHub Pages:

### Шаг 1: Включение GitHub Pages

1. Откройте репозиторий на GitHub: https://github.com/orskiyghost-png/Sur
2. Перейдите в **Settings** → **Pages**
3. В разделе **Source** выберите **GitHub Actions**
4. Сохраните изменения

### Шаг 2: Автоматический деплой

После push в ветку `main`:
1. GitHub Actions автоматически запустит workflow
2. Проект будет собран (`npm run build`)
3. Содержимое папки `dist/` развернётся на GitHub Pages
4. Сайт будет доступен по адресу: `https://orskiyghost-png.github.io/Sur/`

### Шаг 3: Настройка кастомного домена (www.surkove.ru)

1. В **Settings** → **Pages** найдите раздел **Custom domain**
2. Введите: `www.surkove.ru`
3. Дождитесь проверки DNS
4. Включите **Enforce HTTPS**

### Настройка DNS у регистратора домена

Добавьте следующие DNS записи:

```
CNAME: www.surkove.ru → orskiyghost-png.github.io
```

Или используйте A-записи для apex домена:

```
A: surkove.ru → 185.199.108.153
A: surkove.ru → 185.199.109.153
A: surkove.ru → 185.199.110.153
A: surkove.ru → 185.199.111.153
CNAME: www → orskiyghost-png.github.io
```

### Обновление base в vite.config.ts (при необходимости)

Если сайт будет доступен не в корне домена, обновите `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/Sur/', // Для https://orskiyghost-png.github.io/Sur/
  // или
  base: '/', // Для кастомного домена www.surkove.ru
  // ...
})
```

Текущая настройка: `base: '/'` (для кастомного домена)

## Проверка деплоя

1. Откройте **Actions** tab в репозитории
2. Найдите последний workflow run
3. Дождитесь завершения (зелёная галочка)
4. Откройте URL сайта

## Локальный предпросмотр production сборки

```bash
npm run build
npm run preview
```

## Troubleshooting

### Workflow не запускается
- Проверьте, что в Settings → Pages выбран **GitHub Actions**
- Убедитесь, что workflow файл находится в `.github/workflows/deploy.yml`

### 404 ошибка после деплоя
- Проверьте настройку `base` в `vite.config.ts`
- Убедитесь, что папка `dist/` содержит `index.html`

### Кастомный домен не работает
- Дождитесь распространения DNS (до 24-48 часов)
- Проверьте DNS записи с помощью `dig www.surkove.ru` или онлайн-инструментов
