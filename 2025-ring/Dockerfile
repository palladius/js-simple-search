FROM node:14-alpine

WORKDIR /app

COPY . /app

RUN npm install -g serve

CMD ["serve", "-s", "."]
