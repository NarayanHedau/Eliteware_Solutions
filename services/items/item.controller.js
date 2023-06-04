const ItemService = require("./item.services");
const { commonResponse } = require("../../helper");

module.exports = {

    /*
    *  Create Item
    */
    create: async (req, res) => {
        try {
            const userId = req.userId;
            const queryObj ={
                userId:userId,
                ...req.body
            }
            const createItem = await ItemService.create(queryObj)
            return commonResponse.success(res, "ITEM_CREATED", 200, createItem)
        } catch (error) {
            console.log("error ", error);
            return commonResponse.CustomError(res, "DEFAULT_INTERNAL_SERVER_ERROR", 500);
        }
    },

    
    /*
    *  Get All Items
    */
    getAllItems: async(req, res)=>{
        try {
            const getAllItems = await ItemService.findAll(req.query)
            return commonResponse.success(res, "ITEM_FETCHED_SUCCESSFULLY", 200, getAllItems)
        } catch (error) {
            console.log("error ", error);
            return commonResponse.CustomError(res, "DEFAULT_INTERNAL_SERVER_ERROR", 500);
        }
    },

    
    /*
    *  Get All Items By Id
    */
    getSingleItem: async(req, res)=>{
        try {
            const Id = req.params.id
            const getItem = await ItemService.findOne({_id:Id})
            return commonResponse.success(res, "ITEM_FETCHED_SUCCESSFULLY", 200, getItem)
        } catch (error) {
            console.log("error ", error);
            return commonResponse.CustomError(res, "DEFAULT_INTERNAL_SERVER_ERROR", 500);
        }
    },

        
    /*
    *  Delete Item
    */
   deleteItem: async(req, res)=>{
    try {
        const Id = req.params.id
        const deleteItem = await ItemService.delete({_id:Id});
        return commonResponse.success(res, "ITEM_DELETED", 200)
    } catch (error) {
        console.log("error ", error);
        return commonResponse.CustomError(res, "DEFAULT_INTERNAL_SERVER_ERROR", 500);
    }
   },

           
    /*
    *  Update Item
    */
    updateItem: async(req, res)=>{
        try {
            const Id = req.params.id
            const deleteItem = await ItemService.update(Id, req.body);
            if (deleteItem) {
                const getItem = await ItemService.findOne({_id:Id})
                return commonResponse.success(res, "ITEM_FETCHED_SUCCESSFULLY", 200, getItem)
            }else{
            return commonResponse.CustomError(res, "DEFAULT_INTERNAL_SERVER_ERROR", 400);
            }
        } catch (error) {
            console.log("error ", error);
            return commonResponse.CustomError(res, "DEFAULT_INTERNAL_SERVER_ERROR", 500);
        }
       }
};
