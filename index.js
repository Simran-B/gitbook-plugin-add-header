module.exports = {
  website: {
    assets: ".",
    html: {
      "body:start": function(current, output) {
        var fs = require("fs");
        var path = require("path");
        
        // Gitbook code needs modification to expose current.book
        var filePath = path.join(current.book.root, "HEADER.html");
        
        // is this even defined?
        console.dir(output);
        
        try {
            return fs.readFileSync(filePath);
        } catch(err) {
            // pass
        }
      }
    }
  }
};