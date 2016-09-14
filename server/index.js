'use strict';

let express = require('express');
let bodyParser = require('body-parser');
var exec = require('child_process').exec;

const app = express();

app.use(bodyParser.json());

// API
let apiRouter = express.Router();
apiRouter
  .route('/shell')
  .post((req, res) => {
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

app.use('/api', apiRouter);

app.listen(4001, () => console.log('Backend started at port 4001'));
