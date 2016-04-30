var fs = require("fs");
var path = require("path");

module.exports = {
  website: {
    assets: ".",
    html: {
      "body:start": function(current) {
        
        var basePath = current.basePath === "." ? "" : current.basePath;
        console.log("basePath:", basePath);
        console.dir(current.book);
        var filePath = path.join(this.book.root, "HEADER.html");
        
        try {
            var content = fs.readFileSync(filePath, {encoding: "utf-8"});
            return content.replace(/BASE_PATH/g, basePath);
        } catch(err) {
            // if there's no file to include, just continue
        }
      }
    }
  }
};
