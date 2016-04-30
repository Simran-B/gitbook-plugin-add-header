var fs = require("fs");
var path = require("path");

module.exports = {
  website: {
    assets: ".",
    html: {
      "body:start": function(current) {
        
        var BASE_PATH = current.basePath === "." ? "" : current.basePath;
        var filePath = path.join(this.book.root, "HEADER.html");
        
        try {
            return fs.readFileSync(filePath, {encoding: "utf-8"})
                replace(/BASE_PATH/g, BASE_PATH);
        } catch(err) {
            // if there's no file to include, just continue
        }
      }
    }
  }
};
