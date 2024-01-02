resource "aws_s3_bucket" "bucket" {
  bucket = "my-bucket-name" // replace with a unique bucket name
  acl    = "public-read"

  website {
    index_document = "index.html"
    error_document = "error.html"
  }
}