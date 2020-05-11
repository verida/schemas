aws s3 sync schemas s3://schemas.testnet.verida.io --profile verida-testnet --delete
aws cloudfront create-invalidation --profile verida-testnet --distribution-id E2DU6UUUVFKZWK --paths "/*"