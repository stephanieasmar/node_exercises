const fs = require('fs');
const readline = require('readline');
const dns = require('dns');

const domainIp = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

domainIp.question('Choose a domain name: ', (domain) => {
    domainIp.close();
    dns.lookup(domain, function (err, address) {
        if (err) throw err;
            return console.log('The IP address is: ' + address);
    });
});