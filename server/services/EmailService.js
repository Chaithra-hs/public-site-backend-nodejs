const { emailUserService } = require ("../contants/urls");
const { mailService } = require ("../utils/mailUtil");
const cors = require('cors');

module.exports = function (app) {
    app.post(emailUserService, cors(), async (request, response, next) => {
      try {
        const { email, name, message, subject } = request.body;
        await mailService(
          process.env.EMAIL_ID,
          subject || 'Customer Enquiry Mail From Donyati Site',
          name,
          email,
          message
        );
        response.status(201).json({ message: 'Form submitted successfully' });
      } catch (error) {
        console.error('Error:', error);
        response.status(500).json({ error: 'Internal server error' });
      }
    });
  };

