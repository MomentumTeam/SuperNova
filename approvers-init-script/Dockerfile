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

RUN mkdir -p /logs && chown -R node:node /logs
RUN mkdir -p /logs/approvers-init-script && chown -R node:node /logs/approvers-init-script
RUN mkdir -p /excelFiles && chown -R node:node /excelFiles
RUN mkdir -p /usr/src/app && chown -R node:node /usr/src/app
WORKDIR /usr/src/app

COPY --chown=node:node ./package*.json ./

RUN npm ci --production && npm cache clean --force

COPY --from=builder --chown=node:node /app/dist .

COPY --from=builder --chown=node:node /app/proto proto

USER node

ENV NODE_ENV=production

CMD ["node", "src/index.js"]