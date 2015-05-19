/******************************************
		Project: Turf Pro
		Author: Adam Lawrence
		Email: me@adamlawrence.com.au
********************************************/

function ProblemsPage(pageName)
{
  this.pageName = pageName;
  this.init();
}

ProblemsPage.prototype.serverDataPush = function(data, callback)
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

ProblemsPage.prototype.queryRegControls = function(placeholder, callback)
{
    //GET THE PRODUCTS THAT TREAT A SPECIFIC PROBLEM
    var problemID = problemId,     //TEST FOR DOLLAR SPOT
        subOptionClass = Parse.Object.extend("PinSubOptions"),
        subOptionObject = new subOptionClass(),
        productTreatsClass = Parse.Object.extend("ProductTreats"),
        productTreatsQuery = new Parse.Query(productTreatsClass);

    subOptionObject.id = problemID;
    productTreatsQuery.include("subOptionObject");
    productTreatsQuery.equalTo("TreatsSubOption", subOptionObject);
    productTreatsQuery.find({
        success: function(results) 
        {
            // alert("Product Treats Query worked!")
            // console.log("Product to Treat this problem are returned");
            callback(results);
        },
          error: function(error) {
            alert("Error: " + error.code + " " + error.message);
          }
    });	
};

ProblemsPage.prototype.weedsContent = function()
{
	for(var i = 0; i < weeds.length; i++)
	{
	    if(itemName == weeds[i]._serverData.SubOption)
	    {
	        var obj, problemID, imageURL;

	        try {
	        	imageURL = weeds[i]._serverData.SubOptionImage._url
	        } catch(e){
	        	imageURL = null
	        }

	        obj = {
                  'Title': weeds[i]._serverData.SubOption, 
                  'SubHeading': weeds[i]._serverData.SubOptionLatinName,
                  'Description': weeds[i]._serverData.SubOptionDescription,
                  'References': weeds[i]._serverData.SubOptionReferences,
                  'ImageURL': imageURL
	            };
	        
	        var buildContent = new ContentBuilder('std', 'description', obj, false);
	    }
  }  
};

ProblemsPage.prototype.diseasesContent = function()
{
  for(var i = 0; i < diseases.length; i++)
  {
      if(itemName == diseases[i]._serverData.SubOption)
      {
          var obj, problemID, imageURL;

          try {
            imageURL = diseases[i]._serverData.SubOptionImage._url
          } catch(e){
            imageURL = null
          }

          obj = {
                  'Title': diseases[i]._serverData.SubOption, 
                  'SubHeading': diseases[i]._serverData.SubOptionLatinName,
                  'Description': diseases[i]._serverData.SubOptionDescription,
                  'References': diseases[i]._serverData.SubOptionReferences,
                  'ImageURL': imageURL
              };
          
          var buildContent = new ContentBuilder('std', 'description', obj, false);
      }
  }  
};

ProblemsPage.prototype.pestsContent = function()
{
  for(var i = 0; i < pests.length; i++)
  {
      if(itemName == pests[i]._serverData.SubOption)
      {
          var obj, problemID, imageURL;

          try {
            imageURL = pests[i]._serverData.SubOptionImage._url
          } catch(e){
            imageURL = null
          }

          obj = {
                  'Title': pests[i]._serverData.SubOption, 
                  'SubHeading': pests[i]._serverData.SubOptionLatinName,
                  'Description': pests[i]._serverData.SubOptionDescription,
                  'References': pests[i]._serverData.SubOptionReferences,
                  'ImageURL': imageURL
              };
          
          var buildContent = new ContentBuilder('std', 'description', obj, false);
      }
  }  
};

ProblemsPage.prototype.init = function()
{
	var _this = this;

	switch (this.pageName)
	{
		case 'pests':
			this.pestsContent();
      this.queryRegControls('pests', function(data)
      {    
          _this.serverDataPush(data, function(obj)
          {
            var buildProductList = new ListBuilder('regControls', obj, 'standardLink', false );
          });
      });			
      var createSideNav = new ListBuilder('sideNav', pestsData, 'menu', false);
			var eventManager = new EventManager('pests');
		break;

		case 'diseases':
			this.diseasesContent();
      this.queryRegControls('diseases', function(data)
      {    
          _this.serverDataPush(data, function(obj)
          {
            var buildProductList = new ListBuilder('regControls', obj, 'standardLink', false );
          });
      });
			var createSideNav = new ListBuilder('sideNav', diseasesData, 'menu', false);
			var eventManager = new EventManager('diseases');
		break;

		case 'weeds':
      this.weedsContent();
      this.queryRegControls('weeds', function(data)
      {
          _this.serverDataPush(data, function(obj)
          {
            var buildProductList = new ListBuilder('regControls', obj, 'standardLink', false );
          });
      });
      // this.buildPage('weeds');
			var createSideNav = new ListBuilder('sideNav', weedsData, 'menu', false);
			var eventManager = new EventManager('weeds');
		break;
   }
};
