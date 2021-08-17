#!/bin/bash

registry="$1"

for d in */ ; do
  if [[ -f "$d"Dockerfile ]]
  then
    imageName=`echo ${d%?} | tr '[:upper:]' '[:lower:]'`
    docker build --rm -t "$imageName":latest ${d}
    if [ "$registry" != "" ]
    then
      docker push "$registry"/"$imageName":latest
    fi
  fi
done