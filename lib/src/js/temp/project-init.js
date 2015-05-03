/*
* Initialise Products
*/

$(function()
{
	// var weeds, pests, diseases, products;

	Parse.initialize("7evCbPbxwHD1x53LoIAN3pyRx8wLIek4Gf7HSAxs", "H7LuMPGDwv9VPRm0jH7cIhfbgVWlDOofmbmwmEyn");

	var weedsObjectID = "rtqBL6Fz0G",
		pinOptionsClass = Parse.Object.extend("PinOptions"),
		weedsObject = new pinOptionsClass(),
		PinSubOptions = Parse.Object.extend("PinSubOptions"),
		weedsQuery = new Parse.Query(PinSubOptions);

	weedsObject.id = weedsObjectID;
	weedsQuery.include("weedsObject");
	weedsQuery.equalTo("PinOption", weedsObject);
	weedsQuery.find(
	{
		success: function(results)
		{
	        var parseData = new ParseData(results, 'weeds');
	        // weeds = results;
	   	},
	    error: function(error)
	    {
	        alert("Error: " + error.code + " " + error.message);
	    }
	});

	var pestsObjectID = "RM289SQijw",
	  pinOptionsClass = Parse.Object.extend("PinOptions"),
	  pestsObject = new pinOptionsClass(),
	  PinSubOptions = Parse.Object.extend("PinSubOptions"),
	  pestsQuery = new Parse.Query(PinSubOptions);

	pestsObject.id = pestsObjectID;
	pestsQuery.include("pestsObject");
	pestsQuery.equalTo("PinOption", pestsObject);

	pestsQuery.find(
	{
	  success: function(results)
	  {
	  	var parseData = new ParseData(results, 'pests');
	  	// pests = results;
	  },
	      error: function(error) {
	        alert("Error: " + error.code + " " + error.message);
	      }
	});

    var diseasesObjectID = "7AHADlJAsT",
      pinOptionsClass = Parse.Object.extend("PinOptions"),
      diseasesObject = new pinOptionsClass(),
      PinSubOptions = Parse.Object.extend("PinSubOptions"),
      diseasesQuery = new Parse.Query(PinSubOptions);

    diseasesObject.id = diseasesObjectID;
    diseasesQuery.include("diseasesObject");
    diseasesQuery.equalTo("PinOption", diseasesObject);
    diseasesQuery.find(
    {
      success: function(results)
      {
      	var parseData = new ParseData(results, 'diseases');
      	// diseases = results;
      },
          error: function(error) {
            alert("Error: " + error.code + " " + error.message);
          }
    });	

    //Main Product types i.e. main menu when you first select "Product Information"

    var productTypeClass = Parse.Object.extend("ProductTypes"),
    	productTypesQuery = new Parse.Query(productTypeClass);

    productTypesQuery.find(
    {
    	success: function(results)
    	{
			//alert("Product Types Query worked!")
			// console.log("Product Types returned are: ",results);
			var parseData = new ParseData(results, 'products');
			// products = results;
    	},
        error: function(error)
        {
            alert("Error: " + error.code + " " + error.message);
        }
    });

    // var parseData = new ParseData(weeds, pests, diseases, products);


});
