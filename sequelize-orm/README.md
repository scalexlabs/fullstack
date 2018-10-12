# Sequelize ORM

### Getting Started
This project is built using Node and PostgreSQL as backend. This project is implemented for demonstration purpose and tutorial of Sequelize ORM. 

## Contents
* Introduction
* Requirements/Setup
* Deployment
* Authors

### Introduction
This project is built using Node and PostgreSQL as backend. This project is implemented for demonstration purpose and tutorial of Sequelize ORM. 
This project have a single model defined using sequelize. The sequelize queries are used to perform the CRUD operations on the model. This queries will clear the basics of the sequelize query.

### Setup
1. Install and Setup Nodejs and Npm
    [NodeJS](https://nodejs.org/en/download/package-manager/)
    [NPM](http://blog.teamtreehouse.com/install-node-js-npm-windows)

2. Install Serverless framework
    [Serverless Framework](https://serverless.com/framework/docs/providers/aws/guide/quick-start/)
    ```bash
    npm install -g serverless
    ```

3. Ensure nodejs is installed.
    ```bash
    node -v
    ```

4. Set up the AWS Credentials
    [Configuring the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html)
    ```bash
    serverless config credentials --provider aws --key <AWSAccessKeyId> --secret <AWSSecretKey>
    ```

5. Install all the dependencies per package.json
    ```bash
    npm install
    ```

6. Set up AWS RDS Instance 
    [Setup RDS Instance](https://aws.amazon.com/getting-started/tutorials/create-connect-postgresql-db/)

7. Make desired changes in env.yml for connection string, use following pattern
    ```
    dilect://username:password@host:port:db_name
    ```

8. Mention the desired profile and region in the serverless.yml

### Deployment
Use following command for depoyment.
```bash
serverless deploy --stage dev 
```
        

### Authors
@scalexlabs
