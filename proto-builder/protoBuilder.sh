protoc --plugin=../node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./protocOutput/proto ./proto/*.proto --proto_path=./proto --experimental_allow_proto3_optional --ts_proto_opt=esModuleInterop=true 

cp -r ./protocOutput/* ../execution-script/src/interfaces/protoc/proto
cp -r ./protocOutput/* ../whiteListSync-script/src/interfaces/protoc/proto

cp -r ./protocOutput/proto ../api-gateway/src/interfaces/protoc/
cp -r ./protocOutput/proto ../approver-service/src/interfaces/protoc/
cp -r ./protocOutput/proto ../kartoffel-service/src/interfaces/protoc/
cp -r ./protocOutput/proto ../notification-service/src/interfaces/protoc/
cp -r ./protocOutput/proto ../population-script/src/interfaces/protoc/
cp -r ./protocOutput/proto ../producer-service/src/interfaces/protoc/
cp -r ./protocOutput/proto ../request-service/src/interfaces/protoc/
cp -r ./protocOutput/proto ../tea-service/src/interfaces/protoc/
cp -r ./protocOutput/proto ../spike-service/src/interfaces/protoc/
cp -r ./protocOutput/proto ../kartoffel-consumer/src/interfaces/protoc/
