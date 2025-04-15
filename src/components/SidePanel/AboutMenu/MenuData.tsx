import { IRawMenuItem } from './Menu';

export const AboutIntro = `
## Метасистема OSTIS

*Метасистема OSTIS* (Open Semantic Technology for Intelligent Systems) — это открытый проект, основной целью которого является разработка и внедрение *массовой семантической технологии* для *компонентного проектирования* интеллектуальных систем различного назначения. Технология OSTIS направлена на интеграцию традиционных информационных технологий и технологий искусственного интеллекта для решения проблемы *семантической совместимости* современных компьютерных систем.

### Функциональное назначение и роль Метасистемы OSTIS

*Метасистема OSTIS* выполняет центральную роль в *Экосистеме OSTIS*, обеспечивая поддержку следующих процессов:

*   *Компонентное проектирование*. Предоставление формальных методов, моделей и инструментальных средств для разработки новых интеллектуальных систем на основе принципов *компонентного подхода* и многократного использования ресурсов.
*   *Интеграция*. Обеспечение семантической и технологической основы для включения разработанных *ostis-систем* в единую *Экосистему OSTIS*, гарантируя их *совместимость*.
*   *Эволюция*. Поддержка процессов реинжиниринга, модификации и замены компонентов в существующих системах экосистемы, способствуя их непрерывному развитию.
*   *Реализация и развитие Технологии OSTIS*. *Метасистема* является практической реализацией формальной теории и *технологии проектирования интеллектуальных систем OSTIS*, обеспечивая их верификацию, уточнение и *эволюцию*.

Основной целью разработки *Метасистемы OSTIS* является создание и внедрение методологии и инструментария для *компонентного проектирования* *семантически совместимых* интеллектуальных систем.

### Структура Метасистемы OSTIS

В состав *Метасистемы OSTIS* входят:

*   *Формализованное описание Технологии OSTIS*. Включает теорию *ostis-систем*, модели их компонентов и принципы функционирования.
*   *Стандарт OSTIS*. Совокупность спецификаций, моделей, соглашений и ограничений, регламентирующих процесс разработки *семантически совместимых* *ostis-систем*. Является неотъемлемой частью *Базы знаний Метасистемы OSTIS*.
*   *Библиотека OSTIS*. Постоянно пополняемая интегрированная совокупность типовых, *реиспользуемых* *формальных моделей* (*онтологий*, *моделей предметных областей*, *моделей решения задач*) и программных компонентов (*агентов*, реализующих *методы решения задач*), предназначенных для использования при проектировании *ostis-систем*.
*   Модель *эволюции Технологии OSTIS*. Формализованное представление истории развития технологических решений.
*   Правила использования *Технологии OSTIS*.

### Принципы реализации Метасистемы OSTIS

Основу *Метасистемы OSTIS*, как и любой *ostis-системы*, составляет *база знаний (БЗ)*, представляющая собой унифицированную *семантическую модель (sc-модель)*. Данная модель формализована с использованием *SC-кода* — базового языка внутреннего представления знаний в *ostis-системах*, основанного на теории множеств и теории графов. Интерпретация *sc-модели* осуществляется *универсальным интерпретатором*, что обеспечивает инвариантность к конкретным программно-аппаратным платформам.
`;

export const rawMenuItems: IRawMenuItem[] = [
  {
    title: { en: 'Project Overview', ru: 'Обзор проекта' },
    text: {
      en: 'General description of the current project.',
      ru: `## Обзор Проекта
  
  Краткое описание целей, задач и структуры текущего проекта, построенного на базе OSTIS.`,
    },
    children: [
      {
        title: { en: 'Goals', ru: 'Цели' },
        text: {
          en: 'Project specific goals.',
          ru: `### Цели Проекта
  
  - Демонстрация возможностей Технологии OSTIS на конкретном примере.
  - Предоставление интерактивного интерфейса для взаимодействия с базой знаний.
  - Реализация специфических функций... (добавить конкретные цели этого проекта).`,
        },
        children: null,
      },
      {
        title: { en: 'Features', ru: 'Возможности' },
        text: {
          en: 'Key features of this application.',
          ru: `### Возможности
  
  - Визуализация фрагментов базы знаний.
  - Интеллектуальный поиск информации в базе знаний.
  - Выполнение специфических для проекта задач... (добавить конкретные возможности).`,
        },
        expanded: false, // Пример: по умолчанию свернуто
        children: [
          {
            title: { en: 'Feature A', ru: 'Возможность А' },
            text: {
              en: 'Details about Feature A.',
              ru: `#### Детали о Возможности А
  
  Подробное описание конкретной функции или компонента.`,
            },
            children: null,
          },
        ],
      },
    ],
    expanded: true, // Пример: по умолчанию развернуто
  },
  {
    title: { en: 'OSTIS Technology', ru: 'Технология OSTIS' },
    text: {
      en: 'OSTIS (Open Semantic Technology for Intelligent Systems) is a technology for designing intelligent systems based on semantic representation of knowledge.',
      ru: `## Технология OSTIS
  
  OSTIS (Open Semantic Technology for Intelligent Systems) - технология проектирования интеллектуальных систем, основанная на **семантическом представлении знаний** [2].
  
  Системы, построенные по технологии OSTIS (**ostis-системы**), включают:
  
  *   **Базу Знаний (Knowledge Base):** Хранит факты, правила и связи в виде семантической сети с использованием SC-кода (\`.scs\`, \`.gwf\`) [3].
  *   **Машину Обработки Знаний (Knowledge Processing Machine):** Программно-аппаратный комплекс для хранения и обработки знаний. Ключевой компонент - **sc-машина** [4].
  *   **Решатель Задач (Problem Solver):** Набор агентов (например, на C++), реализующих логику системы и взаимодействующих с базой знаний [3].
  *   **Интерфейс Пользователя (User Interface):** Обычно веб-интерфейс (например, **sc-web**) для взаимодействия с пользователем, визуализации знаний и выполнения запросов [3].`,
    },
    expanded: false,
    children: [
      {
        title: { en: 'Key Concepts', ru: 'Ключевые Концепции' },
        text: {
          en: 'Semantic representation, knowledge base, problem solver agents, sc-code.',
          ru: `### Ключевые Концепции
  
  - **Семантическое Представление:** Знания представляются в виде семантических сетей (графов), где узлы - понятия, а дуги - отношения между ними.
  - **SC-код (Semantic Code):** Язык для формального описания семантических сетей и знаний.
  - **База Знаний (БЗ):** Совокупность знаний системы, представленная в SC-коде [3]. Рассматривается как иерархическая система формальных моделей и онтологий [2].
  - **Агенты:** Компоненты решателя задач, выполняющие определенные операции над базой знаний [3].
  - **SC-машина:** Программный пакет, эмулирующий поведение семантического компьютера для хранения и обработки знаний в семантической сети [4].`,
        },
        children: null,
      },
      {
        title: { en: 'OSTIS Standard', ru: 'Стандарт OSTIS' },
        text: {
          en: 'The OSTIS Standard defines the principles and models for semantic representation.',
          ru: `### Стандарт Технологии OSTIS
  
  Репозиторий [ostis-standard](https://github.com/ostis-ai/ostis-standard) содержит исходные файлы документации Технологии OSTIS, оформленные в виде исходного текста Базы знаний Метасистемы OSTIS [2].
  
  *   Представляет собой иерархическую систему связанных между собой формальных моделей предметных областей и соответствующих им онтологий [2].
  *   Рассматривается как проект стандарта семантических моделей интеллектуальных компьютерных систем [2].
  *   Исходный текст разрабатывается с помощью LaTeX со специальными командами для оформления в виде текстов баз знаний [2].
  
  **Установка (для просмотра/сборки стандарта):**
  \`\`\`bash
  git clone https://github.com/ostis-ai/ostis-standard.git
  cd ostis-standard
  git submodule update --init --recursive
  # Установка TexLive и редактора (Texmaker/TeXstudio) для Linux
  sudo apt-get update
  sudo apt install texlive-full texmaker
  # или
  sudo add-apt-repository ppa:sunderme/texstudio
  sudo apt update && sudo apt install texstudio
  \`\`\`[2]`,
        },
        children: null,
      },
      {
        title: { en: 'SC-Machine', ru: 'SC-Машина' },
        text: {
          en: 'The core component responsible for knowledge processing.',
          ru: `### SC-Машина
  
  Репозиторий: [ostis-ai/sc-machine](https://github.com/ostis-ai/sc-machine)
  
  *   **Назначение:** Программный пакет, эмулирующий поведение семантического компьютера путем хранения и обработки знаний в семантической сети [4].
  *   **Ключевые функции:** Загрузка базы знаний, выполнение запросов, поддержка работы агентов.
  *   **Документация:** Полная документация распространяется в виде PDF (скомпилированный SCn-TeX документ) [4]. Упрощенная документация доступна через MkDocs (\`pip3 install mkdocs mkdocs-material && mkdocs serve\` в репозитории) [4].`,
        },
        children: null,
      },
      {
        title: { en: 'Example Application', ru: 'Пример Приложения (ostis-example-app)' },
        text: {
          en: 'A template application demonstrating OSTIS principles.',
          ru: `### Пример Приложения: ostis-example-app
  
  Репозиторий: [ostis-apps/ostis-example-app](https://github.com/ostis-apps/ostis-example-app)
  
  Рабочий пример ostis-системы, служащий отправной точкой для разработчиков [3].
  
  **Компоненты:**
  *   **База знаний:** Файлы \`.scs\`, \`.gwf\`.
  *   **Решатель задач:** Агенты на C++.
  *   **Интерфейс:** Веб-интерфейс sc-web [3].`,
        },
        expanded: false,
        children: [
          {
            title: { en: 'Installation (Docker)', ru: 'Установка (Docker)' },
            text: {
              en: 'Recommended setup using Docker.',
              ru: `#### Установка (Docker - Рекомендуется)
  
  Требуется установленный Docker и Docker Compose [3].
  
  \`\`\`bash
  # Клонирование и переход в нужную версию (например, 0.10.0)
  git clone https://github.com/ostis-apps/ostis-example-app.git
  cd ostis-example-app
  git checkout 0.10.0
  git submodule update --init --recursive
  
  # Сборка Docker-образов
  docker compose build
  
  # Сборка базы знаний
  # Важно: перед первым запуском или после изменений в БЗ
  docker compose run --rm machine build
  
  # Запуск системы
  docker compose up
  # Система будет доступна по адресу localhost:8000
  
  # Остановка системы
  docker compose stop
  # или для полного удаления контейнеров
  docker compose down
  \`\`\`[3]
  *Примечание: Необходимо пересобирать базу знаний (шаг 'docker compose run --rm machine build') после изменений в файлах БЗ.*`,
            },
            children: null,
          },
          {
            title: { en: 'Installation (Native)', ru: 'Установка (Нативная)' },
            text: {
              en: 'Manual installation steps.',
              ru: `#### Установка (Нативная)
  
  Требуются: Git, Python 3.10+, pipx, CMake, Conan, C++ компилятор (поддерживающий C++17) [3].
  
  1.  **Установка инструментов:** Git, Python, pipx.
  2.  **Установка CMake и Conan:**
      \`\`\`bash
      pipx install cmake
      pipx install conan
      pipx ensurepath
      \`\`\`
  3.  **Клонирование репозитория (пример для 0.10.0):**
      \`\`\`bash
      git clone https://github.com/ostis-apps/ostis-example-app.git
      cd ostis-example-app
      git checkout 0.10.0
      git submodule update --init --recursive
      \`\`\`
  4.  **Перезапуск оболочки:** \`exec $SHELL\` (или просто откройте новый терминал).
  5.  **Установка C++ зависимостей (библиотеки sc-machine):**
      \`\`\`bash
      conan remote add ostis-ai https://conan.ostis.net/artifactory/api/conan/ostis-ai-library
      conan profile detect # Создаст стандартный профиль, если его нет
      conan install . --output-folder=build --build=missing
      \`\`\`
  6.  **Установка бинарных файлов sc-machine и scl-machine:**
      \`\`\`bash
      ./scripts/install_cxx_problem_solver.sh
      \`\`\`
  7.  **Установка sc-web (веб-интерфейс):**
      \`\`\`bash
      cd interface/sc-web
      # Для Ubuntu/Debian
      ./scripts/install_deps_ubuntu.sh
      # или для macOS
      # ./scripts/install_deps_macOS.sh
      npm install
      npm run build
      cd ../..
      \`\`\`[3]`,
            },
            children: null,
          },
          {
            title: { en: 'Building', ru: 'Сборка' },
            text: {
              en: 'Building the problem solver and knowledge base.',
              ru: `#### Сборка ostis-системы (Нативная установка)
  
  1.  **Сборка решателя задач (C++ агенты):**
      \`\`\`bash
      # Release режим (использует настройки из conan install)
      cmake --preset conan-release
      cmake --build --preset conan-release
  
      # Debug режим (если нужно, требует предварительного conan install с -s build_type=Debug)
      # conan install . --output-folder=build --build=missing -s build_type=Debug
      # cmake --preset conan-debug
      # cmake --build --preset conan-debug
      \`\`\`
  2.  **Сборка базы знаний:**
      \`\`\`bash
      # Убедитесь, что kb/repo.path существует и корректен
      ./install/sc-machine/bin/sc-builder -c --repo-path ./kb/repo.path -o ./kb.bin
      \`\`\`
      Файл \`repo.path\` указывает на директории с исходниками БЗ. Результат - \`kb.bin\` [3].`,
            },
            children: null,
          },
          {
            title: { en: 'Running', ru: 'Запуск' },
            text: {
              en: 'Starting the sc-machine and sc-web.',
              ru: `#### Запуск ostis-системы (Нативная установка)
  
  1.  **Запустить sc-machine (в одном терминале):**
      \`\`\`bash
      # Пути к расширениям могут зависеть от режима сборки (Release/Debug)
      ./install/sc-machine/bin/sc-machine --repo-path ./kb/repo.path -k ./kb.bin \\
      -e "./install/sc-machine/lib/extensions;./install/scl-machine/lib/extensions;./build/Release/extensions"
      \`\`\`
      Загружает \`kb.bin\` и указывает пути к расширениям (агентам).
  
  2.  **Запустить sc-web (в другом терминале):**
      \`\`\`bash
      cd interface/sc-web
      # Активировать виртуальное окружение, если оно используется
      # source .venv/bin/activate
      npm run start
      \`\`\`
  3.  **Открыть интерфейс:** \`localhost:8000\` (или порт, указанный sc-web) в браузере [3].
  
  Остановка: \`Ctrl+C\` в обоих терминалах.`,
            },
            children: null,
          },
        ],
      },
      {
        title: { en: 'Documentation', ru: 'Документация' },
        text: {
          en: 'Generating and viewing documentation.',
          ru: `### Документация
  
  Многие проекты OSTIS используют **MkDocs** для генерации локальной документации из Markdown файлов.
  
  **Общий процесс запуска:**
  1. Установить необходимые пакеты:
     \`\`\`bash
     pip3 install mkdocs mkdocs-material markdown-include # Могут быть и другие пакеты, см. README конкретного проекта
     \`\`\`
  2. Запустить сервер документации из корня репозитория:
     \`\`\`bash
     mkdocs serve
     \`\`\`
  3. Открыть указанный адрес (обычно \`http://127.0.0.1:8000\`, но может быть 8002, 8005 и т.д.) в браузере [1][3][4].
  
  Более полная и формальная документация по **Технологии OSTIS** и **sc-machine** доступна в виде PDF, скомпилированного из **SCn-TeX** [2][4].`,
        },
        children: null,
      },
      {
        title: { en: 'Troubleshooting', ru: 'Решение Проблем' },
        text: {
          en: 'Common issues and solutions.',
          ru: `### Решение Проблем (Troubleshooting)
  
  **Проблемы Windows:**
  
  *   Ошибка \`bash\\r: No such file or directory\`: Неправильные окончания строк Git (CRLF вместо LF). Решение:
      \`\`\`bash
      # В корне репозитория, перед клонированием подмодулей
      git config --global core.autocrlf input
      # Переклонировать репозиторий или обновить подмодули
      \`\`\` [1]
  *   Ошибка \`error: unable to create file ... (file too long)\`: Не включена поддержка длинных путей в Git и/или Windows. Решение:
      \`\`\`bash
      # В командной строке с правами администратора
      git config --system core.longpaths true
      \`\`\`
      Также может потребоваться включить длинные пути в реестре Windows. [1]
  
  **Общие проблемы Docker:**
  
  *   Ошибка \`status: the --mount option requires BuildKit\`: Необходимо включить Docker BuildKit [1].
      *   Windows PowerShell: \`$env:DOCKER_BUILDKIT = 1\` перед сборкой.
      *   Linux/macOS: \`export DOCKER_BUILDKIT=1\` перед сборкой.
      *   Или настроить в \`/etc/docker/daemon.json\` или через Docker Desktop UI.
  *   Контейнер \`problem-solver\` имеет статус \`unhealthy\`:
      *   **Решение 1:** Увеличить \`start_period\` в \`healthcheck\` секции для \`problem-solver\` в \`docker-compose.yml\` [1].
      *   **Решение 2:** Проверить логи контейнера (\`docker compose logs problem-solver\`) на наличие ошибок.
      *   **Решение 3:** Проверить известные проблемы (issues) в репозитории проекта или создать новую [1].
  *   Не скачиваются зависимости Conan в Docker: Проблемы с сетью или доступом к репозиторию Conan (\`conan.ostis.net\`).`,
        },
        children: null,
      },
    ],
  },
  {
    title: { en: 'Contact Info', ru: 'Контакты' },
    text: {
      en: 'How to get in touch...',
      ru: `## Контакты
  
  Информация о том, как связаться с разработчиками или сообществом OSTIS.
  
  *   **GitHub Организации:**
      *   [ostis-ai](https://github.com/ostis-ai) (Ядро технологии)
      *   [ostis-apps](https://github.com/ostis-apps) (Приложения и примеры)
      *   [ostis-dev](https://github.com/ostis-dev) (Инструменты разработки)
  *   **Issues:** Используйте раздел Issues в соответствующих репозиториях для сообщений об ошибках и предложений [4].
  *   **Сообщество:** (Указать ссылки на чаты/форумы, если есть).`,
    },
    children: null,
  },
];
