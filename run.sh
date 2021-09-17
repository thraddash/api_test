#!/usr/bin/env bash

echo "API_HOST=$(hostname -I | awk '{print $1}')" > frontend/.env
echo "API_PORT=3000" >> frontend/.env

echo "PORT=3001" > backend/.env

docker-compose down
docker-compose build
docker-compose up
