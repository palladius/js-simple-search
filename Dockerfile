FROM nginx

#DIR /usr/share/nginx/html

COPY app/ /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
RUN pwd
RUN /usr/share/nginx/html/bin/docker-patch-index.sh
RUN cat index.html