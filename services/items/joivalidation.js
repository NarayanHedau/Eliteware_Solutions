const Joi = require("joi")
const { commonResponse } = require("../../helper");

module.exports = {

  createItem: async (req, res, next) => {
    try {
      const schema = Joi.object({
        name: Joi.string().required(),
        category: Joi.string().required(),
        description: Joi.string().required(),
        price: Joi.number().required(),
      });
      const { error, value } = schema.validate(req.body);
      if (error) {
        return commonResponse.CustomError(res, "VALIDATION_ERROR", 400, {}, error.message);
      }
      next();
    } catch (error) {
      return commonResponse.CustomError(res, "DEFAULT_INTERNAL_SERVER_ERROR", 500);

    }
  },






}
