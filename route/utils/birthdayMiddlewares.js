const joi = require('joi');

const createBirthdayValidator = async (req, res, next) => {
  try {
    const birthdaySchema = joi.object({
      username: joi.string().empty().required().messages({
        'string.base': `"username" must be a text`,
        'string.empty': `"username" can not be emoty`,
        'string.required': `"username" is required`,
        'string.pattern.base': `"username" must start with a letter`,
      }),
      email: joi.string().empty().email().required().messages({
        'string.base': `"email" must be a "text"`,
        'string.empty': `"email" can not be empty`,
        'string.required': `"email" is required`,
      }),
      dob: joi.date().empty().required(),
    });

    const validatedBody = await birthdaySchema.validateAsync(req.body, {
      abortEarly: true,
    });
    req.body = validatedBody;
    next();
  } catch (error) {
    res.status(422).json({
      message: 'Oops!. Wrong information inputted',
      error: error.message,
    });
  }
};

module.exports = { createBirthdayValidator };
