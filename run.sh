#!/usr/bin/env bash

echo "REACT_APP_API_HOST=$(hostname -I | awk '{print $1}')" > frontend/.env
echo "REACT_APP_API_PORT=3000" >> frontend/.env
echo "REACT_APP_LOCALHOST=$(hostname -I | awk '{print $1}')" >> frontend/.env

#echo "REACT_APP_MONGO_HOST=$(hostname -I | awk '{print $1}')" > backend/.env
echo "REACT_APP_API_PORT=3001" > backend/.env

docker-compose down
docker-compose build
docker-compose up
