#!/bin/bash
target_base_dir="/home/h5/angular-demo"
append_dir=$1
target_dir="${target_base_dir}/${append_dir}"
project_dir="/home/angular-demo-web"
rsync -av ./dist/angular-demo/ root@youbear.fun:${target_dir}
ssh root@youbear.fun > /dev/null 2>&1 << eeooff
ln -snf ${target_dir} ${project_dir}
exit
eeooff
echo done!

