const express = require('express');
const router = express.Router();

const dns = require('dns');

let urls = {0: 'www.google.com'};
let counter = 1

router.post('/new', (req, res) => {
    const requestAddress = req.body.address
    const addressRegex = /(?:https?:\/\/)?(?:www\.)?[a-z0-9]+[a-z0-9-]{0,61}[a-z0-9]*\.[a-z]+(?:.[a-z]+)*(?:\/[\w\d\?\.\=\-]*)*/g

    console.log(`Requested URL to shorten: ${requestAddress}`)
    if (requestAddress && addressRegex.test(requestAddress)) {
        console.log('Performing DNS lookup of address')
        dns.lookup(requestAddress, (err, address, family) => {
            if(!err) {
                console.log('DNS success, address: %j family: IPv%s', address, family);
                console.log(`Saving ${requestAddress} to short url: /${counter}`)
                urls[counter] = requestAddress
                counter++
                res.send({ url: counter })
            }
        }); 
    }
});

router.get('/:url_id', (req, res) => {
    const requestedURL = parseInt(req.params.url_id);
    console.log(urls, requestedURL)
    if (requestedURL >= 0) {
        if (requestedURL in urls) {
            console.log(`Redirecting client to: ${urls[requestedURL]}`)
            res.redirect('https://' + urls[requestedURL]);
        } else {
            res.send({ error: 'Unable to find requested url' });
        }
    }
});

module.exports = router;