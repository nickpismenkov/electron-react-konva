const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const getJSON = (res, data) => {
  try {
    if (JSON.parse(data)) {
      return res.send(data);
    }
  } catch (e) {
    return res.status(400).send({
      message: 'Unsuitable format',
    });
  }
};

app.get('/get_data', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');

  try {
    const data = fs.readFileSync(req.query.file, 'utf8');
    getJSON(res, data);
  } catch (e) {
    return res.status(400).send({
      message: 'File not found',
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`The server is running on the port: ${PORT}...`)
);
