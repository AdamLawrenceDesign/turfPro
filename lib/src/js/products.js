/***********************************************
	Function:	Weed Query
	Author: 	Adam Lawrence
	Contact: 	adam@adamlawrencedesign.com	
*************************************************/

function Products()
{
    //NOW ONTO PRODUCTS
    //Main Product types i.e. main menu when you first select "Product Information"

    var productTypeClass = Parse.Object.extend("ProductTypes"),
      productTypesQuery = new Parse.Query(productTypeClass);

    productTypesQuery.find({
      success: function(results) 
      {
        console.log("Product Types returned are: ",results)
      },
          error: function(error) {
            alert("Error: " + error.code + " " + error.message);
          }
    });

    //NEXT STEP IN PRODUCT DETAILS, ASSUME ObjectId has been passed via URL Parameter
    var productTypeObjectID = "G2UMIijr4L",   //Testing for Fungicides *TEST*ONLY*
      productTypeClass = Parse.Object.extend("ProductTypes"),
      productTypeObject = new productTypeClass(),
      productDetailsClass = Parse.Object.extend("ProductDetails"),
      productDetailsQuery = new Parse.Query(productDetailsClass);

    productTypeObject.id = productTypeObjectID;
    productDetailsQuery.include("productTypeObject");
    productDetailsQuery.equalTo("ProductType", productTypeObject);
    productDetailsQuery.find(
    {
      success: function(results)
      {
        //alert("Product Types Query worked!")
        console.log("Product SubTypes returned are: ",results)
      },
          error: function(error) {
            alert("Error: " + error.code + " " + error.message);
          }
    });

};