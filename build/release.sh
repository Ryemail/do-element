#!/bin/bash

# 执行打包
yarn run dist

git add .

git commit -m "$1"

echo $1

git push