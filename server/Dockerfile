# pull official base image
FROM node:8.7.0-alpine

# description
LABEL maintainer="Paula Romero pauromeropau@gmail.com" 
LABEL version="1.0"
LABEL description="Soamee test"

# createdirectory
RUN mkdir -p /srv/app/phone-server

# set working directory
WORKDIR /srv/app/phone-server

# install app dependencies
COPY package.json /srv/app/phone-server
COPY package-lock.json /srv/app/phone-server

RUN npm install

# add app
COPY . /srv/app/phone-server

# EXPOSE 5000

CMD [ "npm", "start" ]
