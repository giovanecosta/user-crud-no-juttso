# User CRUD no Juttso

## Project setup

### Script (Ubuntu Only!)
```
sudo ./setup.sh
```
*This script will install Docker and Docker Compose. If you wish to remove them after use, run `sudo ./clean.sh`

### Manual Setup

Install Docker and Docker Compose:

https://docs.docker.com/install/

https://docs.docker.com/compose/install/

After that you must be ready to execute the following commands

```
docker-compose build

docker-compose run --rm --no-deps client npm i

docker-compose run --rm --no-deps server npm i
```
(Some warns are expected)

## Run App
```
docker-compose up
```
App will be running on http://localhost:3000

### Run Tests
```
npm run test
```
