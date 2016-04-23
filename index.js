module.exports = {
  website: {
    assets: ".",
    html: {
      "body:start": function(current, output) {
        var fs = require("fs");
        var path = require("path");
        
        // Gitbook code needs modification to expose current.book
        var filePath = path.join(current.book.root, "HEADER.html");
        
        // Try to access global var
        console.log("### GLOBAL ###");
        console.dir(book);
        console.dir(this.book);
        
        try {
            return fs.readFileSync(filePath);
        } catch(err) {
            // pass
        }
      }
    }
  }
};