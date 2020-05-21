const exec = require('child_process').exec;
const dotenv = require('dotenv');

dotenv.config();

var command = 'curl -s -u ' + `${process.env.USERNAME}` + ':' + `${process.env.PASSWORD}` + ' ' + `${process.env.URL}`+'| grep "var alarmList" | ' + "awk '{print $10}'";

var child = exec(command, function(error, stdout, stderr)
{
    output=stdout;
    str = output.substring(0, 2);
    if (str !== "OK"){
        // Make API Request to SLACK and BOT
       console.log("Blackout");
    } else {
        console.log("current is on");
    }
    if(error !== null){
        output=stderr;
        console.log('ERROR: ' + error);
    }
});