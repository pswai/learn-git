'use strict';

let express = require('express');
let bodyParser = require('body-parser');
var exec = require('child_process').exec;
var fs = require('fs');
var path = require('path');

const app = express();

app.use(bodyParser.json());

// API
let apiRouter = express.Router();
apiRouter
  .post('/shell', (req, res) => {
    exec(req.body.command, function(err, stdout, stderr) {
      if (err) {
        res.status(500).send(err);
        return;
      }

      res.json({
        command: req.body.command,
        stdout,
        stderr
      });
    });
  });

const SAVE_PATH = path.resolve(__dirname, '..', 'src', 'save.json');
apiRouter
  .route('/save')
  .get((req, res) => {
    fs.readFile(SAVE_PATH, 'utf8', (err, data) => {
      if (err) {
        res.status(500).send(err);
        return;
      }

      res.send(JSON.parse(data));
    });
  })
  .post((req, res) => {
    fs.writeFile(SAVE_PATH, JSON.stringify(req.body), 'utf8', (err) => {
      if (err) {
        res.status(500).send(err);
        return;
      }

      res.sendStatus(200);
    });
  });

app.use('/api', apiRouter);

app.listen(4001, () => console.log('Backend started at port 4001'));
