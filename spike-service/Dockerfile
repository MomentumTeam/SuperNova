FROM node:10-alpine

# update packages
RUN apk update

# create root application folder
WORKDIR /app

# copy configs to /app folder
COPY ./spike-service/package*.json ./
COPY ./spike-service/tsconfig.json ./
# copy source code to /app/src folder
COPY ./spike-service/src /app/src
COPY ./spike-service/utils /app/utils
COPY proto /app/proto

# check files list
RUN ls -a

RUN npm install && npm install tsc -g
RUN npm run build

EXPOSE 8080

CMD npm run prod