#!/bin/bash

registry="$1"
customVersion=""

if [ "$registry" != "" ]
    then
    while true; do
      read -p "Do you want to tag with your own version(y/n)?" yn
        case $yn in
            [Yy]* ) 
              while true; do
              read -p "Please enter your version:" customVersion
                  if [ "$customVersion" != "" ]
                    then
                      break
                  fi
              done                 
              break;;
            [Nn]* )
              echo false;
              break;;
            * ) echo "Please answer yes or no.";;
        esac
    done
fi

for d in */ ; do
  if [[ -f "$d"Dockerfile ]]
  then
    imageName=`echo ${d%?} | tr '[:upper:]' '[:lower:]'`
    docker build --rm -t "$imageName":latest ${d}
    if [ "$registry" != "" ]
    then
      commithash=`git -C ${d} rev-parse --short HEAD`
      docker tag "$imageName":latest "$registry"/"$imageName":latest
      docker tag "$registry"/"$imageName":latest "$registry"/"$imageName":"$commithash"
      docker push "$registry"/"$imageName":latest
      docker push "$registry"/"$imageName":"$commithash"
      if [ "$customVersion" != "" ]
        then
        docker tag "$registry"/"$imageName":latest "$registry"/"$imageName":"$customVersion"
        docker push "$registry"/"$imageName":"$customVersion"
      fi
    fi
  fi
done