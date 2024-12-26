# js-search AR
resource "google_artifact_registry_repository" "ring_repo" {
  provider      = google-beta
  location      = "europe-west1"
  repository_id = "tf-geocities-ring"
  description   = "[TF] Docker repository for js-simple-search"
 format        = "DOCKER"
}


# DNS in different project!

resource "google_dns_record_set" "ring_customdomain_cname" {
  provider                  = google-beta
  name                      = "ring.carlessos.org."  # Replace yourdomain.com with your actual domain
  managed_zone              = "carlessos-org"  # Replace with your managed zone name
  project                   = "ric-cccwiki"  # Project ID where the zone is located
  type                      = "CNAME"
  ttl                       = 300
  rrdatas                    = ["ghs.googlehosted.com."]
}

resource "google_dns_record_set" "tf_ring_customdomain_cname" {
  provider                  = google-beta
  name                      = "tf-ring.apps.palladius.it."  # Replace yourdomain.com with your actual domain
  managed_zone              = "apps-palladius-it"  # Replace with your managed zone name
  project                   = "ric-cccwiki"  # Project ID where the zone is located
  type                      = "CNAME"
  ttl                       = 300
  rrdatas                    = ["ghs.googlehosted.com."]
}


### Cloud Run

resource "google_cloud_run_service" "tf-ring" {
   name     = "tf-url-ring"
   location = "europe-west1"

  template {
    spec {
      containers {
        image = "europe-west1-docker.pkg.dev/puffin-tours/geocities-ring/url-ring"
      }
    }
  }

  metadata {
      annotations = {
        "run.googleapis.com/ingress" = "all"  # Allow unauthenticated invocations
      }
    }

}

resource "google_cloud_run_domain_mapping" "tf-ring-apps-palladius-it" {
  location = "europe-west1"
  name    =  "tf-ring.apps.palladius.it."

  metadata {
    namespace = "puffin-tours"
  }

  spec {
    route_name = google_cloud_run_service.tf-ring.name
  }
}
