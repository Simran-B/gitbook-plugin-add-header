module.exports = {
  website: {
    assets: ".",
    html: {
      "body:start": function(current) {
        return require("fs").readFileSync("./HEADER.md")
      }
    }
  }
};