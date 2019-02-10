var express = require('express');
var NyTimes = require('../model/NyTimes');
var getNyTimesData = require('../../../routes/nytimes');

let nyTimesCreate = async () => {
    let timesData = await getNyTimesData().then((res) => {return res});
    const {snippet, source, pub_date, copyright, web_url} = timesData.response.docs[0];

    return new NyTimes(snippet, source, copyright, pub_date, web_url);
}

module.exports = nyTimesCreate;