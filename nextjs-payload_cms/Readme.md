# Project

- test project to connect Payload CMS to a mongoDB and create nextjs website that uses Payload
- app will be on port 3000
- cms on port 4000

## installation of the packages

### Install Payload CMS

```bash
npx create-payload-app@latest
# name it so it creates the folder with payload code
# pick blank template
# use default mongoDB path
```

- once installed change the port number in file /src/server.ts to 4000

### Docker
```bash
docker compose up -d
```

### mongoDB

- check if the mongo docker is running
- create payload-cms DB in mongoDB 
depends on what client is installed can use commands `mongo` or `mongosh`
```bash
mongosh admin -u root -p password

# create the DB as required from .env file
show dbs
# create a db
use payload-cms
show collections
```



