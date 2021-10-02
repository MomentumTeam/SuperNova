# SuperNova

In order to generate typescript interfaces by the proto files, run the fllowing commands:

cd proto-builder && npm i

./loadProto.sh

To run with docker, just run:

docker-compose up

1. You can put in comment *-script, kafka and elastic related images.
2. It is better if you run docker-compose up -d mongo redis before running the rest.
3. Verify that supernova.env is good for your environment.
4. When running any service on windows, run "npm run start_windows".

# Requirements

```
sudo mkdir -p /usr/src/app
sudo git clone https://github.com/MomentumTeam/SuperNovaProto.git /usr/src/app
```
