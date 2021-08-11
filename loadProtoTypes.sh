protoc --plugin=./approver-service/node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./approver-service/src/interfaces/protoc ./proto/*.proto --experimental_allow_proto3_optional --ts_proto_opt=esModuleInterop=true

protoc --plugin=./kartoffel-service/node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./kartoffel-service/src/interfaces/protoc ./proto/*.proto --experimental_allow_proto3_optional --ts_proto_opt=esModuleInterop=true

protoc --plugin=./notification-service/node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./notification-service/src/interfaces/protoc ./proto/*.proto --experimental_allow_proto3_optional --ts_proto_opt=esModuleInterop=true

protoc --plugin=./producer-service/node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./producer-service/src/interfaces/protoc ./proto/*.proto --experimental_allow_proto3_optional --ts_proto_opt=esModuleInterop=true

protoc --plugin=./request-service/node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./request-service/src/interfaces/protoc ./proto/*.proto --experimental_allow_proto3_optional --ts_proto_opt=esModuleInterop=true

protoc --plugin=./api-gateway/node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./api-gateway/src/interfaces/protoc ./proto/*.proto --experimental_allow_proto3_optional --ts_proto_opt=esModuleInterop=true

protoc --plugin=./whiteListSync-script/node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./whiteListSync-script/src/interfaces/protoc ./proto/*.proto --experimental_allow_proto3_optional --ts_proto_opt=esModuleInterop=true

protoc --plugin=./execution-script/node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./execution-script/src/interfaces/protoc ./proto/*.proto --experimental_allow_proto3_optional --ts_proto_opt=esModuleInterop=true