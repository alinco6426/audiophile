const mongoose = require("mongoose");

exports.getAllProducts = async (req , res) => {
     try {
          const collection = mongoose.connection.db.collection("products");

          const products = await collection.find({}).toArray();
          res.status(200).json({
               status : "sucess",
               products 
          })
     } catch (error) {
          console.log(error)
     }
}

exports.getProductsByCategory = async (req , res) => {
         try {
           let category = req.params.category;
           if(!category){
               return res.status(400).json({
                    status : "failed",
                    message : "No category specified"
               });
           };
           const collection = mongoose.connection.db.collection("products");
           
           const productsInCategotry = await collection.find({category : category}).toArray();
           res.status(200).json({
               status : "success",
               products : productsInCategotry,
           });          
          
     } 
     catch (error) {
          res.status(500).json({
               status : "Internal error",
               message : "Failed to fetch products"
          });
     }
}