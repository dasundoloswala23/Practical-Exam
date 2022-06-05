# specify base image from dockerhub
FROM node:alpine AS development

WORKDIR /app
RUN npm install && npm cache clean --force
COPY . .
EXPOSE 3000

CMD [ "react","start" ]