/***********************************************
	Function:	Parse Data 
	Author: 	Adam Lawrence
	Contact: 	adam@adamlawrencedesign.com	
*************************************************/

function ParseData(results, queryRoot)
{
	this.results = results;
	this.queryRoot = queryRoot;
	this.weeds = '';
	this.pests = '';
	this.products = '';
	this.diseases = '';
	this.treatments = '';
	this.init();
}

ParseData.prototype.postToMenu = function(type)
{
    var obj = [];
    
    for(var i = 0; i < this.results.length; i++)
    {
    	var name, catergory, problemId;
    	// (typeof this.results[i].id !== "undefined") ? problemId = null : problemId = results[i].id;
    	if (typeof this.results[i].id === "undefined") 
    	{
    		problemId = 'null';
    	}
    	else 
    	{
    		problemId = this.results[i].id;
    	};    	

    	name = this.results[i]._serverData.SubOption;
    	catergory = this.results[i]._serverData.PinOptionString;
    	obj.push({'name' : name, 'catergory': catergory, 'problemId': problemId });  
    	
    }

    var sendToListBuilder = new ListBuilder(type, obj, 'menu', false); 
    //console.log('posted to menu');      
};

ParseData.prototype.postToContent = function(title)
{
	for(var i = 0; i < this.results.length; i++)
	{ 
	    if(title == this.results[i]._serverData.SubOption)
	    {
	        var obj, problemID;
	        
	        obj = {
                  'Title': this.results[i]._serverData.SubOption, 
                  'SubHeading': this.results[i]._serverData.SubOptionLatinName,
                  'Description': this.results[i]._serverData.SubOptionDescription,
                  'References': this.results[i]._serverData.SubOptionReferences,
                  'ImageURL': this.results[i]._serverData.SubOptionImage._url
	            };
	        
	        var buildContent = new ContentBuilder('description', obj, false);
	        console.log(obj);
	        console.log('Content should be built by now.');
	    }
    }
};

ParseData.prototype.pushData = function()
{
    var obj = [];
    for(var i = 0; i < this.results.length; i++)
    {
    	var name, catergory, problemId;
    	if (typeof this.results[i].id === "undefined") 
    	{
    		problemId = 'null';
    	}
    	else 
    	{
    		problemId = this.results[i].id;
    	};    	

    	name = this.results[i]._serverData.SubOption;
    	catergory = this.results[i]._serverData.PinOptionString;
    	obj.push({'name' : name, 'catergory': catergory, 'problemId': problemId });  
    }
    return obj;
};

ParseData.prototype.pushProducts = function()
{
    var obj = [];

    for(var i = 0; i < this.results.length; i++)
    {
    	var name, catergory, id;
    	name = this.results[i]._serverData.Type;
    	id = this.results[i].id;
    	catergory = 'products';
    	console.log(id);
    	// catergory = this.results[i]._serverData.PinOptionString;
    	obj.push({'name' : name, 'id': id, 'catergory': catergory});
    }
  
    return obj;
};

ParseData.prototype.showControls = function(problemId)
{
    var problemID = problemId,     			//TEST FOR DOLLAR SPOT
	    subOptionClass = Parse.Object.extend("PinSubOptions"),
	    subOptionObject = new subOptionClass(),
	    productTreatsClass = Parse.Object.extend("ProductTreats"),
	    productTreatsQuery = new Parse.Query(productTreatsClass);

    subOptionObject.id = problemID;
    productTreatsQuery.include("subOptionObject");
    productTreatsQuery.equalTo("TreatsSubOption", subOptionObject);
    productTreatsQuery.find(
    {
        success: function(results)
        {
            var obj = [];
		    for(var i = 0; i < results.length; i++)
		    {
		    	var name, catergory;
		    	name = results[i]._serverData.ProductName;
		    	catergory = 'products';
		    	obj.push({'name' : name, 'catergory': catergory });  
		    }
		    var buildProductList = new ListBuilder('regControls', obj, 'standardLink', false );
        },
        error: function(error)
        {
            alert("Error: " + error.code + " " + error.message);
        }
    });
};

ParseData.prototype.init = function()
{
	var type, index, path, indexTitle, title, problemId;

	// Load all menus 

	switch(this.queryRoot)
	{
		case 'diseases':
			type = 'menu-diseases';
			this.diseases = this.pushData(this.results);
		break;

		case 'pests':
			type = 'menu-pests';
			this.pests = this.pushData(this.results);
		break;

		case 'weeds':
			type = 'menu-weeds';
			this.weeds = this.pushData(this.results);
		break;

		case 'products':
			type = 'menu-products';
			this.products = this.pushProducts(this.results);
		break;
	};

	this.postToMenu(type);

	// Get Current page and apply content rules 
	if(document.title == 'Diseases | Turf Pro')
	{
        index = window.location.href.indexOf('Disease.html?') + 13;
        path = window.location.href.slice(index, window.location.href.length);
        indexTitle = path.indexOf('?%') + 2;
        problemId = path.slice(indexTitle, path.length);
        title = path.replace('?%' + problemId, '').replace(/%20/g, ' ');

        // Build Aside menus while we are checking what page we are on

        var buildAside = new ListBuilder('sideNav', this.diseases, 'menu', false);
        this.showControls(problemId);

        // console.log('name: ' + title);
        // console.log('problemId: ' + problemId);
        this.postToContent(title);
        return;
	}

	if(document.title == 'Diseases | Turf Pro') 
	{
        index = window.location.href.indexOf('Disease.html?') + 13;
        path = window.location.href.slice(index, window.location.href.length);
        indexTitle = path.indexOf('?%') + 2;
        problemId = path.slice(indexTitle, path.length);
        title = path.replace('?%' + problemId, '').replace(/%20/g, ' ');

        // Build Aside menus while we are checking what page we are on

        var buildAside = new ListBuilder('sideNav', this.diseases, 'menu', false);
        this.showControls(problemId);
        // console.log('name: ' + title);
        // console.log('problemId: ' + problemId);
        this.postToContent(title);
        return;
	}

	if(document.title == 'Weeds | Turf Pro') 
	{
    	index = window.location.href.indexOf('Weeds.html?') + 11;
    	path = window.location.href.slice(index, window.location.href.length);
        indexTitle = path.indexOf('?%') + 2;
        problemId = path.slice(indexTitle, path.length);
        title = path.replace('?%' + problemId, '').replace(/%20/g, ' ');

        // Build Aside menus while we are checking what page we are on

        var buildAside = new ListBuilder('sideNav', this.weeds, 'menu', false);
        this.showControls(problemId);
        this.postToContent(title);
        return;
	}

	if(document.title == 'Products | Turf Pro') 
	{
    	index = window.location.href.indexOf('Products.html?') + 14;
    	path = window.location.href.slice(index, window.location.href.length);
        indexTitle = path.indexOf('?%') + 2;
        problemId = path.slice(indexTitle, path.length);
        title = path.replace('?%' + problemId, '').replace(/%20/g, ' ');

        // Build Aside menus while we are checking what page we are on
        console.log(this.products);
        var buildAside = new ListBuilder('sideNav2', this.products, 'menu', false);
        this.showControls(problemId);
        this.postToContent(title);
        return;
   	};

	/*
	switch(document.title)
	{
		case 'Diseases | Turf Pro': 
	        index = window.location.href.indexOf('Disease.html?') + 13;
	        path = window.location.href.slice(index, window.location.href.length);
	        indexTitle = path.indexOf('?%') + 2;
	        problemId = path.slice(indexTitle, path.length);
	        title = path.replace('?%' + problemId, '').replace(/%20/g, ' ');

	        // Build Aside menus while we are checking what page we are on

	        var buildAside = new ListBuilder('sideNav', this.diseases, 'menu', false);
	        this.showControls(problemId);
	        // console.log('name: ' + title);
	        // console.log('problemId: ' + problemId);
			break;

		case 'Pests | Turf Pro':
	        index = window.location.href.indexOf('Pests.html?') + 11;
	        path = window.location.href.slice(index, window.location.href.length);
	        indexTitle = path.indexOf('?%') + 2;
	        problemId = path.slice(indexTitle, path.length);
	        title = path.replace('?%' + problemId, '').replace(/%20/g, ' ');

	        // Build Aside menus while we are checking what page we are on

	        var buildAside = new ListBuilder('sideNav', this.pests, 'menu', false);
	        this.showControls(problemId);
	        break;

		case 'Weeds | Turf Pro':
        	index = window.location.href.indexOf('Weeds.html?') + 11;
        	path = window.location.href.slice(index, window.location.href.length);
	        indexTitle = path.indexOf('?%') + 2;
	        problemId = path.slice(indexTitle, path.length);
	        title = path.replace('?%' + problemId, '').replace(/%20/g, ' ');

	        // Build Aside menus while we are checking what page we are on

	        var buildAside = new ListBuilder('sideNav', this.weeds, 'menu', false);
	        this.showControls(problemId);
	        break;

		case 'Products | Turf Pro':
        	index = window.location.href.indexOf('Products.html?') + 14;
        	path = window.location.href.slice(index, window.location.href.length);
	        indexTitle = path.indexOf('?%') + 2;
	        problemId = path.slice(indexTitle, path.length);
	        title = path.replace('?%' + problemId, '').replace(/%20/g, ' ');

	        // Build Aside menus while we are checking what page we are on
	        console.log('booooom your on the products page bitch')
	        var buildAside = new ListBuilder('sideNav', this.products, 'menu', false);
	        this.showControls(problemId);
			break;
	};
	
	this.postToContent(title);
	//console.log('parse data init.');
	*/
};
