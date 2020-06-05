[![Build Status](https://travis-ci.com/Alien-nick/UtilityNotifier.svg?branch=master)](https://travis-ci.com/Alien-nick/UtilityNotifier)

# Utility Tracker

The initial thoughts of this project was to send a notification to my company @intellectstorm a message that I have power outage. As I went on developing the project, I then realize I can track the power outages or irregularities of GPL and GTT using the blaze modem. This repo includes the frontend and backend source code of how I implemented this.

# Getting Started
For Developers interested in using the project, you can either use docker to quickly spin up the application. See <b>Docker</b> for more details.

For those who want to use the project without docker, Install ### MongoDB ### and then head over to the backend/ folder:

 - cp .env.example .env
 ## Add to .env ##
 - Router Username
 - Router Password
 - Router URL
 - Slack webhook
 - Your Name

# Docker

 - docker-compose build
 - docker-compose up -d
