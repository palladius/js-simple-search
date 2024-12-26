# No, let's use a more recent Node version
FROM node:20-alpine

WORKDIR /app

COPY . /app

RUN npm install

CMD ["node", "server.js"]
