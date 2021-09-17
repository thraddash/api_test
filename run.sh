#!/usr/bin/env bash

echo "HOST = $(hostname -I | awk '{print $1}')" > frontend/.env
echo "PORT = 3001" >> frontend/.env

echo "HOST = $(hostname -I | awk '{print $1}')" > backend/.env
echo "PORT = 3001" >> backend/.env

cat <<EOF > docker-compose.yml
version: '3.8'

services:
  frontend:
    image: frontend
    ports:
      - "80:80"
    build:
      dockerfile: Dockerfile
      context: ./frontend
  backend:
    image: backend
    ports:
      - "3001:3001"
    build:
      dockerfile: Dockerfile
      context: ./backend
    depends_on:
        - "db"
    command: ["wait-for-it", "db:27017", "--", "node", "server.js"]
  db:
    image: mongo:4.2.0
    volumes:
      - "mongodata:/data/db"
    ports:
      - 27017:27017
    command: mongod --noauth
    
volumes:
  mongodata: 
EOF
#docker-compose build

#docker build . -t food2:latest
#docker stop food2
#cd ../
#docker run -v $PWD/backup/images:/app/public/images -v $PWD/backup/videos:/app/public/videos -v $PWD/backup/data:/app/src/data -p 3000:3000 -p 5000:5000 -d --rm --name food2 food2