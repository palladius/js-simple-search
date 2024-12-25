

docker-build:
#docker build -t 2025-ring .
	docker build -t url-ring .

docker-run: # docker-build
	docker run -it -p 3000:3000 url-ring

build-and-run: docker-build docker-run
