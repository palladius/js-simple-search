
terraform {
    required_providers {
        #   google = {
        #     source  = "hashicorp/google"
        #     version = "~> 4.0"
        #   }
        google-beta = {
            source  = "hashicorp/google-beta"
            version = "~> 4.0"
        }
    }
}

provider "google" {
    project = "puffin-tours"  # Replace with your actual project ID
    region = "europe-west1"

}

provider "google-beta" {
    project = "puffin-tours"  # Replace with your actual project ID
    region = "europe-west1"

}

