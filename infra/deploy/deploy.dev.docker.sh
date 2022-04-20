#!/usr/bin/env bash

set -ex

GOOGLE_CLIENT_ID=$1
GOOGLE_CLIENT_SECRECT=$2
JWT_ACCESS_TOKEN_SECRECT=$3
JWT_REFRESH_TOKEN_SECRECT=$4

docker load -i eco-api.tar

if [ ! "$(docker ps -q -f name=eco-api-cd)" ]; then
  docker rm -f eco-api-cd
fi
# docker rmi $(docker images -qa -f 'dangling=true')

docker run -d --name eco-api-cd \
  --network eco-dev-nwk \
  -e LOG_LEVEL="debug" \
  -e DATABASE_HOST="eco-dbsql" \
  -e GOOGLE_CLIENT_ID="$GOOGLE_CLIENT_ID" \
  -e GOOGLE_CLIENT_SECRECT="$GOOGLE_CLIENT_SECRECT" \
  -e JWT_ACCESS_TOKEN_SECRECT="$JWT_ACCESS_TOKEN_SECRECT" \
  -e JWT_REFRESH_TOKEN_SECRECT="$JWT_REFRESH_TOKEN_SECRECT" \
  -p 3001:3000 \
  eco-api