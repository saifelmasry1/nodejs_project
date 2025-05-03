FROM node:18

WORKDIR /app

COPY nodeapp/package*.json ./
RUN npm install

COPY nodeapp/ ./

EXPOSE 3000
CMD [ "npm", "start" ]
