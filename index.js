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
        
        var info = {
            basePath: current.basePath,
            BASE_PATH: BASE_PATH,
            resolvedBasePath: path.resolve(current.basePath),
            staticBase: current.staticBase,
            dirname: __dirname,
            filename: __filename,
            current: current
        };
        console.dir(info);
        try {
            return fs.readFileSync(filePath);
        } catch(err) {
            // pass
        }
      }
    }
  }
};