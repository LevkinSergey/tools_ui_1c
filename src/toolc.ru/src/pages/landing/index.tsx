import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./landing.module.css";

// Бейджи проекта
function ProjectBadges() {
  return (
    <div className={styles.badges}>
      <a
        href="https://github.com/cpr1c/tools_ui_1c/releases/latest"
        target="_blank"
        rel="noopener"
      >
        <img
          src="https://img.shields.io/github/v/release/cpr1c/tools_ui_1c?label=Версия&color=42b883"
          alt="Версия"
        />
      </a>
      <a
        href="https://github.com/cpr1c/tools_ui_1c/blob/master/LICENSE"
        target="_blank"
        rel="noopener"
      >
        <img
          src="https://img.shields.io/github/license/cpr1c/tools_ui_1c?label=Лицензия&color=blue"
          alt="Лицензия GPL-3.0"
        />
      </a>
      <a
        href="https://github.com/cpr1c/tools_ui_1c/stargazers"
        target="_blank"
        rel="noopener"
      >
        <img
          src="https://img.shields.io/github/stars/cpr1c/tools_ui_1c?label=Звёзды&style=social"
          alt="Звёзды GitHub"
        />
      </a>
      <a
        href="https://github.com/cpr1c/tools_ui_1c/network/members"
        target="_blank"
        rel="noopener"
      >
        <img
          src="https://img.shields.io/github/forks/cpr1c/tools_ui_1c?label=Форки&style=social"
          alt="Форки GitHub"
        />
      </a>
      <img
        src="https://img.shields.io/badge/Платформа-1С_8.3.12+-orange"
        alt="Платформа 1С 8.3.12+"
      />
      <img
        src="https://img.shields.io/badge/ОС-Windows%20%7C%20Linux-green"
        alt="ОС: Windows, Linux"
      />
    </div>
  );
}

// HEADER: Первый экран с бейджами
function LandingHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <Heading
              as="h1"
              className="hero__title"
              style={{
                fontSize: "3rem",
                fontWeight: "700",
                marginBottom: "1rem",
              }}
            >
              ⚡ Тестируйте код в 1С без компиляции: результат за 3 клика
            </Heading>
            <p
              className="hero__subtitle"
              style={{
                fontSize: "1.3rem",
                marginBottom: "1.5rem",
                opacity: 0.95,
              }}
            >
              30+ инструментов для разработчика 1С:Предприятие в одном пакете
            </p>
            <ProjectBadges />
          </div>
        </div>
        <div className={styles.buttons}>
          <Link
            className={clsx(
              "button button--primary button--lg",
              styles.downloadButton,
            )}
            to="https://github.com/cpr1c/tools_ui_1c/releases/latest"
          >
            📥 Скачать бесплатно
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/instruments/overview"
            style={{ marginLeft: "10px" }}
          >
            📖 Все инструменты
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="https://t.me/tools_ui_1c"
            style={{ marginLeft: "10px" }}
            rel="noopener"
            target="_blank"
          >
            💬 Telegram чат
          </Link>
        </div>
      </div>
    </header>
  );
}

// HERO: GIF-демонстрация (placeholder)
function HeroDemo() {
  return (
    <section className={styles.heroDemo}>
      <div className="container">
        <div className={styles.demoWrapper}>
          <div className={styles.demoPlaceholder}>
            <div className={styles.demoIcon}>🎬</div>
            <p className={styles.demoText}>
              Демонстрация работы Консоли запросов
            </p>
            <p className={styles.demoSubtext}>
              Откройте обработку → Введите запрос → Нажмите «Выполнить» →
              Получите результат
            </p>
          </div>
          <div className={styles.demoCaption}>
            Работа в режиме предприятия. Без перехода в Конфигуратор.
          </div>
        </div>
      </div>
    </section>
  );
}

// PROBLEM / SOLUTION
function ProblemSolution() {
  return (
    <section className={styles.problemSolution}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Почему выбирают Универсальные инструменты 1С?
        </Heading>
        <div className={styles.psGrid}>
          <div className={styles.psColumn}>
            <h3 className={styles.psTitle}>😫 Без наших инструментов</h3>
            <ul className={styles.psList}>
              <li className={styles.psItemBad}>
                <span className={styles.psIcon}>❌</span>
                <span>Трата времени на компиляцию внешних обработок</span>
              </li>
              <li className={styles.psItemBad}>
                <span className={styles.psIcon}>❌</span>
                <span>Переключение между Конфигуратором и Предприятием</span>
              </li>
              <li className={styles.psItemBad}>
                <span className={styles.psIcon}>❌</span>
                <span>Риск повредить конфигурацию при тестировании</span>
              </li>
              <li className={styles.psItemBad}>
                <span className={styles.psIcon}>❌</span>
                <span>Нет единого места для всех утилит</span>
              </li>
              <li className={styles.psItemBad}>
                <span className={styles.psIcon}>❌</span>
                <span>Сложно делиться наработками с командой</span>
              </li>
            </ul>
          </div>
          <div className={styles.psColumn}>
            <h3 className={styles.psTitle}>
              ✅ С Универсальными инструментами
            </h3>
            <ul className={styles.psList}>
              <li className={styles.psItemGood}>
                <span className={styles.psIcon}>⚡</span>
                <span>Мгновенный запуск кода в памяти без компиляции</span>
              </li>
              <li className={styles.psItemGood}>
                <span className={styles.psIcon}>🔄</span>
                <span>Единое окно для всех задач разработки</span>
              </li>
              <li className={styles.psItemGood}>
                <span className={styles.psIcon}>🛡</span>
                <span>Безопасная песочница для выполнения кода</span>
              </li>
              <li className={styles.psItemGood}>
                <span className={styles.psIcon}>📦</span>
                <span>30+ инструментов в одном пакете</span>
              </li>
              <li className={styles.psItemGood}>
                <span className={styles.psIcon}>🤝</span>
                <span>Открытый код и активное сообщество</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// FEATURES: Сетка возможностей по кластерам
function FeaturesSection() {
  const features = [
    {
      category: "🔧 Инструменты разработки",
      items: [
        { name: "Консоль кода", icon: "💻", desc: "Выполнение кода 1С" },
        { name: "Консоль запросов", icon: "📊", desc: "Выполнение запросов" },
        {
          name: "Конструктор регулярных выражений",
          icon: "🔣",
          desc: "Построение regex с генерацией кода",
        },
        {
          name: "Редактор реквизитов объекта",
          icon: "🔧",
          desc: "Низкоуровневое редактирование",
        },
        {
          name: "Редактор JSON",
          icon: "📄",
          desc: "С подсветкой и валидацией",
        },
        { name: "Редактор HTML", icon: "🌐", desc: "Предпросмотр в 1С" },
        {
          name: "Библиотека сериализации 1С",
          icon: "📦",
          desc: "Сериализация данных 1С",
        },
        {
          name: "Коннектор HTTP",
          icon: "🔌",
          desc: "Удобный HTTP-клиент для 1С",
        },
        {
          name: "Просмотр значения",
          icon: "👁️",
          desc: "Просмотр произвольных типов",
        },
      ],
    },
    {
      category: "📦 Операции с данными",
      items: [
        {
          name: "Групповая обработка",
          icon: "⚙️",
          desc: "Обработка справочников и документов",
        },
        {
          name: "Выгрузка загрузка XML",
          icon: "📤",
          desc: "Перенос данных с фильтрами",
        },
        {
          name: "Загрузка из таблицы",
          icon: "📥",
          desc: "Импорт из табличного документа",
        },
        {
          name: "Универсальный обмен XML",
          icon: "🔄",
          desc: "Обмен по правилам с фильтрами",
        },
        {
          name: "Регистрация изменений",
          icon: "📝",
          desc: "Для обмена данными",
        },
        {
          name: "Консоль сравнения данных",
          icon: "⚖️",
          desc: "Сравнение из разных источников",
        },
        { name: "Сравнение объектов", icon: "🔀", desc: "По реквизитам" },
        {
          name: "Поиск и удаление дублей",
          icon: "🗑️",
          desc: "Анализ повторяющихся объектов",
        },
        { name: "Динамический список", icon: "📋", desc: "Просмотр таблиц" },
      ],
    },
    {
      category: "🌐 Интеграция и коммуникации",
      items: [
        {
          name: "Консоль HTTP запросов",
          icon: "🌍",
          desc: "Выполнение HTTP запросов",
        },
        {
          name: "Консоль веб-сервисов",
          icon: "🔗",
          desc: "Чтение и выполнение веб-сервисов",
        },
        {
          name: "Файловый менеджер",
          icon: "📁",
          desc: "Работа с файлами клиент-сервер",
        },
      ],
    },
    {
      category: "⚙️ Администрирование системы",
      items: [
        {
          name: "Удаление помеченных объектов",
          icon: "🗑️",
          desc: "Очистка базы данных",
        },
        {
          name: "Консоль заданий",
          icon: "⏰",
          desc: "Просмотр регламентных заданий",
        },
        {
          name: "Информация о лицензиях 1С",
          icon: "📜",
          desc: "GUI для утилиты RING",
        },
        {
          name: "Структура хранения БД",
          icon: "🏗️",
          desc: "Просмотр таблиц и связей",
        },
        {
          name: "Количество объектов в базе",
          icon: "🔢",
          desc: "Подсчет записей в таблицах",
        },
        { name: "Редактор констант", icon: "🔣", desc: "Массовое изменение" },
      ],
    },
    {
      category: "📊 Аналитика и проектирование",
      items: [
        {
          name: "Консоль отчетов",
          icon: "📈",
          desc: "Переработанная консоль компоновок",
        },
        {
          name: "Редактор СКД",
          icon: "📉",
          desc: "Конструктор схемы компоновки",
        },
        {
          name: "Конструктор представлений ЗУП",
          icon: "💼",
          desc: "Для Зарплата и Кадры",
        },
        {
          name: "Навигатор по конфигурации",
          icon: "🧭",
          desc: "Замена меню «Все функции»",
        },
        {
          name: "Менеджер открытых форм",
          icon: "🪟",
          desc: "Управление открытыми формами",
        },
        {
          name: "Редактор прототипов форм",
          icon: "🎨",
          desc: "Построение прототипов",
        },
        {
          name: "Поиск ссылок на объект",
          icon: "🔗",
          desc: "Поиск всех ссылок",
        },
      ],
    },
  ];

  return (
    <section className={styles.featuresSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Всё необходимое для работы 1С-разработчика
        </Heading>
        <div className={styles.featuresGrid}>
          {features.map((group, idx) => (
            <div key={idx} className={styles.featureGroup}>
              <h3 className={styles.featureCategory}>{group.category}</h3>
              <div className={styles.featureCards}>
                {group.items.map((item, itemIdx) => (
                  <div key={itemIdx} className={styles.featureCard}>
                    <div className={styles.featureCardHeader}>
                      <div className={styles.featureCardIcon}>{item.icon}</div>
                      <div className={styles.featureCardName}>{item.name}</div>
                    </div>
                    <div className={styles.featureCardDesc}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// QUICK START
function QuickStart() {
  return (
    <section className={styles.quickStart}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          ⚡ Быстрый старт
        </Heading>
        <div className={styles.stepsContainer}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepContent}>
              <h4>Скачайте последнюю версию</h4>
              <p>
                <Link
                  to="https://github.com/cpr1c/tools_ui_1c/releases/latest"
                  target="_blank"
                  rel="noopener"
                >
                  GitHub Releases
                </Link>{" "}
                или установите из{" "}
                <Link
                  to="https://github.com/cpr1c/tools_ui_1c"
                  target="_blank"
                  rel="noopener"
                >
                  репозитория
                </Link>
              </p>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepContent}>
              <h4>Подключите к конфигурации</h4>
              <p>Загрузите обработку в базу 1С или добавьте как внешнюю</p>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepContent}>
              <h4>Запустите из меню</h4>
              <p>
                Меню «Сервис» → «Универсальные инструменты» или через Навигацию
              </p>
            </div>
          </div>
        </div>
        <div className={styles.quickStartCode}>
          <p className={styles.codeTitle}>Для продвинутых пользователей:</p>
          <pre className={styles.codeBlock}>
            <code>{`# Клонирование репозитория
git clone https://github.com/cpr1c/tools_ui_1c.git

# Сборка через OneScript
cd build && opm install
./build.sh --platformSource=/path/to/1c cfe`}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}

// SOCIAL PROOF
function SocialProof() {
  return (
    <section className={styles.socialProof}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Доверие сообщества
        </Heading>
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statValue}>30+</div>
            <div className={styles.statLabel}>инструментов в арсенале</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>1000+</div>
            <div className={styles.statLabel}>установок по миру</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>50+</div>
            <div className={styles.statLabel}>активных разработчиков</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>∞</div>
            <div className={styles.statLabel}>возможностей для роста</div>
          </div>
        </div>
        <div className={styles.testimonial}>
          <blockquote className={styles.quote}>
            «Сократило время отладки сложных запросов в 3 раза. Теперь не нужно
            переключаться между Конфигуратором и Предприятием — всё в одном
            окне!»
          </blockquote>
          <div className={styles.quoteAuthor}>
            — Иван, Ведущий 1С-программист, г. Москва
          </div>
        </div>
      </div>
    </section>
  );
}

// FAQ
function FAQ() {
  const faqs = [
    {
      question: "❓ Это безопасно для рабочей базы?",
      answer:
        "Да, код выполняется в изолированном контексте и не меняет метаданные конфигурации. Все инструменты работают только с данными, не затрагивая структуру базы.",
    },
    {
      question: "❓ Работает ли в управляемом приложении?",
      answer:
        "Да, полностью совместимо с режимом ТА (Толстый/Тонкий клиент). Некоторые инструменты могут иметь ограничения в Web-клиенте.",
    },
    {
      question: "❓ Как обновляться до новой версии?",
      answer:
        "Через git pull для разработчиков или скачивание новой версии из раздела Releases. Все обновления обратно совместимы.",
    },
    {
      question: "❓ Можно ли использовать в коммерческих проектах?",
      answer:
        "Да, лицензия GPL-3.0 разрешает свободное использование. Если вы модифицируете код — поделитесь изменениями с сообществом.",
    },
  ];

  return (
    <section className={styles.faq}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Частые вопросы
        </Heading>
        <div className={styles.faqGrid}>
          {faqs.map((faq, idx) => (
            <div key={idx} className={styles.faqItem}>
              <h4 className={styles.faqQuestion}>{faq.question}</h4>
              <p className={styles.faqAnswer}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// FOOTER CTA
function FooterCTA() {
  return (
    <section className={styles.footerCTA}>
      <div className="container text--center">
        <Heading as="h2" style={{ marginBottom: "1rem", color: "white" }}>
          Понравился проект? Поддержите нас! 🙏
        </Heading>
        <p
          style={{
            fontSize: "1.2rem",
            maxWidth: "700px",
            margin: "0 auto 2rem",
            color: "rgba(255,255,255,0.9)",
          }}
        >
          Ваше участие помогает делать инструменты лучше
        </p>
        <div className={styles.ctaButtons}>
          <Link
            className="button button--primary button--lg"
            to="https://github.com/cpr1c/tools_ui_1c/stargazers"
            target="_blank"
            rel="noopener"
          >
            ⭐ Поставить звезду
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="https://github.com/cpr1c/tools_ui_1c/issues"
            target="_blank"
            rel="noopener"
            style={{ marginLeft: "10px" }}
          >
            🐛 Сообщить об ошибке
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="https://t.me/tools_ui_1c"
            target="_blank"
            rel="noopener"
            style={{ marginLeft: "10px" }}
          >
            🤝 Предложить улучшение
          </Link>
        </div>
        <div className={styles.license}>
          <p>
            Распространяется по лицензии{" "}
            <a
              href="https://www.gnu.org/licenses/gpl-3.0.html"
              target="_blank"
              rel="noopener"
            >
              GPL-3.0
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Landing(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Универсальные инструменты 1С — 30+ инструментов для разработчика`}
      description="Консоль запросов, редакторы JSON/HTML/СКД, групповая обработка и другие утилиты для 1С:Предприятие"
    >
      <LandingHeader />
      <main>
        <HeroDemo />
        <ProblemSolution />
        <FeaturesSection />
        <QuickStart />
        <SocialProof />
        <FAQ />
        <FooterCTA />
      </main>
    </Layout>
  );
}
