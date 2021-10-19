FROM node:14.17.5-alpine3.14 as builder

WORKDIR /app

RUN apk update 
RUN apk add --no-cache git ca-certificates 

# copy configs to /app folder
COPY --chown=node:node ./package*.json ./
COPY --chown=node:node ./tsconfig.json ./

# copy source code to /app/src folder
COPY . .
# RUN rm -rf /app/proto && git clone https://github.com/MomentumTeam/SuperNovaProto.git /app/proto

RUN npm i && npm cache clean --force
RUN npm run build

FROM node:14.17.5-alpine3.14

RUN apk update 
RUN apk add --no-cache nano vim

RUN GRPC_HEALTH_PROBE_VERSION=v0.4.4 && \
    wget -qO/bin/grpc_health_probe https://github.com/grpc-ecosystem/grpc-health-probe/releases/download/${GRPC_HEALTH_PROBE_VERSION}/grpc_health_probe-linux-amd64 && \
    chmod +x /bin/grpc_health_probe && \
    chown node:node /bin/grpc_health_probe

RUN mkdir -p /logs && chown -R node:node /logs
RUN mkdir -p /teaUtils && chown -R node:node /teaUtils
RUN mkdir -p /usr/src/app && chown -R node:node /usr/src/app
WORKDIR /usr/src/app

COPY --chown=node:node ./package*.json ./

RUN npm ci --production && npm cache clean --force

COPY --from=builder --chown=node:node /app/dist .

COPY --from=builder --chown=node:node /app/proto proto

USER node

EXPOSE 8080

ENV NODE_ENV=production

CMD ["node", "src/index.js"]