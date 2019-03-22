# rest_api_vocabs
RESTful API for vocabs web application

## Refactor
  - ticket#1: use 'compression' package to compress http response, this requires client decompress the response.
  
## Production preparation
  - set NODE_ENV to production.
  - logging 
### Caveats
  - when NODE_ENV is set to "production" and you try to command 'npm install', this results in install only 'dep' package (not including devDep), so be careful. if you want to install dev in the enviroment, use 'npm install --only=dev'
