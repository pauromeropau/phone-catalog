# pull official base image
FROM node:8.7.0-alpine

# description
LABEL maintainer="Paula Romero pauromeropau@gmail.com" 
LABEL version="1.0"
LABEL description="Guidesmiths test"

# set working directory
WORKDIR /client

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./

RUN npm install

# add app
COPY . ./

CMD ["npm", "start"]


# FROM node:lts-slim

# RUN mkdir -p /usr/src/app

# WORKDIR /usr/src/app

# EXPOSE 3000

# CMD [ "npm", "start" ]