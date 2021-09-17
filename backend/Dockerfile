FROM node:16-alpine 

WORKDIR /app

# Add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
COPY .env ./
RUN npm install

COPY . ./
CMD node server.js
