FROM node:fermium-alpine

RUN mkdir -p /app
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm","start"]