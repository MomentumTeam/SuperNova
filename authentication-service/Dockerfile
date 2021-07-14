FROM node:10-alpine

# update packages
RUN apk update

# create root application folder
WORKDIR /app

# copy configs to /app folder
COPY package*.json ./
COPY tsconfig.json ./
# copy source code to /app/src folder
COPY src /app/src
COPY 401 /app/401

# check files list
RUN ls -a

RUN npm install && npm install tsc -g
RUN npm run build

EXPOSE 8080

CMD npm run dev