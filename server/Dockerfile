# pull official base image
FROM node:8.7.0-alpine

# description
LABEL maintainer="Paula Romero pauromeropau@gmail.com" 
LABEL version="1.0"
LABEL description="Guidesmiths test"

WORKDIR /server

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD [ "npm", "start" ]

# FROM node:lts-slim

# RUN mkdir -p /usr/src/app

# WORKDIR /usr/src/app

# EXPOSE 5000

# # You can change this
# CMD [ "npm", "start" ]