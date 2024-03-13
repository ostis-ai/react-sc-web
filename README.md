# React sc-web

### Environment

The following .env example file is required for the correct work of the application.

You can copy the file _.env.example_ and rename it to the _.env_

```
PORT=3000
SC_URL="ws://localhost:8090/ws_json"
API_URL="http://localhost:8000"
```

### Quick start

To start the project you need to do four steps:

1. Install ostis-web-platform with correct branches
2. Build ostis-web-platform
3. Install react-sc-web
4. Run ostis-web-platform and react-sc-web

#### Install ostis-web-platform with correct branches

Installation instructions you can find in the repository [**ostis-web-platform**](https://github.com/ostis-ai/ostis-web-platform).

But you should use the following branches

- sc-machine - _main_
- sc-web - _feature/add-scg-iframe_
- ims.ostis.kb - _main_

To checkout these, use the following commands:

```sh
git clone https://github.com/ostis-ai/ostis-web-platform
cd ostis-web-platform
git checkout 0.9.0-Unlock
git clone https://github.com/ostis-ai/sc-web
cd sc-web && git fetch origin feature/add-scg-iframe && git checkout feature/add-scg-iframe && cd ..
```

#### Build and run ostis-web-platform

- ##### Natively (Debian-based distros only)

```sh
cd ostis-web-platform
./scripts/install_platform.sh

./scripts/run_sc_server.sh

# *in another terminal*
cd ostis-web-platform
python3 sc-web/server/app.py --allowed_origins=http://localhost:3000
```

- ##### Or with **Docker**

```sh
cd ostis-web-platform
./scripts/install_submodules.sh
docker compose pull
docker compose build web
```

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
cd ostis-web-platform
git clone git@github.com:ostis-ai/react-sc-web.git
cd react-sc-web
npm install
```

#### Run react-sc-web alongside ostis-web-platform

```sh
cd ostis-web-platform/react-sc-web
npm start
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
├── .env.example
├── .eslintrc.js
├── .gitignore
├── .prettierrc
├── README.md
├── package-lock.json
├── package.json
└── tsconfig.json
```
