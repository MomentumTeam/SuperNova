FROM node:14.17.5-alpine3.14 as builder
WORKDIR /app


# copy configs to /app folder
COPY ./package*.json ./
COPY ./tsconfig.json ./
RUN npm i && npm cache clean --force

COPY . .





RUN npm run build

FROM node:14.17.5-alpine3.14 as PROD

RUN apk update 
RUN apk add --no-cache nano vim

RUN mkdir -p /logs 
RUN mkdir -p /logs/api-gateway 
RUN mkdir -p /spikeUtils 
RUN mkdir -p /bulkFiles 
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY --from=builder /app/node_modules . 
COPY --from=builder  /app/dist .
COPY --from=builder  /app/proto proto

EXPOSE 8080
ENV NODE_ENV=production
CMD ["node", "src/index.js"]