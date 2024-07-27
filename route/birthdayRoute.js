const express = require('express');
const middleware = require('./utils/birthdayMiddlewares');
const Birthday = require('../model/birthdayModel');

const birthdayRouter = express.Router();

birthdayRouter.post(
  '/birthday',
  middleware.createBirthdayValidator,
  async (req, res) => {
    try {
      const { username, email, dob } = req.body;
      const birthday = Birthday.create({ username, email, dob });

      res.json({
        message: 'Hey! Your Birthday details added successfully',
        birthday,
      });
      console.log('Birthday added successfully');
    } catch (error) {
      console.error('Oops! Error encountered when adding your birthday', error);
      res.status(500).json({
        error: 'Internal Server Error',
      });
    }
  }
);

module.exports = birthdayRouter;
