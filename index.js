module.exports = {
  website: {
    assets: ".",
    html: {
      "body:start": function(current) {
        var fs = require("fs");
        var path = require("path");
        var BASE_PATH = current.basePath === "." ? "" : current.basePath + "/";
        BASE_PATH.replace("../", "");
        var filePath = BASE_PATH + "HEADER.html";
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