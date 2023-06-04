const ItemModel = require("./item.model");

// find one item document
exports.findOne = async (reqQuery) => {
  return await ItemModel.findOne(reqQuery);
};

// To create Item Document
exports.create = async (data) => {
  return await ItemModel(data).save();
};


// find all document with Pagination, Filtering, and Sorting
exports.findAll = async (reqQuery) => {
  let queryObj = {}
  let result;
  let count;
  const page = reqQuery.page ? parseInt(reqQuery.page) : 1;
  const limit = reqQuery.limit ? parseInt(reqQuery.limit) : 10;
  const skip = (page - 1) * limit;

  const name = reqQuery.name ? reqQuery.name : ""
  const category = reqQuery.category ? reqQuery.category : ""
  
  let totalCount = await ItemModel.countDocuments(queryObj) // calcculate total number of Item document count 

  // To checks if the name or category query parameters are present and not empty
  if (reqQuery.name && reqQuery.name != "" || reqQuery.category && reqQuery.category != "") {
    queryObj = {
      ...queryObj,
      $or: [{ name: name }, { category: category }]  // filterig data with name or category
    }
    count = await ItemModel.countDocuments(queryObj) // count the number of document in the ItemModel collection that match the queryObj criteria.
    result = await ItemModel.find(queryObj).limit(limit * 1).skip(skip).sort({ _id: -1 });
  } else {
    count = await ItemModel.countDocuments(queryObj)
    result = await ItemModel.find(queryObj).limit(limit * 1).skip(skip).sort({ _id: -1 });
  }
  let respData = {
    metadata: {
      totalCount: totalCount,
      count: count
    },
    result,
  }
  return respData
};

// To Delete the Document
exports.delete = async (reqQuery) => {
  return await ItemModel.findByIdAndDelete(reqQuery);
};

// To update the document
exports.update = async (Id, reqBody) => {
  return await ItemModel.findByIdAndUpdate({ _id: Id }, { $set: reqBody }, { new: true });
};