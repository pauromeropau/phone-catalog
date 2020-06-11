FROM node:12

LABEL maintainer="Paula Romero pauromeropau@gmail.com" 

WORKDIR /server

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD [ "npm", "start" ]