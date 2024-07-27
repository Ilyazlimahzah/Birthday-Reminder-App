# Birthday Reminder App Documentation
### Introduction
A birthday reminder application (CelebrateMe) designed to help you remember and celebrate the special moments of your friends, family, and loved ones. This documentation provides an overview of the application's features, setup instructions, and usage guidelines.
### Features
- User Entry: Enter the name, email, and date of birth of the person you want to add.
- Automated Email Reminders: Receive automated email reminders for upcoming birthdays.
- Customizable Messages: Personalize birthday messages sent to your loved ones.
### Setup Instructions
#### Prerequisites
Before setting up Birthday Reminder App, ensure you have the following installed:
- Node.js and npm
- MongoDB or MongoDB Cloud
### Installation Steps
1. Clone the Birthday Reminder App repository from GitHub:
``` markdown
git clone https://github.com/Chisquare7/birthday-reminder-app.git
```
2. Navigate to the project directory:
``` markdown
cd birthday-reminder-app
```
3. Install dependencies:
``` markdown
npm install
```
4. Set up environment variables:
  - Create a .env file in the root directory.
  - Define the following environment variables in the .env file:
    - PORT: Port number for the application (e.g., 3000).
    - DB_URL: MongoDB connection URL.
    - myNodemailerUser: Your email address for sending reminder emails.
    - myNodemailerPass: an smtp app-specific password (recommend: gmail).
5. Start the application:
``` markdown
npm start
```
6. Access CelebrateMe in your browser at `http://localhost:3000`.
### Usage
1. Add Birthdays:
   - Enter the username, email, and date of birth of the person you want to add.
   - Click "Get Started" to save the birthday in the database.
2. Automated Email Reminders:
   - CelebrateMe sends automated email reminders for upcoming birthdays.
   - Ensure you have provided your email credentials in the environment variables.
3. Customizable Messages:
   - Personalize birthday messages in the birthdayMessages.js file.
   - Customize the email subject and message content as desired.
### Deployment
  - Testable URL:
### Developer
> Chibuike Chijioke | [LinkedIn](https://www.linkedin.com/in/chibuike-chijioke-47520823a/)
###### © Code Chi 2024
