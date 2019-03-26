# rest_api_vocabs
RESTful API for vocabs web application

## Refactor
  - ticket#1: use 'compression' package to compress http response, this requires client decompress the response.
  
## deployment
  - postgres extension: 
      - levenshtein 
  
### Caveats
  - when NODE_ENV is set to "production" and you try to command 'npm install', this results in install only 'dep' package (not including devDep), so be careful. if you want to install dev in the enviroment, use 'npm install --only=dev'
  - when "npm run build" and specify "include" option as an array of "src/**/*", it won't compile (hangs forever). so includes each directory instead like "src/Interface/*", "src/UseCase/*" ... ( I don't know why )
  - when want to add custom type definition file, use "paths" option like bellow:
    "paths": {
      "custom-module": [ "path/to/your/custom/type/definiton" ]
    }
  - babel + typescript + decorators:
    - after transpile ts files with babel and typescsript (using babel/typescript preset), it complains " function UserService(@(0, _inversify.inject)(_type.default.IUserRepository): SyntaxError: Invalid or unexpected token".
      - I don't know to fix properly but current walk around is to use typescript and babel separately:
        1. compile ts file with typescript
        2. transpile js file with babel
  - postgres "peer authentication" problem
      - check pg_hba.conf and change "peer" to "md5"
      - restart postgresql
      - change "postgres" user's password
  - pm2 package
      - using 'watch' option to true might cause restart the process so many time (see in output.log) so avoid using it
