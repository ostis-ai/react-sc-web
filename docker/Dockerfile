FROM node:23-slim as build

WORKDIR /sc-web
COPY [ "package.json", "package-lock.json", "tsconfig.json", "./" ]

RUN npm install

COPY . .

ARG SC_URL
ARG API_URL

RUN npm run build

FROM caddy:2.10-alpine as final

COPY --from=build /sc-web/build/ /sc-web/build/
