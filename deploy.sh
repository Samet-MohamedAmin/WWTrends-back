docker build -t $DOCKER_USERNAME/trends-chaser:$SHA -t $DOCKER_USERNAME/trends-chaser:$SHA -f ./Dockerfile .

docker push $DOCKER_USERNAME/trends-chaser:latest

docker push $DOCKER_USERNAME/trends-chaser:$SHA