const fetch = require("node-fetch");
const keys = require('../config/keys');

let getNyTimesData = async () => {
  
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=${keys.apiKey}`;

    try {
      const response = await fetch(url);
      const json = await response.json();
      return json;
    } catch (error) {
      console.log(error);
    }
}


module.exports = getNyTimesData;