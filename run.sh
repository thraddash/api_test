#!/usr/bin/env bash

echo "API_HOST = $(hostname -I | awk '{print $1}')" > frontend/.env
echo "API_PORT = 3001" >> frontend/.env

echo "DB_HOST = $(hostname -I | awk '{print $1}')" > backend/.env
echo "API_PORT = 3001" >> backend/.env
#docker-compose build

#docker build . -t food2:latest
#docker stop food2
#cd ../
#docker run -v $PWD/backup/images:/app/public/images -v $PWD/backup/videos:/app/public/videos -v $PWD/backup/data:/app/src/data -p 3000:3000 -p 5000:5000 -d --rm --name food2 food2