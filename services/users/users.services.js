const { commonResponse } = require("../../helper");
const UsersModel = require("./users.model");
const validator = require("./joivalidation")

exports.findOne = async (reqQuery) => {
  return await UsersModel.findOne(reqQuery);
};

exports.create = async (data) => {
  return await UsersModel(data).save();
};

exports.findAll = async (reqQuery) => {
  const page = reqQuery.page ? parseInt(reqQuery.page) : 1;
  const limit = reqQuery.limit ? parseInt(reqQuery.limit) : 10;
  const skip = (page - 1) * limit;
  return await UsersModel.find().select("-password").limit(limit * 1).skip(skip);
};