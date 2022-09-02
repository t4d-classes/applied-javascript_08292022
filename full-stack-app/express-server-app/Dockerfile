FROM node:18.2.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --production

COPY . .

CMD [ "node", "index.js" ]

EXPOSE 80