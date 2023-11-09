FROM node:alpine AS base
WORKDIR /usr/app
COPY package.json yarn.lock ./
COPY src ./src
RUN npm install
EXPOSE 80
CMD [ "node", "src/index.js" ]