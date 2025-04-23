# Быстрый старт для разработчиков

> Сборка sc-machine невозможна на Windows.

Это руководство содержит краткую информацию для разработчиков, чтобы быстро начать работу с sc-machine. Вы всегда можете узнать больше о системе сборки sc-machine на [соответствующей странице ее документации](https://ostis-ai.github.io/sc-machine/build/build_system/).

## Установка проекта

Установите sc-machine через git:

```sh
git clone https://github.com/ostis-ai/sc-machine
cd sc-machine
git submodule update --init --recursive
```

## Проверка CMake

Сначала установите pipx, используя [**руководство по установке pipx**](https://pipx.pypa.io/stable/installation/), если он еще не установлен.

Убедитесь, что используете **CMake версии 3.24** или новее. Проверьте вашу версию командой:

```sh
cmake --version
```

Для обновления CMake выполните:

```sh
# Use pipx to install cmake if not already installed
pipx install cmake
pipx ensurepath
# relaunch your shell after installation
exec $SHELL
```

Установите генератор Ninja для CMake, чтобы использовать пресеты sc-machine:

```sh
# Use pipx to install ninja if not already installed
pipx install ninja
pipx ensurepath
# relaunch your shell after installation
exec $SHELL
```

## Начало разработки sc-machine с использованием Conan

### Установка Conan

Установите Conan для сборки sc-machine с зависимостями, предоставляемыми Conan:

```sh
# Use pipx to install conan if not already installed
pipx install conan
pipx ensurepath
# relaunch your shell after installation
exec $SHELL
```

### Использование sc-machine в режиме Debug

#### Сборка sc-machine в режиме Debug

Для сборки sc-machine в режиме отладки с зависимостями от Conan выполните:

```sh
# debug build type
cmake --preset debug-conan
cmake --build --preset debug
```

> По умолчанию пресет `debug` включает сборку тестов sc-machine.

#### Запуск тестов sc-machine в режиме Debug

После этого перейдите в `build/Debug` и запустите тесты через `ctest`:

```sh
cd build/Debug
ctest -V
```

#### Запуск sc-machine в режиме Debug

```sh
# create empty knowledge base sources folder
mkdir kb
# note: at this stage you can move your KB sources to the ./kb folder

# build knowledge base
./build/Debug/bin/sc-builder -i kb -o kb.bin --clear
# run sc-machine
./build/Debug/bin/sc-machine -e build/Debug/lib/extensions -s kb.bin
```

### Использование sc-machine в режиме Release

#### Сборка sc-machine в режиме Release

Для сборки sc-machine в режиме релиза с зависимостями от Conan выполните:

```sh
# release build type without tests
cmake --preset release-conan
cmake --build --preset release
```

Для сборки sc-machine с тестами в режиме релиза с зависимостями от Conan выполните:

```sh
# release build type with tests
cmake --preset release-with-tests-conan
cmake --build --preset release
```

#### Запуск тестов sc-machine в режиме Release

После этого вы можете запустить тесты:

```sh
cd build/Release
ctest -V
```

#### Запуск sc-machine в режиме Release

```sh
# создайте пустую папку с исходниками базы знаний
mkdir kb
# на этом этапе вы можете переместить ваши исходники KB в папку ./kb

# сборка базы знаний
./build/Release/bin/sc-builder -i kb -o kb.bin --clear
# запуск sc-machine
./build/Release/bin/sc-machine -e build/Release/lib/extensions -s kb.bin
```

Вы также можете проверить форматирование кода, собрать sc-machine с санитайзерами и другое. Чтобы узнать больше, перейдите на [страницу документации sc-машины, описывающую CMake флаги](https://ostis-ai.github.io/sc-machine/build/cmake_flags/).

## Начало разработки sc-machine с системными зависимостями

### Установка зависимостей sc-machine

> sc-machine build system supports installation of dependencies for Ubuntu and macOS only.

#### Установка зависимостей sc-machine для Ubuntu

```sh
cd scripts
./install_deps_ubuntu.sh --dev
```

#### Установка зависимостей sc-machine для macOS

```sh
cd scripts
./install_deps_macOS.sh
```

#### Установка зависимостей sc-machine для других ОС

В настоящее время для сборки требуется наличие следующих пакетов:

- `java`
- `glib2`
- `websocketpp`
    - [`asio`](https://think-async.com/Asio/) как транзитивная зависимость
- `nlohmann_json`
- `xml2`

Вы можете попробовать установить эти зависимости на вашей ОС.

### Использование sc-machine в режиме Debug

#### Сборка sc-machine в режиме Debug

Для сборки sc-machine в режиме отладки с системными зависимостями выполните:

```sh
# debug build type
cmake --preset debug
cmake --build --preset debug
```

> По умолчанию пресет `debug` включает сборку тестов sc-machine.

#### Запуск тестов sc-machine в режиме Debug

После этого перейдите в `build/Debug` и запустите тесты через `ctest`:

```sh
cd build/Debug
ctest -V
```

#### Запуск sc-machine в режиме Debug

```sh
# создайте пустую папку с исходниками базы знаний
mkdir kb
# на этом этапе вы можете переместить ваши исходники KB в папку ./kb

# сборка базы знаний
./build/Debug/bin/sc-builder -i kb -o kb.bin --clear
# запуск sc-machine
./build/Debug/bin/sc-machine -e build/Debug/lib/extensions -s kb.bin
```

### Использование sc-machine в режиме Release

#### Сборка sc-machine в режиме Release

Для сборки sc-machine в режиме релиза с системными зависимостями выполните:

```sh
# release build type without tests
cmake --preset release
cmake --build --preset release
```

Для сборки sc-machine с тестами в режиме релиза с системными зависимостями выполните:

```sh
# release build type with tests
cmake --preset release-with-tests
cmake --build --preset release
```

#### Запуск тестов sc-machine в режиме Release

После этого вы можете запустить тесты:

```sh
cd build/Release
ctest -V
```

#### Запуск sc-machine в режиме Release

```sh
# создайте пустую папку с исходниками базы знаний
mkdir kb
# на этом этапе вы можете переместить ваши исходники KB в папку ./kb

# сборка базы знаний
./build/Release/bin/sc-builder -i kb -o kb.bin --clear
# запуск sc-machine
./build/Release/bin/sc-machine -e build/Release/lib/extensions -s kb.bin
```

Вы также можете проверить форматирование кода, собрать sc-machine с санитайзерами и другое. Чтобы узнать больше, перейдите на [страницу документации sc-машины, описывающую CMake флаги](https://ostis-ai.github.io/sc-machine/build/cmake_flags/).

# Contributing

Этот раздел описывает правила внесения изменений и добавления новых функций. Работа ведется через предложения изменения кода (Pull Request, далее сокращенно PR)

## Инициализация

Для инициализации вашего репозитория выполните:

* Сделайте форк репозитория `https://github.com/ostis-ai/sc-machine`.
* Клонируйте ваш форк на локальную машину.

```

git clone git@github.com:yourlogin/sc-machine.git
cd sc-machine
git remote add upstream git@github.com:ostis-ai/sc-machine.git

```

* Чтобы обновить вашу ветку `main` из `upstream`, используйте:

```

git fetch upstream
git checkout upstream/main

```

* Используйте `git rebase` вместо `merge`. Подробнее о команде можно узнать в [документации](https://git-scm.com/docs/git-rebase). Чтобы сделать ребейз вашей ветки относительно main, выполните:

```

git checkout <yourbranch>
git rebase upstream/main

```

* Если возникли проблемы, отмените ребейз командой:

```

git rebase --abort

```

* Или задайте вопрос в [Telegram](https://t.me/+HrKrqkgj0-w3Njgy).

## Формат сообщений коммитов

Каждое сообщение коммита должно иметь формат: `[tag1]...[tagN] Текст сообщения (#issue)`.

Текст сообщения должен начинаться с заглавной буквы. Если коммит не исправляет и не реализует никакую задачу (#issue), то номер задачи указывать не нужно.

Примеры:
```
[cpp] Colored log output
[cpp][test] Add unit test for ScEvent class
[kpm][search] Relation type check added
```

Возможные теги:

* `[build]` — изменения в системе сборки;
* `[memory]` — изменения в модуле `sc-memory`;
* `[kpm]` — изменения в модуле `sc-kpm`;
* `[tests]` или `[test]` — изменения в тестах;
* `[tools]` — изменения в `sc-tools`;
* `[server]` — изменения в модуле `sc-server`;
* `[builder]` — изменения в `sc-builder`;
* `[config]` — коммиты с изменениями конфигурации;
* `[review]` — коммиты с исправлениями по результатам ревью;
* `[refactor]` — рефакторинг кода;
* `[changelog]` — обновление changelog;
* `[docs]` или `[doc]` — обновление документации;
* `[docker]` — изменения в Dockerfile, .dockerignore или пайплайне сборки Docker-образа;
* `[scripts]` — обновления в файлах `sc-machine/scripts`;
* `[ci]` — изменения в конфигурации или скриптах CI;
* `[git]` — изменения в конфигурации git;
* `[cmake]` — изменения в системе сборки cmake.

Каждый коммит в PR должен быть атомарным, то есть реализовывать или исправлять одну конкретную функцию. Например:
```
Последний коммит
...
[cpp] Colored log output
[cpp] Add class to work with console
...
Первый коммит
```

В этом примере сначала добавляется класс для работы с консолью (где реализован цветной вывод), а в другом коммите — реализация цветного логирования.

***

Каждый коммит должен содержать минимальные изменения, за исключением случаев:

* Изменения стиля кода;
* Переименования;
* Форматирования кода.

**Делайте атомарные коммиты для каждого изменения.** Например, если вы переименовываете поля классов `ClassX` и `ClassY`, сделайте два коммита:
```
[refactor] Rename members in ClassX according to codestyle
[refactor] Rename members in ClassY according to codestyle
```

**Не смешивайте изменения стиля и логические исправления в одном коммите.**

Все коммиты, не соответствующие этим правилам, должны быть разделены. Иначе PR будет отклонён.

***

## Pull Request

### Подготовка Pull Request

- Ознакомьтесь с правилами создания PR в документации;
- Обновите лог измений;
- Обновите документацию;
- Покройте новый функционал тестами;
- Ваш код должен соответствовать [кодстайлу](https://ostis-ai.github.io/sc-machine/dev/codestyle/).

### Создание Pull Request

- Создайте PR на GitHub;
- Убедитесь, что все CI-проверки прошли успешно;

### Рецензиррование Pull Request

- Рецензент тестирует код из PR, если это не делает CI;
- Рецензент оставляет замечания в виде обсуждений;
- Автор вносит исправления в коммитах с тегом `Review fixes`;
- Автор повторно запрашивает ревью;
- Рецензент закрывает обсуждения и одобряет PR, если все замечания исправлены.
