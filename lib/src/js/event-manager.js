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
