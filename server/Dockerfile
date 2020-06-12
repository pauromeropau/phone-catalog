# pull official base image
FROM node:8.7.0-alpine

# description
LABEL maintainer="Paula Romero pauromeropau@gmail.com" 
LABEL version="1.0"
LABEL description="Guidesmiths test"

# set working directory
WORKDIR /server

# install app dependencies
# COPY package*.json ./
COPY package.json /srv/app/server
COPY package-lock.json /srv/app/server

RUN npm install

# add app
COPY . .

# EXPOSE 5000

CMD [ "npm", "start" ]
