
PROJECT = storazzo-8ab31
VERSION = $(shell cat app/VERSION)
VERSIONED_APP = jsss:v$(VERSION)

docker-build:
	time docker build -t "$(VERSIONED_APP)" .

docker-run: docker-build
	docker run -it -p 8080:8080 "$(VERSIONED_APP)"

# https://medium.com/google-cloud/google-cloud-run-or-how-to-run-your-static-website-in-5-minutes-and-much-more-dbe8f2804395
# 1. build
gcloud-build-submit:
	gcloud --project storazzo-8ab31 builds submit --tag gcr.io/storazzo-8ab31/js-simple-search

gcloud-deploy-run: gcloud-build-submit
	gcloud --project storazzo-8ab31 run deploy js-simple-search \
		--image gcr.io/storazzo-8ab31/js-simple-search \
		--region europe-west1
# => https://js-simple-search-bsl7ylv4hq-ew.a.run.app

	# https://cloud.google.com/run/docs/authenticating/public#gcloud
	gcloud --project storazzo-8ab31 run services add-iam-policy-binding js-simple-search \
    	--member="allUsers" \
		--region europe-west1 \
    	--role="roles/run.invoker"













cloud-build-submit-ring2025:
	gcloud config set project puffin-tours
	gcloud builds submit 2025-ring/ \
		--config=2025-ring/cloudbuild.yaml \
		--service-account projects/puffin-tours/serviceAccounts/js-ring-cloud-builder@puffin-tours.iam.gserviceaccount.com \
		--gcs-log-dir gs://puffin-tours_cloudbuild/
