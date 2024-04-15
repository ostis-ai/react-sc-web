# React sc-web

### Quick start (recommended)

Go to the [OSTIS Metasystem](https://github.com/ostis-ai/ostis-metasystem), checkout to the `demo` branch and follow installation and run instructions.

### Run in another system

#### Build and run with **Docker** (using [ostis-web-platform](https://github.com/ostis-ai/ostis-web-platform))

Change the docker-compose.yml using any editor to allow the origin of react-sc-web:

```yaml
services:
  web:
    image: ostis/sc-web:0.8.1-Unlock
    build:
      context: ./sc-web
    restart: unless-stopped
    command:
      - '--server-host=machine'
      - '--allowed_origins=http://localhost:3000' # <- add this line
    ports:
      - '8000:8000'
```

Then proceed in the terminal:

```sh
docker compose run machine build # build kb
docker compose up # or run just the machine / web service, e.g. docker compose up machine
```

#### Install react-sc-web

```sh
git clone git@github.com:ostis-ai/react-sc-web.git
cd react-sc-web
./scripts/install_react_sc_web_dependencies.sh
```

#### Run sc-web with allowed_origins

```sh
cd sc-web
python3 server/app.py" --allowed_origins=http://localhost:3000
```

#### Run react-sc-web

```sh
cd react-sc-web
./scripts/run_react_sc_web.sh
```

Application starts on port 3000.

### Creating production build

To create production build run `npm run build`.\
The build result is additionally gzipped to minimize the file size as much as possible.

### Recommendations

The following IDE extensions are recommended for use.\
[Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) is a great help to avoid typos when naming variables and functions.\
To analyze the code and find problems according to the given rules, described in .eslintrc.js file a [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) is used.\
[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) is used to ensure that the overall style of the code is followed throughout the project. This extension is integrated with ESLint, but can have its own rules described in .prettierrc file.

### Files structure

```
├── public
│   └── index.html (template)
├── src
│   ├── @types
|   ├── api
│   ├── assets
│   ├── components
│   ├── constants
│   ├── hooks
│   ├── model
│   ├── pages
│   ├── store
│   ├── utils
│   └── index.ts (entry point)
├── webpack
│   ├── webpack.config.js
│   ├── webpack.dev.js
│   └── webpack.prod.js
├── .env
├── .eslintrc.js
├── .gitignore
├── .prettierrc
├── README.md
├── package-lock.json
├── package.json
└── tsconfig.json
```
