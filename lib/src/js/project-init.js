/******************************************
		Project: Turf Pro
		Author: Adam Lawrence
		Email: me@adamlawrence.com.au
********************************************/

function ProjectHub(page, nav, aside)
{
	this.page = page;
	this.nav = nav;
	this.aside = aside;
	this.pushData();
}

ProjectHub.prototype.pushData = function(callback)
{
	var _this = this;

	this.weedsPushed = false;
	this.pestsPushed = false;
	this.diseasesPushed = false;
	this.productsPushed = false;

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
	        _this.weeds = results;
	        _this.weedsPushed = true;
      		_this.serverDataPush('weeds', results, function(obj)
      		{
      			_this.weedsData = obj;
      		});
	        _this.dataLoaded();
	   	},
	    error: function(error)
	    {
	        alert("Error: " + error.code + " " + error.message);
	    }
	});

	// pests 

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
	  	_this.pests = results;
	  	_this.pestsPushed = true;
  		_this.serverDataPush('pests', results, function(obj)
  		{
  			_this.pestsData = obj;
  		});
	  	_this.dataLoaded();
	  },
	      error: function(error) {
	        alert("Error: " + error.code + " " + error.message);
	      }
	});

	// diseases 

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
      		_this.diseases = results;
      		_this.diseasesPushed = true;
      		_this.serverDataPush('diseases', results, function(obj)
      		{
      			_this.diseasesData = obj;
      		});
      		_this.dataLoaded();
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
			_this.products = results;
			_this.productsPushed = true;
      		_this.serverDataPush('products', results, function(obj)
      		{
      			_this.productsData = obj;
      		});
			_this.dataLoaded();
    	},
        error: function(error)
        {
            alert("Error: " + error.code + " " + error.message);
        }
    });
};

ProjectHub.prototype.serverDataPush = function(type, data, callback)
{
    var obj = [];

    if(type == 'products')
	{
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
    };

    for(var i = 0; i < data.length; i++)
    {
    	var name, catergory, problemId;

    	if (typeof data[i].id === "undefined") 
    	{
    		problemId = 'null';
    	}
    	else 
    	{
    		problemId = data[i].id;
    	};    	

    	name = data[i]._serverData.SubOption;
    	catergory = data[i]._serverData.PinOptionString;
    	obj.push({'name' : name, 'catergory': catergory, 'id': problemId });      	
    }

   	callback(obj);
};

ProjectHub.prototype.navInit = function()
{
	var sendToListBuilder = new ListBuilder('menu-weeds', this.weedsData, 'menu', false);
	var sendToListBuilder = new ListBuilder('menu-pests', this.pestsData, 'menu', false);
	var sendToListBuilder = new ListBuilder('menu-diseases', this.diseasesData, 'menu', false);
};

ProjectHub.prototype.queryRegControls = function(id, callback)
{
    //GET THE PRODUCTS THAT TREAT A SPECIFIC PROBLEM
    var problemID = id,     //TEST FOR DOLLAR SPOT
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

ProjectHub.prototype.contentPush = function(title, data)
{
	for(var i = 0; i < data.length; i++)
	{ 
	    if(title == data[i]._serverData.SubOption)
	    {
	        var obj, problemID, imageURL;

	        try {
	        	imageURL = data[i]._serverData.SubOptionImage._url
	        } catch(e){
	        	imageURL = null
	        }

	        obj = {
                  'Title': data[i]._serverData.SubOption, 
                  'SubHeading': data[i]._serverData.SubOptionLatinName,
                  'Description': data[i]._serverData.SubOptionDescription,
                  'References': data[i]._serverData.SubOptionReferences,
                  'ImageURL': imageURL
	            };
	        
	        var buildContent = new ContentBuilder('std', 'description', obj, false);
	    }
    }  
};

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

ProjectHub.prototype.queryProductInfo = function(id, callback)
{
    //NEXT STEP IN PRODUCT DETAILS, ASSUME ObjectId has been passed via URL Parameter
    var productTypeObjectID = id,		//Testing for Fungicides *TEST*ONLY*
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
			// console.log("Product SubTypes returned are: ", results);
			callback(results);
    	},
          error: function(error) {
            alert("Error: " + error.code + " " + error.message);
          }
    });	
};

ProjectHub.prototype.urlParse = function(page, callback)
{
	var path, title, info;

    path = window.location.href;
    title = path.slice(path.search('itemName='), path.search('secInfo=')).replace(/%20/g, ' ').replace('itemName=','').replace('?','');
   	info = path.slice(path.search('secInfo='), window.location.href.length).replace(/%20/g, ' ').replace('secInfo=','').replace('#','').replace('?','');

    callback(title, info);
};

ProjectHub.prototype.buildPage = function(page, serverPush)
{
	var _this = this;

	this.urlParse(page, function(title, info)
	{
		_this.contentPush(title, serverPush);
		_this.queryRegControls(info, function(data)
			{
				_this.serverDataPush('products', data, function(obj)
				{
					var buildProductList = new ListBuilder('regControls', obj, 'standardLink', false );
				});
			});
	});		
};

ProjectHub.prototype.dataLoaded = function()
{
	var _this = this;

	if(this.weedsPushed && this.productsPushed && this.pestsPushed && this.diseasesPushed) 
	{
		///  console.log('hey this is loaded');
		$('#loader').hide();

		switch (this.page)
		{
			case 'index':
				this.navInit();
				var eventManager = new EventManager('index');
			break;

			case 'pests':
				this.navInit();
				this.buildPage('pests', _this.pests);	
				var createSideNav = new ListBuilder('sideNav', this.pestsData, 'menu', false);
				var eventManager = new EventManager('pests');
			break;

			case 'diseases':
				this.navInit(); 
				this.buildPage('diseases', _this.diseases);
				var createSideNav = new ListBuilder('sideNav', this.diseasesData, 'menu', false);
				var eventManager = new EventManager('diseases');
			break;

			case 'weeds':
				this.navInit();
				this.buildPage('weeds', _this.weeds);
				var createSideNav = new ListBuilder('sideNav', this.weedsData, 'menu', false);
				var eventManager = new EventManager('weeds');
			break;

			case 'products':
				this.navInit();
				this.urlParse('products', function(title, info)
				{

					if(title == 'space' && info == 'space')
					{
						var createSideNav = new ListBuilder('sideNav', _this.productsData, 'menu', false);
					}
					else
					{
						// SECOND LEVEL PRODUCT RETURNED 
						_this.queryProductInfo(info, function(data)
						{
							var createSideNav = new ContentBuilder('productList', 'sideNav', data);
							_this.contentProductPush(title, data);

							$('#sideNav').on('click','.secondLevel', function(event)
							{
								var lookUp = 'product-' + $(this).attr('data-lookUp');
								console.log(lookUp);
								
								$('main div').each(function()
									{
										$(this).addClass('hidden');
									});
								
								$('#' + lookUp).removeClass('hidden');

								event.preventDefault();
							});


							//_this.contentProductParse
						});
					}
				});			
				
				var eventManager = new EventManager('products');

			break;

		};

	}
};
