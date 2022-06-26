protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./protocOutput/ ./proto/*.proto --proto_path=./proto --experimental_allow_proto3_optional --ts_proto_opt=esModuleInterop=true 

cp -r ./protocOutput/* ../execution-script/src/interfaces/protoc/proto
cp -r ./protocOutput/* ../whiteListSync-script/src/interfaces/protoc/proto
cp -r ./protocOutput/* ../population-script/src/interfaces/protoc/proto
cp -r ./protocOutput/* ../approvers-init-script/src/interfaces/protoc/proto

cp -r ./protocOutput/* ../kartoffel-consumer/src/interfaces/protoc/proto

cp -r ./protocOutput/* ../api-gateway/src/interfaces/protoc/proto
cp -r ./protocOutput/* ../approver-service/src/interfaces/protoc/proto
cp -r ./protocOutput/* ../kartoffel-service/src/interfaces/protoc/proto
cp -r ./protocOutput/* ../notification-service/src/interfaces/protoc/proto
cp -r ./protocOutput/* ../producer-service/src/interfaces/protoc/proto
cp -r ./protocOutput/* ../request-service/src/interfaces/protoc/proto
cp -r ./protocOutput/* ../tea-service/src/interfaces/protoc/proto
cp -r ./protocOutput/* ../spike-service/src/interfaces/protoc/proto
cp -r ./protocOutput/* ../bulk-service/src/interfaces/protoc/proto
cp -r ./protocOutput/* ../authentication-service/src/interfaces/protoc/proto
cp -r ./protocOutput/* ../mail-service/src/interfaces/protoc/proto
cp -r ./protocOutput/* ../socket-service/src/interfaces/protoc/proto
