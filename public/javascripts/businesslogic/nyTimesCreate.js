var NyTimes = require('../model/NyTimes');
var getNyTimesData = require('../../../routes/nytimes');

let nyTimesCreate = async () => {
    let timesData = await getNyTimesData().then((res) => {return res});

    let storeClass = [{}];
    let test = timesData.response.docs;
    test.forEach(i => {
        let ni = new NyTimes(i.snippet, i.source, i.copyright, i.pub_date, i.web_url);
        storeClass.push(ni);
    });

    return storeClass;
}

module.exports = nyTimesCreate;