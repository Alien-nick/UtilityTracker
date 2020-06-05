[![Build Status](https://travis-ci.com/Alien-nick/UtilityNotifier.svg?branch=master)](https://travis-ci.com/Alien-nick/UtilityNotifier)

# Utility Tracker

The initial thoughts of this project was to send a notification to my company @intellectstorm a message that I have power outage. As I went on developing the project, I then realize I can track the power outages or irregularities of GPL and GTT using the blaze modem. This repo includes the frontend and backend source code of how I implemented this.

# Getting Started
For Developers interested in using the project, you can either use docker to quickly spin up the application. See <b>Docker</b> for more details.

For those who want to use the project without docker, Install <b> MongoDB </b> and then head over to the backend/ folder:

 - cp .env.example .env
 ## Add to .env ##
 - Router Username
 - Router Password
 - Router URL
 - Slack webhook
 - Your Name

## Starting Backend ##
- Once Mongo is installed and the <b>.env</b> file is setup correctly then proceed to starting the cron and server to distribute the endpoints...
`npm install`

`npm run cron >> cron.log 2>&1 &`

`npm start >> server.log 2>&1 &`

## Starting Frontend ##
- Once the backend is started then proceed to starting the frontend...
`cd ../frontend && npm install`

`cd src && npm start`

# Docker
 ## There is an ongoing issue with docker, see #11 for more details
 - docker-compose build
 - docker-compose up -d
 
# To contribute
- You can submit a pull request
