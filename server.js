const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherpage') {
    fs.readFile('otherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherotherpage') {
    fs.readFile('otherotherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
      fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=7`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          cardOneImg: data.cards[0].image,
          cardTwoImg: data.cards[1].image,
          cardThreeImg: data.cards[2].image,
          cardFourImg: data.cards[3].image,
          cardFiveImg: data.cards[4].image,
          cardSixImg: data.cards[5].image,
          cardSevenImg: data.cards[6].image   
      }
        res.end(JSON.stringify(objToJson));
    })
      .catch(err => {
          console.log(`error ${err}`)
      })
    
    
  }else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
