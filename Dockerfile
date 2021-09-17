FROM node:14.17

WORKDIR /usr/src/app

COPY package*.json ./

EXPOSE 8080

RUN npm install

CMD npm run start