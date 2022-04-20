#!/usr/bin/env bash

pushd /home/ubuntu/cd/eco-api

echo 'remove old build'
npm run prebuild
rm -rf node_modules
rm package-lock.json

echo 'install packages'
npm install
echo 'restart server'
pm2 restart ecosystem.config.js

popd