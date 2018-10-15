//jsonGenerator.js

function jsonGenerator(yesno) {
    var now = new Date;
    var utc_timestamp = Date.UTC(now.getUTCFullYear(),now.getUTCMonth(), now.getUTCDate() , 
      now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());
    this.coffee = yesno;
    this.utc_timestamp = utc_timestamp;
}

module.exports.jsonGenerator = jsonGenerator;
