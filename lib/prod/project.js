/***********************************************
	Function:	List Builder 
	Author: 	Adam Lawrence
	Contact: 	adam@adamlawrencedesign.com	
*************************************************/

function BuildNav(wrap, obj, type, callback)
{
	this.wrap = wrap;
	this.obj = obj;
	this.type = type;
	this.callback = callback;
	this.check = true;
	this.init()
}

BuildNav.prototype.menuList = function()
{
	for(var i = 0; i < this.obj.length; i++)
	{
		var wrap, li, a, img;
		
		wrap = document.getElementById(this.wrap);
		li = document.createElement('li');
		a = document.createElement('a');

		$(li).append(a);
		$(wrap).append(li);

		$(a).html(this.obj[i].name).attr({'data-name': this.obj[i].name, 
											'data-lookUp' : i, 
											'data-id' : this.obj[i].id, 
											'data-catergory': this.obj[i].catergory, 
											'data-problemId': this.obj[i].problemId 
										});
		//$(a).html(this.obj[i].name);
		// console.log('list builder run');
	}
			
	if(this.callback)	this.callback();
};

BuildNav.prototype.sideNav = function()
{
	for(var i = 0; i < this.obj.length; i++)
	{
		var wrap, li, a, img;

		wrap = document.getElementById(this.wrap);
		li = document.createElement('li');
		a = document.createElement('a');

		$(li).append(a);
		$(wrap).append(li);

		$(a).html(this.obj[i].name).attr({'data-name': this.obj[i].name, 
											'data-lookUp' : i, 
											'data-id' : this.obj[i].id, 
											'data-catergory': this.obj[i].catergory, 
											'data-id': this.obj[i].problemId 
										});
		
		// console.log(this.obj[i])
		//$(a).html(this.obj[i].name);
		// console.log('list builder run');
	}
			
	if(this.callback)	this.callback();
};

BuildNav.prototype.imageLink = function()
{
	for(var i = 0; i < this.obj.length; i++)
	{
		var wrap, li, a, img;
		
		wrap = document.getElementById(this.wrap);
		li = document.createElement('li');
		a = document.createElement('a');
		img = document.createElement('img');
			
		$(li).append(a);
		$(a).append(img);
		$(wrap).append(li);

		$(img).attr({'src': this.obj[i].Path, 'alt': this.obj[i].Name });
		$(a).attr({'data-id': this.obj[i].ID, 'data-lookUp' : i});
		
		/*======================= */ 	// Masonary Needed for list controls 
		
		if(this.masonaryGrid) $(li).addClass('grid');		
	}
		
	/*======================= */ 	// Apply call back if specified and check to apply masonary
	
	if(this.callback)	this.callback();
	if(this.masonaryGrid) this.addMasonary();
};

BuildNav.prototype.standardLink = function()
{
	for(var i = 0; i < this.obj.length; i++)
	{
		var wrap, li, a, img, productId;
		
		wrap = document.getElementById(this.wrap);
		a = document.createElement('a');
		$(wrap).append(a);
		
		try {
			productId = this.obj[i].productId
		} catch(e){
			productId = null
		}

		$(a).html(this.obj[i].productName).attr({'data-name': this.obj[i].name, 
											'data-lookUp' : i, 
											'data-catergory': this.obj[i].catergory,
											'data-id': this.obj[i].id,
											'data-productId': this.obj[i].productId
										}).addClass('m_l_right');
		// console.log('list builder run');
		console.log('reg should be done')

	}
			
	if(this.callback)	this.callback();
};

BuildNav.prototype.init = function()
{
	this.menuList();
};


/***********************************************
	Function:	List Builder 
	Author: 	Adam Lawrence
	Contact: 	adam@adamlawrencedesign.com	
*************************************************/

function ListBuilder(wrap, obj, type, callback)
{
	this.wrap = wrap;
	this.obj = obj;
	this.type = type;
	this.callback = callback;
	this.check = true;
	this.init()
}

ListBuilder.prototype.menuList = function()
{
	for(var i = 0; i < this.obj.length; i++)
	{
		var wrap, li, a, img;
		
		wrap = document.getElementById(this.wrap);
		li = document.createElement('li');
		a = document.createElement('a');

		$(li).append(a);
		$(wrap).append(li);

		$(a).html(this.obj[i].name).attr({'data-name': this.obj[i].name, 
											'data-lookUp' : i, 
											'data-id' : this.obj[i].id, 
											'data-catergory': this.obj[i].catergory, 
											'data-problemId': this.obj[i].problemId 
										});
		//$(a).html(this.obj[i].name);
		// console.log('list builder run');
	}
			
	if(this.callback)	this.callback();
};

ListBuilder.prototype.sideNav = function()
{
	for(var i = 0; i < this.obj.length; i++)
	{
		var wrap, li, a, img;

		wrap = document.getElementById(this.wrap);
		li = document.createElement('li');
		a = document.createElement('a');

		$(li).append(a);
		$(wrap).append(li);

		$(a).html(this.obj[i].name).attr({'data-name': this.obj[i].name, 
											'data-lookUp' : i, 
											'data-id' : this.obj[i].id, 
											'data-catergory': this.obj[i].catergory, 
											'data-id': this.obj[i].problemId 
										});
		
		// console.log(this.obj[i])
		//$(a).html(this.obj[i].name);
		// console.log('list builder run');
	}
			
	if(this.callback)	this.callback();
};

ListBuilder.prototype.imageLink = function()
{
	for(var i = 0; i < this.obj.length; i++)
	{
		var wrap, li, a, img;
		
		wrap = document.getElementById(this.wrap);
		li = document.createElement('li');
		a = document.createElement('a');
		img = document.createElement('img');
			
		$(li).append(a);
		$(a).append(img);
		$(wrap).append(li);

		$(img).attr({'src': this.obj[i].Path, 'alt': this.obj[i].Name });
		$(a).attr({'data-id': this.obj[i].ID, 'data-lookUp' : i});
		
		/*======================= */ 	// Masonary Needed for list controls 
		
		if(this.masonaryGrid) $(li).addClass('grid');		
	}
		
	/*======================= */ 	// Apply call back if specified and check to apply masonary
	
	if(this.callback)	this.callback();
	if(this.masonaryGrid) this.addMasonary();
};

ListBuilder.prototype.standardLink = function()
{
	for(var i = 0; i < this.obj.length; i++)
	{
		var wrap, li, a, img, productId;
		
		wrap = document.getElementById(this.wrap);
		a = document.createElement('a');
		$(wrap).append(a);
		
		try {
			productId = this.obj[i].productId
		} catch(e){
			productId = null
		}

		$(a).html(this.obj[i].productName).attr({'data-name': this.obj[i].name, 
											'data-lookUp' : i, 
											'data-catergory': this.obj[i].catergory,
											'data-id': this.obj[i].id,
											'data-productId': this.obj[i].productId
										}).addClass('m_l_right');
		// console.log('list builder run');
		console.log('reg should be done')

	}
			
	if(this.callback)	this.callback();
};

ListBuilder.prototype.init = function()
{
	switch (this.type)
	{
		case 'menu':
			this.menuList();
		break;

		case 'sideNav':
			this.sideNav();
		break;

		case 'standardLink':
			this.standardLink();
		break;
	}
};

/***********************************************
	Function:	Event Manager
	Author: 	Adam Lawrence
	Contact: 	adam@adamlawrencedesign.com	
*************************************************/

function EventManager(page)
{
	this.page = page;
	this.init();
}

EventManager.prototype.stdLink = function()
{
    $('.sub, #sideNav').on('click','a', function(event)
    {
        if(typeof $(this).attr('data-catergory') === 'undefined')
            {
                console.log('undefined');
                return;
            };
        var catergory = $(this).attr('data-catergory').slice(0,1).toUpperCase() + $(this).attr('data-catergory').slice(1, $(this).attr('data-catergory').length);

        this.href =  catergory + '.html?itemName=' +  $(this).attr('data-name') + 
                                '?secInfo=' + $(this).attr('data-id');
    }); 
};

EventManager.prototype.productLink = function()
{
    var _this = this;

    $('.productLinks').on('click', 'a', function()
    {
        var catergory = $(this).attr('data-catergory').slice(0,1).toUpperCase() + $(this).attr('data-catergory').slice(1, $(this).attr('data-catergory').length);

        id = $(this).attr('data-productId');
        var test = $(this).attr('data-id');

        //GET PRODUCT INFORMATION FROM A SPECIFIC ID
        var problemID = id,     //TEST FOR 250GT
            productClass = Parse.Object.extend("ProductDetails"),
            productObject = new productClass(),
            productQuery = new Parse.Query(productClass);

        productObject.id = problemID;
        productQuery.include("productObject");
        productQuery.equalTo("objectId", problemID);
        productQuery.find({
            success: function(results) 
            {
                $('#loader').show();
                 var catergory = results[0]._serverData.ProductTypeString;
                console.log(window.location);
                window.location = window.location.origin + '/turfPro/Products.html?itemName=' + catergory + '?secInfo=' + id;    
            },
              error: function(error) {
                alert("Error: " + error.code + " " + error.message);
              }
        });  

    });
    
    $('.asideProductLink').on('click','a', function()
    {
        var catergory, id;

        catergory = $(this).attr('data-catergory').slice(0,1).toUpperCase() + $(this).attr('data-catergory').slice(1, $(this).attr('data-catergory').length);
        id = $(this).attr('data-id');

        $('#loader').show();

        this.href = window.location.origin + '/turfPro/Products.html?itemName=' + catergory + '?secInfo=' + id;   

    });
    

    /*
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
    */
};

EventManager.prototype.init = function()
{
	var _this, target, catergory, path, URL, item, index;
	_this = this;

    this.stdLink();
    this.productLink();
/*
    $('#sideNav').on('click', '.secondLevel', function(event)
    {
        event.preventDefault();
    });
*/
    /*
	$('#sideNav2').on('click','a', function(event)
	{
		var id = $(this).attr('data-id');

        var productTypeObjectID = id,		
        	productTypeClass = Parse.Object.extend("ProductTypes"),
        	productTypeObject = new productTypeClass(),
        	productDetailsClass = Parse.Object.extend("ProductDetails"),
        	productDetailsQuery = new Parse.Query(productDetailsClass);

        productTypeObject.id = productTypeObjectID;
        productDetailsQuery.include("productTypeObject");
        productDetailsQuery.equalTo("ProductType", productTypeObject);
        productDetailsQuery.find({
        	success: function(results)
        	{
        		var obj = [];
        		    			//alert("Product Types Query worked!")
    			console.log(results);
        	},
              error: function(error) {
                alert("Error: " + error.code + " " + error.message);
              }
        });
	});
    */	
}

/***********************************************
	Function:	Content Builder
	Author: 	Adam Lawrence
	Contact: 	adam@adamlawrencedesign.com	
*************************************************/

function ContentBuilder(page, wrap, obj, callback)
{
	this.page = page;
	this.wrap = wrap;
	this.obj = obj;
	this.callback = callback;
	this.init();
}

ContentBuilder.prototype.buildStd = function()
{
	var wrap;

	wrap = document.getElementById(this.wrap);
	$(wrap).find('h1').html(this.obj.Title);
	$(wrap).find('h2').html(this.obj.SubHeading)
	$(wrap).find('#description').html('<b>Description: </b>'+ this.obj.Description);
	$(wrap).find('#references').html('<b>References: </b>'+ this.obj.References);
	$(wrap).find('img').attr('src', this.obj.ImageURL);
};

ContentBuilder.prototype.buildProduct = function()
{
	for(var i = 0; i < this.obj.length; i++)
	{
		var wrap, div;
		wrap = document.getElementById(this.wrap);
		div = $(document.getElementById('template')).clone();
		$(div).attr('id', 'product-' + i );

		$(div).find('h3').html(this.obj[i].ProductName);
		$(div).find('h4').html(this.obj[i].ProductTypeString)
		$(div).find('.activeIngredient').html('<b>Active Ingredient: </b>'+ this.obj[i].ActiveIngredient);
		$(div).find('.chemicalGroup').html('<b>Chemical Group: </b>'+ this.obj[i].ChemicalGroup);
		$(div).find('.FormOfChemical').html('<b>Form Of Chemical: </b>'+ this.obj[i].FormOfChemical);
		$(div).find('.ManufacturerName').html('<b>Manufacturer Name: </b>'+ this.obj[i].ManufacturerName);
		$(div).find('.PoisonSchedule').html('<b>Poison Schedule: </b>'+ this.obj[i].PoisonSchedule);

		$(wrap).append(div);

	};

	$('#product-0').removeClass('hidden');
};

ContentBuilder.prototype.buildProductList = function()
{
	for(var i = 0; i < this.obj.length; i++)
	{
		var wrap, li, a, img;

		wrap = document.getElementById(this.wrap);
		li = document.createElement('li');
		a = document.createElement('a');

		$(li).append(a);
		$(wrap).append(li);

		console.log(this.obj[i]._serverData.ProductTypeString);

		$(a).html(this.obj[i]._serverData.ProductName).attr({'data-name': this.obj[i]._serverData.ProductName, 
											'data-lookUp' : i, 
											'data-id' : this.obj[i].id, 
											'data-catergory': this.obj[i]._serverData.ProductTypeString, 
										});			
		/*
		$(a).html(this.obj[i]._serverData.ProductName).attr({'data-name': this.obj[i]._serverData.ProductName, 
											'data-lookUp' : i, 
											'data-id' : this.obj[i].id, 
											'data-catergory': this.obj[i].catergory, 
											'data-id': this.obj[i].problemId 
										}).addClass('secondLevel');	
		*/
	}
};

ContentBuilder.prototype.init = function()
{
	if(this.page == 'products')
	{
		this.buildProduct();	
	}
	else if(this.page == 'productList')
	{
		this.buildProductList();
	}
	else
	{
		this.buildStd();
	}

};
/******************************************
		Project: Turf Pro
		Author: Adam Lawrence
		Email: me@adamlawrence.com.au
********************************************/

function QueryParse(page, callback)
{
	this.page = page;
	this.callback = callback;
	this.queryParse();
}

// PARSE RETURNED INFO EG 'name' : name, 'catergory': catergory, 'id': problemId
QueryParse.prototype.createObjs = function(type, data, callback)
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

// MAIN SET OF QUERIES USE THIS FOR CREATING MENUS
QueryParse.prototype.queryParse = function(callback)
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
			weeds = results;
	        _this.weedsPushed = true;
      		_this.createObjs('weeds', results, function(obj)
      		{
      			weedsData = obj;
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
	  	pests = results;
	  	_this.pestsPushed = true;
  		_this.createObjs('pests', results, function(obj)
  		{
  			pestsData = obj;
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
      		diseases = results;
      		_this.createObjs('diseases', results, function(obj)
      		{
      			diseasesData = obj;
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
			products = results;
      		_this.createObjs('products', results, function(obj)
      		{
      			_this.productsData = obj;
      			productsData = obj;
      		});
			_this.dataLoaded();
    	},
        error: function(error)
        {
            alert("Error: " + error.code + " " + error.message);
        }
    });
};

// INITIALISE THE APP 
QueryParse.prototype.dataLoaded = function()
{
	if(this.weedsPushed && this.productsPushed && this.pestsPushed && this.diseasesPushed) 
	{
		this.callback()
	};
}
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

ProductsPage.prototype.queryWhatProductTreats = function(productId, callback)
{
    var _this = this;

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

ProductsPage.prototype.productDetails = function(title, data)
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

ProductsPage.prototype.queryProductId = function(id, callback)
{
    //GET PRODUCT INFORMATION FROM A SPECIFIC ID
    var problemID = productId,     //TEST FOR 250GT "ezttHMv8vV"
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

ProductsPage.prototype.secondLevelList = function(id, callback)
{
    var _this = this;

    for(var i = 0; i < productsData.length; i++)
    {
      if(itemName == productsData[i].name)
      {
          //NEXT STEP IN PRODUCT DETAILS, ASSUME ObjectId has been passed via URL Parameter
          var productTypeObjectID = productsData[i].id,   //Testing for Fungicides *TEST*ONLY*
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
      }
    };  
};

ProductsPage.prototype.firstLevelList = function()
{
    var _this = this;

    var createSideNav = new ListBuilder('sideNav2', productsData, 'menu', function()
    {
      $('#sideNav2').on('click','a', function()
      {             
          var catergory, id;
          catergory = $(this).attr('data-name').slice(0,1).toUpperCase() + $(this).attr('data-name').slice(1, $(this).attr('data-name').length);
          id = 'space';

          this.href = window.location.origin + '/turfPro/Products.html?itemName=' + catergory + '?secInfo=' + id;    
          // event.preventDefault();               
      });
    });
};

ProductsPage.prototype.init = function()
{
  var _this = this;

  // TWO SPACES MUST BE FIRST LEVEL
  if(this.catergory == 'space' && this.productId == 'space')
  {
    this.firstLevelList();
    // var eventManager = new EventManager('products');
    return
  }

  // ONLY CATERGORY NAME MUST BE SECOND SPACE
  if(this.catergory != 'space' && this.productId == 'space')
  {
    this.secondLevelList('placeholder', function(data)
    {
        var createSideNav = new ContentBuilder('productList', 'sideNav', data);
        // var eventManager = new EventManager('products');
    });
  }
  else
  {
    // DISPLAY SIDE NAV AGAIN
    this.secondLevelList('placeholder', function(data)
    {
        var createSideNav = new ContentBuilder('productList', 'sideNav', data);
        // var eventManager = new EventManager('products');
    }); 

    this.queryProductId(productId, function(data)
    {
      _this.productDetails(catergory, data);

      _this.queryWhatProductTreats(secondaryInfo, function(data)
      {
        console.log('now build list of treatments using this: ', data)
      })
    }); 
         
  }                     
};

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
