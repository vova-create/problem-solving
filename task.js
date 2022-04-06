let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function test() {
    rl.question("Would you like to know time or date? ", (string) => {

        let today = new Date();
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

        if (string === 'date') {
            console.log(date)
            test()
        } else if (string === 'time') {
            console.log(time)
            test()
        } else if (string === 'exit') {
            rl.close()
        } else {
        console.log('invalid text')
        test()
        }
    });
}

test()
