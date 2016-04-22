module.exports = {
  website: {
    assets: ".",
    html: {
      "body:start": function(current) {
        var fs = require("fs");
        var path = require("path");
        var filePath = current.basePath + "/HEADER.html";
        console.log("### ADD-HEADER ###")
        console.log(path.resolve(filePath));
        try {
            return fs.readFileSync(filePath);
        } catch(err) {
            // pass
        }
      }
    }
  }
};