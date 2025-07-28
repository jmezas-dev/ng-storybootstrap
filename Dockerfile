FROM node:lts-slim AS test

USER root

WORKDIR /app

RUN apt update
RUN apt-get install -y wget
RUN wget -q https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
RUN apt-get install -y ./google-chrome-stable_current_amd64.deb

COPY . .

RUN npm install -g @angular/cli

RUN npm install

ENTRYPOINT ["npm","run","test","--no-sandbox"]

FROM node:24-alpine3.22 AS build

LABEL authors="BranchbitLap"

WORKDIR /app

COPY . .
RUN npm install
RUN npm run build

FROM httpd:alpine3.22
WORKDIR /usr/local/apache2/htdocs
COPY --from=angular /app/dist/angular-20/browser .
