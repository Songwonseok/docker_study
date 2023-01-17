FROM node:10

WORKDIR /user/src/app

COPY package.json ./

RUN npm install

COPY ./* ./

CMD ["node", "server.js"]