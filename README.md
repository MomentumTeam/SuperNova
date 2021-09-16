# SuperNova

In order to generate typescript interfaces by the proto file, run the fllowing commands:

npm install ts-proto --save

protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./src/interfaces/protoc ./proto/\*.proto --experimental_allow_proto3_optional --ts_proto_opt=esModuleInterop=true

# Requirements

```
sudo mkdir -p /usr/src/app
sudo git clone https://github.com/MomentumTeam/SuperNovaProto.git /usr/src/app
```
