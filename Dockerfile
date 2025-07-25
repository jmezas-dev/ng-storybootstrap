FROM node:24-alpine3.22 AS angular
LABEL authors="BranchbitLap"

WORKDIR /app

COPY . .
RUN npm install
RUN npm run build

FROM httpd:alpine3.22
WORKDIR /usr/local/apache2/htdocs
COPY --from=angular /app/dist/angular-20/browser .
