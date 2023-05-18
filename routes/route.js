const express = require("express");
const multer = require("../util/multer");

const route = express.Router();
const product = require("../model/productModel");
const productController = require("../controller/productcontroller");

route.use(express.json());
route.use(express.urlencoded({ extended: true }));

route.get("/", productController.listproducts);
route.get("/addProduct", productController.loadAddProduct);
route.post(
    "/addProduct",
    multer.upload.array("sImage"),
    productController.addProduct
  );



route.get('/loadEditProduct',productController.loadEditProduct);

  route.post(
    "/editProduct",
    productController
    .editProduct)



    route.get("/deleteProduct", productController.  deleteProduct);

    
  

 


module.exports = route;
