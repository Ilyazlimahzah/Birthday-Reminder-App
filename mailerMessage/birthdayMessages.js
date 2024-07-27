const nodemailer = require('nodemailer');
require('dotenv').config();

const birthdayEmail = async (emails, celebrants) => {
  const mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.nodemailerUser,
      pass: process.env.nodemailerUser,
    },
  });

  const results = await Promise.all(
    celebrants.map(async (celebrant) => {
      const year = new Date().getFullYear();
      const { username, email } = celebrant;

      const mailStructures = {
        from: 'From CelebrateMe app ilyazlimahzah@gmail.com>',
        to: emails.join(','),
        subject: `Memorable Moments Reminder! ${username}`,
        text: `Happy birthday, ${username}! Wishing you a great and fantastic new year, as you celebrate your birthday in ${year}.`,
        html: `<p>Another year wiser, another year more fabulous! Here's to embracing the journey ahead with grace and gratitude. <p style="font-weight:bold;">Happy birthday!</p></p>`,
      };

      try {
        const info = await mailTransporter.sendMail(mailStructures);
        console.log('Hurray! Email sent successfully:', info.response);
      } catch (error) {
        console.error('Oops! Error encountered when sending email:', error);
      }
    })
  );

  return results;
};

module.exports = { birthdayEmail };
