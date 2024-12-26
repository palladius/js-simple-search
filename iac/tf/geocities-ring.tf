# js-search AR
resource "google_artifact_registry_repository" "ring_repo" {
  provider      = google-beta
  location      = "europe-west1"
  repository_id = "tf-geocities-ring"
  description   = "[TF] Docker repository for js-simple-search"
 format        = "DOCKER"
}
