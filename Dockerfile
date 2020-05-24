FROM node

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN cd ./src/

CMD ["npm", "start"]