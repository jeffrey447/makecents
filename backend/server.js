const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// configure routes
app.use('/api/users', require('./routes/users'))

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}.`)
});