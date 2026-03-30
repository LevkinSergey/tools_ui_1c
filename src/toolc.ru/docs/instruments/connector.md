---
sidebar_position: 50
title: Коннектор HTTP
description: Удобный HTTP-клиент для 1С в стиле Python Requests
---

# Коннектор HTTP

Библиотека предоставляет удобный интерфейс для работы с HTTP-запросами в 1С. Вдохновлена популярной Python-библиотекой [Requests](http://docs.python-requests.org/en/master).

## Возможности

- Простой API в стиле Requests
- Поддержка всех методов HTTP (GET, POST, PUT, DELETE, PATCH)
- Автоматическая работа с JSON
- Поддержка прокси
- Работа с файлами
- Автоматическое кодирование данных

## Требования

- Платформа 1С: 8.3.12+
- Режим: Любой

## Использование

### Базовый GET-запрос

```bsl
// Простой GET-запрос
Результат = КоннекторHTTP.Get("https://api.github.com/users/octocat");

// GET с параметрами
Результат = КоннекторHTTP.Get(
    "https://api.github.com/search/repositories",
    Новый Структура("q", "language:javascript+stars:>10000")
);
```

### POST-запрос с JSON

```bsl
Данные = Новый Структура();
Данные.Вставить("name", "my-repo");
Данные.Вставить("description", "Мой репозиторий");

Результат = КоннекторHTTP.PostJson(
    "https://api.github.com/user/repos",
    Данные,
    Соединение
);
```

### Загрузка файла

```bsl
Результат = КоннекторHTTP.GetFile(
    "https://example.com/file.zip",
    "C:\\Downloads\\file.zip"
);
```

### Отправка файла

```bsl
Файл = Новый ДвоичныеДанные("C:\\file.txt");
Результат = КоннекторHTTP.PostFile(
    "https://api.example.com/upload",
    Файл,
    "file.txt"
);
```

## Программный интерфейс

Доступен через общий модуль `УИ_КоннекторHTTP`.

### Основные методы

```bsl
// GET запрос
КоннекторHTTP.Get(URL, Параметры, Соединение)

// POST запрос с JSON
КоннекторHTTP.PostJson(URL, Данные, Соединение)

// POST запрос с файлом
КоннекторHTTP.PostFile(URL, Файл, ИмяФайла, Соединение)

// PUT запрос
КоннекторHTTP.Put(URL, Данные, Соединение)

// DELETE запрос
КоннекторHTTP.Delete(URL, Соединение)
```

### Пример работы с ответом

```bsl
Ответ = КоннекторHTTP.GetJson("https://api.github.com/events");

// Проверка статуса
Если Ответ.StatusCode = 200 Тогда
    Данные = Ответ.Data;
    Для Каждого Событие Из Данные Цикл
        Сообщить(Событие.type);
    КонецЦикла;
КонецЕсли;
```

## Исходный проект и лицензия

- **Исходный проект:** [vbondarevsky/Connector](https://github.com/vbondarevsky/Connector)
- **Лицензия:** [Apache-2.0](https://github.com/vbondarevsky/Connector/blob/master/LICENSE)
- **Автор:** Владимир Бондаревский

## Ссылки

- [Документация оригинала](https://github.com/vbondarevsky/Connector)
- [Python Requests](http://docs.python-requests.org/en/master)
- [Issues проекта](https://github.com/cpr1c/tools_ui_1c/issues?q=Коннектор)
