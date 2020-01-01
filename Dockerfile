FROM node:erbium-alpine3.9

RUN mkdir -p /docker/test

WORKDIR /docker/test

COPY package.json ./

RUN npm install

COPY . ./
EXPOSE 3000

CMD ["node", "index.js"]