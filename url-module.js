
const url = require('url');

const urlString = "https://us02web.zoom.us/rec/play/dwhYECvuk0Sj2hGHd0A_PMxu6L3B1EKwoTTHWtthLNU9NyTp0clkB1UGRkbN_GBoSdC5h0C5G2AMbG-s.2aRxA4rNm_PNNlu9?accessLevel=meeting&canPlayFromShare=true&from=share_recording_detail&continueMode=true&componentName=rec-play&originRequestUrl=https%3A%2F%2Fus02web.zoom.us%2Frec%2Fshare%2FtD23Ra4HzdNO2Mh2V4UeDbevQc8l5ucRqm-2NUTXxBvWoGuMfm_LIyhgZT5nu3bu.KbXzp-MaBPnChNt_";

const urlObject = url.parse( urlString, true);

console.log(urlObject);
console.table(urlObject);
console.log(` protocol : ${urlObject.protocol}`);
console.log(` hostname : ${urlObject.hostname}`);
console.log(` query : ${JSON.stringify(urlObject.query)}`);
console.log(` pathname : ${urlObject.pathname}`);