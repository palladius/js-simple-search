# No, let's use a more recent Node version
FROM node:20-alpine

ENV APPNAME "js-ring-2025"
ENV DESCRIPTION "Questo gira su https://url-ring-rjjr63dzrq-ew.a.run.app/"
ENV CRUN_URL_FUNGE "https://url-ring-rjjr63dzrq-ew.a.run.app/"
ENV GDOC "https://docs.google.com/document/d/1gN5f2-9vNwvgS4H029dp6vrPTP2rQU9SnvMToYrq2Ec/edit"

WORKDIR /app

COPY . /app

# If you want this, first add `npm init` and add your deps.
#RUN npm install

CMD ["node", "server.js"]
