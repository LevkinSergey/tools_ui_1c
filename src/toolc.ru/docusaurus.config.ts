import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title:
    "Универсальные инструменты 1С — 30+ инструментов для разработчика 1С:Предприятие",
  tagline:
    "Набор внешних обработок и расширений для 1С:Консоль запросов, редакторы JSON/HTML/СКД, групповая обработка, удаление помеченных и другие утилиты",
  favicon: "img/favicon.ico",

  // Установите правильный URL вашего сайта
  url: "https://cpr1c.github.io",
  baseUrl: "/",
  baseUrlIssueBanner: true,

  // GitHub Pages деплой
  organizationName: "cpr1c",
  projectName: "tools_ui_1c",
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Даже если вы не используете международную локализацию, используйте это поле
  i18n: {
    defaultLocale: "ru",
    locales: ["ru"],
    localeConfigs: {
      ru: {
        htmlLang: "ru-RU",
      },
    },
  },

  trailingSlash: false,

  // Глобальные метатеги для SEO
  headTags: [
    // Meta keywords
    {
      tagName: "meta",
      attributes: {
        name: "keywords",
        content:
          "1С инструменты, 1С разработка, 1С администрирование, консоль запросов 1С, редактор JSON 1С, 1С Предприятие, внешние обработки 1С, 1С утилиты, 1С отладка, БСП, универсальные инструменты 1С, tools_ui_1c",
      },
    },
    // Meta author
    {
      tagName: "meta",
      attributes: {
        name: "author",
        content: "Сообщество разработчиков 1С",
      },
    },
    // Meta robots
    {
      tagName: "meta",
      attributes: {
        name: "robots",
        content: "index, follow",
      },
    },
    // Open Graph: тип контента
    {
      tagName: "meta",
      attributes: {
        property: "og:type",
        content: "website",
      },
    },
    // Open Graph: локаль
    {
      tagName: "meta",
      attributes: {
        property: "og:locale",
        content: "ru_RU",
      },
    },
    // Twitter Card: тип
    {
      tagName: "meta",
      attributes: {
        name: "twitter:card",
        content: "summary_large_image",
      },
    },
    // Canonical URL будет добавлен автоматически Docusaurus
  ],

  // Настройки для улучшения SEO
  customFields: {
    // Ключевые преимущества для сниппетов
    features: [
      "30+ инструментов для 1С",
      "Интеграция с БСП",
      "Открытый исходный код (GPL-3.0)",
      "Кроссплатформенность (Windows, Linux)",
      "Поддержка платформы 8.3.12+",
    ],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Укажите путь к редактированию документов
          editUrl:
            "https://github.com/cpr1c/tools_ui_1c/tree/develop/src/tools.ru/",
          // Показывать последние обновления
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: false, // Отключаем блог, если не нужен
        pages: false, // Отключаем pages в пресете, чтобы добавить с кастомными настройками
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-pages",
      {
        path: "./src/pages/landing",
        routeBasePath: "/",
        include: ["**/*.tsx"],
        exclude: ["**/components/**"],
      },
    ],
    // Плагин для sitemap
    [
      "@docusaurus/plugin-sitemap",
      {
        id: "sitemap",
        lastmod: "datetime",
        changefreq: "weekly",
        priority: 0.5,
      },
    ],
  ],

  themeConfig: {
    // Изображение для Open Graph (показывается при шеринге в соцсетях)
    image: "img/og-image.svg",
    metadata: [
      // Базовые мета-теги
      {
        name: "description",
        content:
          "Универсальные инструменты 1С — более 30 бесплатных инструментов для разработки, администрирования и отладки конфигураций 1С:Предприятие 8.3",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      // Open Graph: заголовок
      {
        property: "og:title",
        content:
          "Универсальные инструменты 1С — 30+ инструментов для разработчика",
      },
      // Open Graph: описание
      {
        property: "og:description",
        content:
          "Консоль запросов, редакторы JSON/HTML/СКД, групповая обработка, удаление помеченных, поиск дублей и другие утилиты для 1С:Предприятие",
      },
      // Open Graph: изображение
      {
        property: "og:image",
        content: "/tools_ui_1c/img/og-image.svg",
      },
      // Open Graph: URL
      {
        property: "og:url",
        content: "https://cpr1c.github.io/tools_ui_1c/",
      },
      // Open Graph: сайт
      {
        property: "og:site_name",
        content: "Универсальные инструменты 1С",
      },
      // Twitter: заголовок
      {
        name: "twitter:title",
        content:
          "Универсальные инструменты 1С — 30+ инструментов для разработчика",
      },
      // Twitter: описание
      {
        name: "twitter:description",
        content:
          "Консоль запросов, редакторы JSON/HTML/СКД, групповая обработка и другие утилиты для 1С:Предприятие",
      },
      // Twitter: изображение
      {
        name: "twitter:image",
        content: "/tools_ui_1c/img/og-image.svg",
      },
      // Google Scholar (для научного индексирования)
      {
        name: "citation_title",
        content: "Универсальные инструменты 1С",
      },
      // Рейтинг для Яндекс
      {
        name: "yandex-verification",
        content: "your-verification-code", // Замените на ваш код из Яндекс.Вебмастер
      },
      // Google Search Console
      {
        name: "google-site-verification",
        content: "your-verification-code", // Замените на ваш код из Google Search Console
      },
    ],
    // Замените на ваш логотип
    navbar: {
      title: "Универсальные инструменты 1С",
      logo: {
        alt: "Логотип Универсальные инструменты 1С — набор инструментов для разработчика 1С:Предприятие",
        src: "img/logo.png",
        srcDark: "img/logodark.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Документация",
        },
        {
          type: "docSidebar",
          sidebarId: "contributiongSidebar",
          position: "left",
          label: "Контрибьютерам",
        },
        {
          href: "https://github.com/cpr1c/tools_ui_1c",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://t.me/tools_ui_1c",
          label: "Telegram",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Документация",
          items: [
            {
              label: "Инструменты",
              to: "/docs/instruments/overview",
            },
            {
              label: "Интеграция",
              to: "/docs/integration/bsp",
            },
            {
              label: "Разработка",
              to: "/docs/development/contributing",
            },
          ],
        },
        {
          title: "Сообщество",
          items: [
            {
              label: "Telegram чат",
              href: "https://t.me/tools_ui_1c",
            },
            {
              label: "GitHub Issues",
              href: "https://github.com/cpr1c/tools_ui_1c/issues",
            },
          ],
        },
        {
          title: "Поддержка",
          items: [
            {
              label: "Поддержать проект",
              href: "https://donate.stream/ya410011848843350",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Универсальные инструменты 1С. Лицензия <a href="https://www.gnu.org/licenses/gpl-3.0.html" target="_blank" rel="noopener">GPL-3.0</a>.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["bash", "json", "typescript", "tsx"],
    },
    // Настройки для поисковой выдачи
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
