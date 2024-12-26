# js-search AR
resource "google_artifact_registry_repository" "jsss_repo" {
  provider      = google-beta
  location      = "europe-west1"
  repository_id = "js-simple-search"
  description   = "Docker repository for js-simple-search"
 format        = "DOCKER"
}
