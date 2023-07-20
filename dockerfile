FROM node:16.20.0-alpine3.18
WORKDIR /businesscard
COPY package.json .
RUN npm install
COPY package-lock.json .  
RUN npm install 
COPY . .
CMD [ "npm", "start" ]
EXPOSE 3000