const express = require('express');
const port = 4000;
const app = express();
const { execFile } = require("child_process");
const { spawn } = require('child_process');
const { rejects } = require('assert');
fs = require('fs');


// routes to block and unblock

app.get('/', function(req, res) {
    //response index home
    res.sendFile(__dirname + '/index.html')
        //console.log(__dirname)
})

app.get('/block', function(req, res) {
    //block domains with regex   
    execFile(__dirname + '/block.sh', (error, stdout, stderr) => {
        if (error) {
            console.error(`error: ${error.message}`);
            return;
        }

        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }

        console.log(`stdout:\n${stdout}`);
    });
    //send response
    res.send('roblox, youtbe y tiktok bloqueado')
})

app.get('/unblock', function(req, res) {
    //unblock domains with regex   
    execFile(__dirname + '/unblock.sh', (error, stdout, stderr) => {
        if (error) {
            console.error(`error: ${error.message}`);
            return;
        }

        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }

        console.log(`stdout:\n${stdout}`);
    });
    //send response
    res.send('roblox, youtbe y tiktok desbloqueado')

})

app.get('/router', function(req, res) {

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            //save url from txt file into a variable
            let ngrokurl = fs.readFileSync(__dirname + '/redirect.txt').toString();
            //exports variable to promise
            resolve(ngrokurl);
            //wait 7 secs before read the file
        }, 7 * 1000);
    });
    //run promise
    promise
    //recive ngrokurl from file readed
        .then((url2go) => {
            //redirects to browser
            res.redirect(url2go);
        })
        .catch((err) => {
            console.log(err)
        })

    //exec python script
    var childp = require('child_process').exec('python3 router.py')
    childp.stdout.pipe(process.stdout)
    childp.on('exit', function() {
        process.exit()
    })
})



app.listen(port);