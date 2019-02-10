class NyTimes {
    constructor(snippet, source, copyright, date, url) {
        this.snippet = snippet;
        this.source = source;
        this.copyright = copyright;
        this.date = date;
        this.url = url;
    }
    getData() {
        return this;
    }
}

module.exports = NyTimes;