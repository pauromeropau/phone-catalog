FROM node:12

LABEL maintainer="Paula Romero pauromeropau@gmail.com" 

RUN mkdir -p /srv/app/guidesmith/client

WORKDIR /srv/app/guidesmith/client

COPY package.json /srv/app/guidesmith/client
COPY package-lock.json /srv/app/guidesmith/client

RUN npm install

COPY . /srv/app/guidesmith/client

CMD ["npm", "start"]