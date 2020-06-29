# Express Api Template

A starter template for express with:

- Handlers for 404 and health checks
- tests written in jest and supertest
- with eslint and prettier pre-configured
- almost zero babel use; babel is used to transform tests fotr jest but all server code is transformed via esm 

See `engine` field in `package.json` for minimum `node`/`npm` requirements.

## Developer commands

### Install

```shell script
npm run ci
```

### Run the api

For dev
```shell script
npm run start:dev
```

For production
```shell script
npm run start
```

### Code hygiene
```shell-script
npm run lint # eslint
npm run format # prettier
```

### Tests

Run once
```shell-script
npm run test
```

```shell-script
npm run test:watch
```

### CI commands
```shell-script
make build
````

```shell-script
make run
```
## Example Requests

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/803a965000e4d2f53e55)

- `/status` - health check endpoint
    - returns 200 if service is healthy or 503 if service is sick


