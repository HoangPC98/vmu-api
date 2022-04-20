#!/usr/bin/env sh

set -ex

ID_RSA=$1
SERVER_USER=$2
SERVER_DOMAIN=$3
GOOGLE_CLIENT_ID=$4
GOOGLE_CLIENT_SECRECT=$5
JWT_ACCESS_TOKEN_SECRECT=$6
JWT_REFRESH_TOKEN_SECRECT=$7

echo "Docker building..."
docker build -t eco-api -f ./Dockerfile .
echo "Docker saving..."
docker save -o eco-api.tar eco-api

echo "Deploying..."
chmod og= $ID_RSA
scp -i $ID_RSA -o StrictHostKeyChecking=no ./eco-api.tar $SERVER_USER@$SERVER_DOMAIN:~
ssh -i $ID_RSA -o StrictHostKeyChecking=no $SERVER_USER@$SERVER_DOMAIN 'bash -s' < ./infra/deploy/deploy.dev.docker.sh \
  $GOOGLE_CLIENT_ID $GOOGLE_CLIENT_SECRECT $JWT_ACCESS_TOKEN_SECRECT $JWT_REFRESH_TOKEN_SECRECT

# echo "Cleaning..."
# rm -f ./eco-api.tar
# docker rmi $(docker images -qa -f 'dangling=true')
# echo "Done"