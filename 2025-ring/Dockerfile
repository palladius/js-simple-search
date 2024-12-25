# No, let's use a more recent Node version
FROM node:20-alpine
#FROM node:14-alpine

WORKDIR /app

COPY . /app

RUN npm install -g serve

CMD ["serve", "-s", "."]
