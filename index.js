var fs = require("fs");
var path = require("path");

module.exports = {
  website: {
    assets: ".",
    html: {
      "body:start": function(current) {
        
        var rootPath = current.basePath === "." ? ".." : "../../" + current.basePath;
        console.log("rootPath:", rootPath);
        var filePath = path.join(this.book.root, "HEADER.html");
        
        try {
            var content = fs.readFileSync(filePath, {encoding: "utf-8"});
            return content.replace(/BASE_PATH/g, rootPath);
        } catch(err) {
            // if there's no file to include, just continue
        }
      }
    }
  }
};
