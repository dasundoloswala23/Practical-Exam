# specify base image from dockerhub
FROM node:latest

WORKDIR /app

COPY . .

RUN npm install && npm cache clean --force

EXPOSE 8070

ENTRYPOINT [ "node","server.js" ]