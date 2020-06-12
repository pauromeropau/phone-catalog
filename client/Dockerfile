# pull official base image
FROM node:8.7.0-alpine

# description
LABEL maintainer="Paula Romero pauromeropau@gmail.com" 
LABEL version="1.0"
LABEL description="Guidesmiths test"

RUN mkdir -p /srv/app/phone-docker-client

# set working directory
# WORKDIR /client
WORKDIR /srv/app/phone-docker-client

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json /srv/app/phone-docker-client
COPY package-lock.json /srv/app/phone-docker-client

RUN npm install

# add app
# COPY . ./
COPY . /srv/app/phone-docker-client

CMD ["npm", "start"]
