#!/bin/bash

for d in */ ; do
  if [[ -f "$d"Dockerfile ]]
  then
    imageName=`echo ${d%?} | tr '[:upper:]' '[:lower:]'`
    docker build --rm -t "$imageName":latest ${d}
  fi
done