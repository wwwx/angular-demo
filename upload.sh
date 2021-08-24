#!/bin/bash
ssh root@youbear.fun 'rm -rf /home/angular-demo'
rsync -av --exclude="node_modules" ./ root@youbear.fun:/home/angular-demo/
exit
eeooff
echo done

