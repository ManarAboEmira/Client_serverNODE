const http = require("http");
const fs = require("fs");

const users = {
  id: 1,
  name: "Manar",
};

const content = `
<head>
<link rel="stylesheet" href="index.css" />
</head>
<h1> Hello World</h1>
<img src="./kitten.jpg" alt="cat">
`;

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(req.url);

  switch (req.url) {
    case "/":
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(content);
      break;
    case "/users":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(users));
      break;
    case "/index.css":
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/css");
      res.end(fs.readFileSync("index.css"));
      break;
    case "/kitten.jpg":
      res.statusCode = 200;
      res.setHeader("Content-Type", "image/jpeg");
      res.end(fs.readFileSync("kitten.jpg"));
      break;
    default: 
      res.statusCode = 404;
      res.end("not found");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
