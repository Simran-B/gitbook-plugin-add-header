var fs = require("fs");
var path = require("path");

module.exports = {
  website: {
    assets: ".",
    html: {
      "body:start": function(current) {
        
        var rootPath;
        if (this.options.pluginsConfig && this.options.pluginsConfig["add-header"] && this.options.pluginsConfig["add-header"].BASE_PATH) {
            rootPath = this.options.pluginsConfig["add-header"].BASE_PATH;
        } else {
            // WARNING: does not work if served via web-server (gitbook will always use ..)
            rootPath = current.basePath === "." ? ".." : "../" + current.basePath;
        }
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
