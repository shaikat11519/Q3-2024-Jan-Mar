FROM node:20.11.1-alpine

WORKDIR /home/react/app

COPY package*.json .

RUN npm install

COPY . .

CMD [ "npm", "run", "dev" ]