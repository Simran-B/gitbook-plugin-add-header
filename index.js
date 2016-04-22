module.exports = {
  website: {
    assets: ".",
    html: {
      "body:start": function(current) {
        var fs = require("fs");
        console.log("### ADD-HEADER ###")
        console.dir(current);
        var filePath = current.basePath + "/HEADER.md";
        try {
            return fs.readFileSync(filePath);
        } catch(err) {
            // pass
        }
      }
    }
  }
};