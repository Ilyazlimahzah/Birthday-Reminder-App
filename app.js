const express = require('express');
const bodyParser = require('body-parser');
const birthdayRoute = require('./route/birthdayRoute');
const runTimedJob = require('./scheduler/cron');
const cron = require('node-schedule');
const { default: mongoose } = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT;

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', async (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});
app.use(birthdayRoute);

cron.scheduleJob('0 7 * * *', async function () {
  console.info('cron scheduler running');
  await runTimedJob();
});

cron.scheduleJob('* * * * * *', () => {
  console.log('Task is running every second:', new Date().toLocaleTimeString());
});

app.listen(PORT, () => {
  try {
    mongoose.connect(process.env.MONGO_URL, {
      serverSelectionTimeoutMS: 60000,
    });
    console.log('Database connection successful');
  } catch (err) {
    console.log('Database connection failed', err);
  }
  mongoose.set('debug', true);
  console.log(`Server running at: http://localhost:${PORT}`);
});
