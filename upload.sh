#!/bin/bash
project_path='/home/angular-demo'
ssh root@youbear.fun 'rm -rf ${project_path}'
rsync -av --exclude=node_modules --exclude=dist --exclude=src/tailwind.css ./ root@youbear.fun:${project_path}/
exit
eeooff
echo done

