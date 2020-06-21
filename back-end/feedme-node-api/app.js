const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const errorHandler = require('helpers/error-handler');

const { authRouter } = require('./routes/index');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/auth', authRouter);

app.use(errorHandler);

const server = app.listen(8080, function() {
    console.log('Express server listening on port ' + port);
});
