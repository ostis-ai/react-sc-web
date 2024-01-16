# SCWeb

### Environment

The following .env example file is required for the correct work of the application.

```
PORT=3000
SC_URL="ws://localhost:8090/ws_json"
API_URL="http://localhost:8000"
```

### Installation

The installation process should be done with `npm install`.

### Running locally

Application starts with `npm start` on port 3000.

**IMPORTANT!!!**

Before start react-sc-web install and start
[**ostis-web-platform**](https://github.com/ostis-ai/ostis-web-platform).

To start the platform use next commands:

```sh
# Launch knowledge processing machine
cd ostis-web-platform
./scripts/run_sc_server.sh
# *or launch in docker*
docker compose run -p 8090:8090 machine
# *in another terminal*
cd sc-web
git checkout feature/add-scg-iframe
./scripts/build_sc_web.sh
# Launch semantic web interface
python3 sc-web/server/app.py --allowed_origins=http://localhost:3000
```

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
├── tsconfig.json
└── tsconfig.json
```
