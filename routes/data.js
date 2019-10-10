const express = require('express');
const router = express();
const fetch = require('node-fetch');
const modules = require("../modules.js");

router.get('/', (req, res, next) => {
    res.send("Api By Helmy Agta - @xzgta")
})

router.get('/get', (req, res, next) => {

    let response;


    //Validator
    try {
        if (!("link" in req.query) || req.query.link.trim() == "") throw { code: 200, message: "Url tidak boleh kosong" }
    } catch (e) {
        response = {
            status: false,
            code: e.code,
            message: e.message
        }
        return next(response);
    }

    let url = 'https://www.videofk.com/douyin-video-download/search?url=' + req.query.link + '+&select=douyin'
    const functionShort = () => {
        fetch(url)
            .then(res => res.text())
            .then(body => {
                let displayUrl = body.split('data-video="')[1].split('"')[0]
                res.redirect(displayUrl)
            });
    }
    functionShort()
})

module.exports = router;