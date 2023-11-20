FROM nginx

WORKDIR /usr/share/nginx/html
ENV APPNAME "js-simple-search"

COPY app/ /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
RUN pwd
RUN /usr/share/nginx/html/bin/docker-patch-index.sh
RUN cat index.html