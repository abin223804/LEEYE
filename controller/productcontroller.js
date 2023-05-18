const product = require("../model/productModel");
const multer = require("multer");





const listproducts = async (req, res) => {
    try {
      const productData = await product.find();
      
      
      res.render("listProducts", {
        products: productData,
               
      });
    } catch (error) {
      console.log(error.message);
      
    }
  };


  const loadAddProduct = async (req, res,) => {
   
    try {
      res.render("addProduct");
    } catch (error) {
      console.log(error.message);
      
    }
  };

  const addProduct = async (req, res) => {
    try {
      const images = req.files;
  
      const products = new product({
        name: req.body.sName,
        description: req.body.sDescription,
        mrp: req.body.sPrice,
        shippingcharge: req.body.sshippingcharge,
        discount:req.body.sDiscount,
        totalamount:req.body.stotalamount,
        
        
        image: images.map((x) => x.filename),
      });
      const productData = await products.save();
  
      if (productData) {
        res.render("addProduct", {
          
          message: "registration successfull.",
        });
      } else {
        res.render("addProduct", {
          
          message: "registration failed",
        });
      }
    } catch (error) {
      console.log(error.message);
      
    }
  };


  
const loadEditProduct = async (req, res,) => {
    try {
      const id = req.query.id;
      const productData = await product.findById({ _id: id });
      
  
      if (productData) {
        res.render("editProduct", 
        {
          product: productData,
          
        }
        );
      } else {
        res,
          redirect("/admin/listProduct", { message: "product doesn't exist" });
      }
    } catch (error) {
      console.log(error).message;
      
    }
  };


  const editProduct = async(req,res)=>{
    try
    {
     const id = req.body.id
     const images = req.files;
     await product.findByIdAndUpdate({_id:id},{$set:
        {name:req.body.name, mrp: req.body.mrp,
        discount: req.body.discount,
        shippingcharge: req.body.shippingcharge,
        totalamount: req.body.total,
        description: req.body.description,
        image: images.map((x) => x.filename), }})

        res.redirect('/')

}


catch(error)
{
    console.log(error.message)
} }
   
 


  const deleteProduct = async (req, res) => {
    try {
      const id = req.query.id;
      await product.deleteOne({ _id: id }), 
      res.redirect("listProduct");
    } catch (error) {
      console.log(error.message);
      
    }}




module.exports={
    listproducts, 
    loadAddProduct,
    addProduct ,
    loadEditProduct,
    editProduct,
    deleteProduct ,



}