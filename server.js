var spawn = require('child_process').spawn;
var db = spawn('python3', ['./WorkoutBuddy.py']);
var query = '{"cmd":7,"city":"Riverside"}';
var output = '';

db.stdout.on('data', function(query) {
    output += query.toString();
});

db.stdout.on('end', function () {
    console.log(output);
});

db.stdin.write(query);
db.stdin.end();