#!/bin/bash

# 数组
array=(A B C D)

# for index in $array;do 
#     echo $index
# done

name="abcde"

echo ${#name}

echo ${name:1:4}

# echo ${array[@]}

# echo ${array[1]}

# echo ${#array[@]}

# val=`expr 2 + 2`

# echo "+:$val"

# val2=`expr 2 \* 2`

# echo "*:$val"

if [ 4 != 4 ]
then
    echo "成立"
else
    echo '否'
fi