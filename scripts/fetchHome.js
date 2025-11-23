const http = require("http");

http
  .get("http://localhost:3002/", (res) => {
    console.log("status", res.statusCode);
    let body = "";
    res.on("data", (c) => (body += c));
    res.on("end", () => {
      console.log("bodySnippet:", body.slice(0, 300));
    });
  })
  .on("error", (e) => console.error("err", e));
