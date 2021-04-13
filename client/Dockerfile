# pull official base image
FROM node:8.7.0-alpine

# description
LABEL maintainer="Paula Romero pauromeropau@gmail.com" 
LABEL version="1.0"
LABEL description="Soamee test"

# createdirectory
RUN mkdir -p /srv/app/phone-client

# set working directory
WORKDIR /srv/app/phone-client

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json /srv/app/phone-client
COPY package-lock.json /srv/app/phone-client

RUN npm install

# add app
COPY . /srv/app/phone-client

CMD ["npm", "start"]
