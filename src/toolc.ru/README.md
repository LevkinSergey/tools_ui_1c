# Сайт документации Универсальные инструменты 1С

Сайт документации для проекта [tools_ui_1c](https://github.com/cpr1c/tools_ui_1c), построенный на фреймворке [Docusaurus 3](https://docusaurus.io/).

## Быстрый старт

### Установка зависимостей

```bash
npm install
# или
pnpm install
```

### Запуск dev-сервера

```bash
npm run start
# или
pnpm start
```

Сайт будет доступен по адресу http://localhost:3000

### Сборка проекта

```bash
npm run build
# или
pnpm build
```

### Предпросмотр сборки

```bash
npm run serve
# или
pnpm serve
```

## Структура проекта

```
src/tools.ru/
├── docs/                    # Документы документации
│   ├── instruments/         # Документы инструментов
│   ├── integration/         # Интеграция с БСП
│   ├── api/                 # Программный интерфейс
│   ├── development/         # Для разработчиков
│   └── changelog/           # История версий
├── src/
│   ├── pages/               # Страницы (React)
│   ├── css/                 # Стили
│   └── components/          # Компоненты
├── static/                  # Статические файлы
│   └── img/                 # Изображения
├── docusaurus.config.ts     # Конфигурация Docusaurus
├── sidebars.ts              # Навигация (sidebar)
└── package.json             # Зависимости
```

## Добавление нового инструмента

1. Создайте новый файл в `docs/instruments/`:

```bash
docs/instruments/my-instrument.md
```

2. Добавьте заголовок с мета-данными:

```markdown
---
sidebar_position: X
title: Название инструмента
description: Краткое описание
---

# Название инструмента

Описание...
```

3. Обновите `sidebars.ts`, добавив ссылку на новый документ.

## Деплой

Сайт автоматически деплоится на GitHub Pages при пуше в ветку `develop`.

Ручной деплой:

```bash
npm run deploy
# или
pnpm deploy
```

## Технологии

- [Docusaurus 3](https://docusaurus.io/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Markdown](https://www.markdownguide.org/)

## Вклад

Внесите свой вклад в документацию проекта! См. [руководство для контрибьютеров](https://cpr1c.github.io/tools_ui_1c/docs/development/contributing).

## Лицензия

GNU GPL v3.0
