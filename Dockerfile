FROM node:lts-alpine

WORKDIR /usr/src/app
COPY vue.config.js .

RUN npm install -g npm @vue/cli

# EXPOSE 8080

CMD ["/bin/sh"]