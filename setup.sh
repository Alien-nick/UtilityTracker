#!/bin/bash

# Ask user for router gateway, if gateway is incorrect, stop the script.
echo "Welcome to the set up for Utility Tracker\n"


echo "Kindly input your Router Gateway:"
read gateway

echo "Kindly input your Router username:"
read username

echo "Kindly input your Router password:"
read password

# Check router gateway, if the status code is 401, proceed
check_gateway=$(curl -s -o /dev/null -w "%{http_code}" http://$gateway -u $username:$password)
if [[ $check_gateway -eq 200 ]]
then
    check_node=$(node -v)
    if [[ $check_node ]]
    then
        check_mongo=$(mongod --version)
        if [[ $check_mongo ]]
        then
            cd backend
            touch .env
            echo -e \USERNAME=$username >> .env
            echo -e PASSWORD=$password >> .env
            echo -e URL='http://'$gateway >> .env
            echo -e MONGO='mongodb://127.0.0.1:27017/logs' >> .env

            npm install --silent
            npm run cron >> cron.log 2>&1 &
            npm start >> server.log 2>&1 &

            cd ../frontend
            npm install --silent
            npm start >> client.log 2>&1 &
        fi
    fi
    
else
    echo "Incorrect Gateway, Exiting..."
    exit 0
fi