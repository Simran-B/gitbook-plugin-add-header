module.exports = {
  website: {
    assets: ".",
    html: {
      "body:start": function(current, output) {
        var fs = require("fs");
        var path = require("path");
        
        var filePath = path.join(this.book.root, "HEADER.html");
        
        try {
            return fs.readFileSync(filePath);
        } catch(err) {
            // pass
        }
      }
    }
  }
};