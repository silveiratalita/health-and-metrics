
FROM node:13.6.0

WORKDIR /app

COPY . ./

RUN npm install

CMD [ "npm", "start" ]
