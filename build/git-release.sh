#!/bin/bash

if [ ! -n "$1" ] 
then
    echo $1
    echo '请输入提交文案信息'
else
    git add -A
    git commit -m "$1"
    git push
fi