const schedule = require("node-schedule");
const Birthday = require("../model/birthdayModel");
const { birthdayEmail } = require("../mailerMessage/birthdayMessages");


async function runTimedJob() {
  try {
    const startOfDay = new Date();
    startOfDay.setUTCHours(0, 0, 0, 0);

    const todayMonth = startOfDay.getUTCMonth() + 1;
    const todayDate = startOfDay.getUTCDate();

    const celebrantsWithBirthdays = await Birthday.find({
      $expr: {
        $and: [
          {$eq: [{$month: "$dob"}, todayMonth]},
          {$eq: [{$dayOfMonth: "$dob"}, todayDate]},
        ]
      }
    });

    console.log("Celebrants with birthdays:", celebrantsWithBirthdays);

    if (celebrantsWithBirthdays.length !== 0) {
      const emails = celebrantsWithBirthdays.map(
        (celebrants) => celebrants.email
      );

      console.log("Email to be sent:", emails);

      console.log("Celebrants with birthdays:", celebrantsWithBirthdays);
      await birthdayEmail(emails, celebrantsWithBirthdays);
      console.log("Emails sent successfully");
    }
  } catch (error) {
    console.error("Oops! Error encountered in scheduling job:", error);
  }
}

module.exports = runTimedJob;
