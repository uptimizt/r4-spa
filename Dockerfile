FROM node:alpine

WORKDIR /app

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

RUN yarn install && yarn cache clean