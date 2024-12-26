# js-search AR
resource "google_artifact_registry_repository" "jsss_repo" {
  provider      = google-beta
  location      = "europe-west1"
  repository_id = "js-simple-search"
  description   = "Docker repository for js-simple-search"
 format        = "DOCKER"
}



# DNS
resource "google_dns_record_set" "jsss_customdomain_cname" {
  provider                  = google-beta
  name                      = "jsss.palladius.it."  # Replace yourdomain.com with your actual domain
  managed_zone              = "palladius-it"  # Replace with your managed zone name
  project                   = "ric-cccwiki"  # Project ID where the zone is located
  type                      = "CNAME"
  ttl                       = 300
  rrdatas                    = ["ghs.googlehosted.com."]
}
resource "google_dns_record_set" "tf_jsss_customdomain_cname" {
  provider                  = google-beta
  name                      = "tf-jsss.palladius.it."  # Replace yourdomain.com with your actual domain
  managed_zone              = "palladius-it"  # Replace with your managed zone name
  project                   = "ric-cccwiki"  # Project ID where the zone is located
  type                      = "CNAME"
  ttl                       = 300
  rrdatas                    = ["ghs.googlehosted.com."]
}


#########################
# Crun domain mapping
#########################
resource "google_cloud_run_service" "jsss" {
   name     = "tf-js-simple-search-cb"
   location = "europe-west1"

  template {
    spec {
      containers {
        image = "europe-west1-docker.pkg.dev/puffin-tours/js-simple-search/jsss"
      }
    }
  }

  metadata {
      annotations = {
        "run.googleapis.com/ingress" = "all"  # Allow unauthenticated invocations
      }
    }

#   traffic {
#     latest_revision = true
#     percent         = 100
#   }
}

resource "google_cloud_run_domain_mapping" "main" {
  location = "europe-west1"
  name    = "tf-jsss.palladius.it" # todo apps.

  metadata {
    namespace = "puffin-tours"
  }

  spec {
    route_name = google_cloud_run_service.jsss.name
  }
}
