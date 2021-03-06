/***********************************************
	Function:	Products
	Author: 	Adam Lawrence
	Contact: 	adam@adamlawrencedesign.com	
*************************************************/

function ProductsPage(catergory, productId)
{
  this.catergory = catergory;
  this.productId = productId;
  this.init();
}

// PARSE RETURNED INFO EG 'name' : name, 'catergory': catergory, 'id': problemId
ProductsPage.prototype.serverDataPush = function(type, data, callback)
{
    var obj = [];

    for(var i = 0; i < data.length; i++)
    {
      var name, catergory, id, productId;
      name = data[i]._serverData.Type;
      productName = data[i]._serverData.ProductName;
      id = data[i].id;
      catergory = 'products';

      try {
          productId = data[i]._serverData.Product.id
      } catch(e) {
          productId = null
      }

      obj.push({'name' : name, 'productName': productName, 'catergory': catergory, 'id': id, 'productId': productId });  
    }    

    callback(obj);
};

// CREATE PRODUCT INFO PAGE
ProjectHub.prototype.contentProductPush = function(title, data)
{
  var obj = [];
      
  for(var i = 0; i < data.length; i++)
  {
        obj.push({
              'ActiveIngredient': data[i]._serverData.ActiveIngredientString, 
              'ChemicalGroup': data[i]._serverData.ChemicalGroup,
              'FormOfChemical': data[i]._serverData.FormOfChemical,
              'ManufacturerName': data[i]._serverData.ManufacturerName,
              'PoisonSchedule': data[i]._serverData.PoisonSchedule,
              'ProductName' :  data[i]._serverData.ProductName,
              'ProductTypeString' : data[i]._serverData.ProductTypeString,
            });
  }; 

    var buildContent = new ContentBuilder('products', 'description', obj);
};

ProjectHub.prototype.queryWhatProductTreats = function(productId, callback)
{
    //GET THE DEFECTS A SPECIFIC PRODUCT TREATS
    var productID = productId,     //TEST FOR 250GT
        productClass = Parse.Object.extend("ProductDetails"),
        productObject = new productClass(),
        productTreatsClass = Parse.Object.extend("ProductTreats"),
        productTreatsQuery = new Parse.Query(productTreatsClass);

    productObject.id = productID;
    productTreatsQuery.include("productObject");
    productTreatsQuery.equalTo("Product", productObject);
    productTreatsQuery.find({
        success: function(results) {
            //alert("Product Query worked!")
            //console.log("This Product treats: ")
            for (i = 0; i < results.length; i++) 
            {
                var productTreatsObject = Parse.Object.extend("ProductTreats");
                productTreatsObject = results[i];
                //console.log("SubOptionID is " + i + " is: " + productTreatsObject.get("TreatsSubOption").id);
                var defectID = productTreatsObject.get("TreatsSubOption").id,
                    defectClass = Parse.Object.extend("PinSubOptions"),
                    defectQuery = new Parse.Query(defectClass);

                defectQuery.equalTo("objectId", defectID);
                defectQuery.find({
                    success: function(results2)
                    {
                        //console.log("results2 are ",results2);
                        var defectObject = Parse.Object.extend("PinSubOptions");
                        defectObject = results2[0];

                        console.log('The results are: ', results2);
                        console.log("This product treats defect which is of type: " + defectObject.get("PinOptionString"));
                    },
                    error: function(error2) {
                            alert("Error: " + error.code + " " + error.message);
                    }
                });
            }
        },
          error: function(error) {
            alert("Error: " + error.code + " " + error.message);
          }
    });
};

// PRODUCT TYPE QUERY - MAYBE PRODUCT CATERGORIES
ProjectHub.prototype.queryProductInfo = function(id, callback)
{
    //NEXT STEP IN PRODUCT DETAILS, ASSUME ObjectId has been passed via URL Parameter
    var productTypeObjectID = id,   //Testing for Fungicides *TEST*ONLY*
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
      // alert("Product Types Query worked!")
      // console.log("Product SubTypes returned are: ", results);
      callback(results);
      },
          error: function(error) {
            alert("Error: " + error.code + " " + error.message);
          }
    }); 
};

// QUERY - TEST FOR SPECIFIC PRODUCT BY ID NAME
ProjectHub.prototype.queryProductId = function(id, callback)
{
    //GET PRODUCT INFORMATION FROM A SPECIFIC ID
    var problemID = this.productId,     //TEST FOR 250GT "ezttHMv8vV"
        productClass = Parse.Object.extend("ProductDetails"),
        productObject = new productClass(),
        productQuery = new Parse.Query(productClass);

    productObject.id = problemID;
    productQuery.include("productObject");
    productQuery.equalTo("objectId", problemID);
    productQuery.find({
        success: function(results) 
        {
            callback(results);
        },
          error: function(error)
          {
            alert("Error: " + error.code + " " + error.message);
          }
    });
};

ProductsPage.prototype.firstLevelList = function()
{
    var createSideNav = new ListBuilder('sideNav2', _this.productsData, 'menu', false);
    
    $('#sideNav2').on('click','a', function()
    {             
        var catergory, id;

        catergory = $(this).attr('data-name').slice(0,1).toUpperCase() + $(this).attr('data-name').slice(1, $(this).attr('data-name').length);
        id = 'space';

        this.href = window.location.origin + '/turfPro/Products.html?itemName=' + catergory + '?secInfo=' + id;    
        // event.preventDefault();               
    });
};

ProductsPage.prototype.init = function()
{
  var _this = this;

  if(this.catergory == 'space' && this.productId == 'space')
  {
    this.firstLevelList();
  }
  else
  {
    // BUILD CONTENT FOR THE PRODUCTS PAGE
    this.queryProductId(this.productId, function(data)
    {
      _this.contentProductPush(itemName, data);

      _this.queryWhatProductTreats(secondaryInfo, function(data)
      {
        console.log('now build list of treatments using this: ', data)
      })
    }); 

    // BUILD SECONDARY LIST OF PRODUCTS
    for(var i = 0; i < _this.productsData.length; i++)
    {
      if(itemName == _this.productsData[i].name)
      {         
        _this.queryProductInfo(_this.productsData[i].id, function(data)
        {
          var createSideNav = new ContentBuilder('productList', 'sideNav', data);
        });
      }
    };            
  }                     
    
  var eventManager = new EventManager('products');
};
