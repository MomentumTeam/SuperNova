# SuperNova

In order to generate typescript interfaces by the proto files, run the fllowing commands:

cd proto-builder && npm i

./loadProto.sh

To run with docker, just run:

docker-compose up

(you can put in comment *-script, kafka and elastic related images)


# Requirements

```
sudo mkdir -p /usr/src/app
sudo git clone https://github.com/MomentumTeam/SuperNovaProto.git /usr/src/app
```
