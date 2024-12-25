

docker-build:
#docker build -t 2025-ring .
	docker build -t url-ring .

docker-run: # docker-build
	docker run -it -p 3000:3000 url-ring

build-and-run: docker-build docker-run

install:
	gcloud components install cloud-build-local

#	cloud-build-local --config=cloudbuild.yaml --dryrun=true .
# To run a  build: https://github.com/GoogleCloudPlatform/cloud-build-local
# ./cloud-build-local_{linux,darwin}_{386,amd64}-v<latest_tag> --dryrun=false --config=path/to/cloudbuild.yaml path/to/code
cloud-build-local:
	gcloud config set project puffin-tours
	cloud-build-local --config=cloudbuild.yaml --dryrun=false .

# deploy:
# 	gcloud run deploy url-ring --image europe-west1-docker.pkg.dev/puffin-tours/geocities-ring/url-ring --region europe-west1 --platform managed --allow-unauthenticated
