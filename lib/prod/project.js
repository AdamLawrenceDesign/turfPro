/***********************************************	
	Function:	PreLoader
	Author: 	Adam Lawrence
	Contact: 	adam@adamlawrencedesign.com	
*************************************************/

function PreLoadImages(value)
{
	this.value = value;
	this.init();
}

PreLoadImages.prototype.init = function()
{
	var images, value;
	
	images = [];
	value = this.value;
	
	window.onload = function()
	{
		for (var i = 0; i < value.length; i++)
		{
			images[i] = new Image();
			images[i].src = value[i];
		}
	};
};
$(function(){

/***********************************************
	Function:	Large Menu with Header with hamburger
	Author: 	Adam Lawrence
	Contact: 	adam@adamlawrencedesign.com	
*************************************************/

function toTop(position, speed)
{
	$('html, body').animate(
	{
			scrollTop: position
	}, speed);
};

/************************************/

function Menu(obj, contentWrap, content, hide, speed)
{
	this.obj = obj;
	this.contentWrap = contentWrap;
	this.content = content;
	this.hide = hide;
	this.speed = speed;
	
	this.trigger = function()
	{
		contentWrap.hide();
		this.objClick();
	};
	
	this.objClick = function()
	{	
		obj.on('click',function()
		{
			contentWrap.load(content, function()
			{
				contentWrap.show(speed);
			});
		});
		this.collapse();
	};
	
	this.collapse = function()
	{	
		contentWrap.on('click', 'a', function(event)
		{
			var check = $(this).attr('class');
			if(check == 'close'){
				contentWrap.hide(speed);
				toTop(0,400);
				return false;
			}
		});
	};
	
};

/************************************/

function menuCall(obj, contentWrap, content, hide, speed)
{
	var instance = new Menu(obj, contentWrap, content, hide, speed);
	return instance;
}
	
var mainMenu = menuCall($('.menuShow'), $('menu'), 'additional/menu.html', $('.menu'),	600);	
mainMenu.trigger();

/************************************/

});

/***********************************************
	Function:	List Builder 
	Author: 	Adam Lawrence
	Contact: 	adam@adamlawrencedesign.com	
*************************************************/

function ListBuilder(wrap, obj, type, mGrid, callback)
{
	this.wrap = wrap;
	this.obj = obj;
	this.type = type;
	this.masonaryGrid = mGrid;
	this.callback = callback;
	this.init()
}

ListBuilder.prototype.addMasonary = function()
{
	var container = document.getElementById(this.wrap);
		
	/*======================= */ 	// Wait for images to load before setting masonary
	
	$('#' + this.wrap + ' img').load(function()
	{
		var masonry = new Masonry(container, 
		{
			columnWidth: 3,
			itemSelector: '.grid'
		});
	});	
};

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

		$(a).html(this.obj[i].Name).attr({'data-name': this.obj[i].Name, 'data-lookUp' : i, 'data-catergory': this.obj[i].Parent });
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

ListBuilder.prototype.init = function()
{
	console.log(this.type)
	switch (this.type)
	{
		case 'menu':
			this.menuList();
		break;

		case 'imageLink':
			this.imageLink();
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

EventManager.prototype.init = function()
{
	var _this, target, catergory, path, URL, item, index;

	_this = this;

	$('.sub, #sideNav').on('click','a', function(event)
	{
		index = window.location.href.indexOf(_this.page);
		path = window.location.href.slice(0, index);
		this.href =  $(this).attr('data-catergory') + '.html?' + $(this).attr('data-name');
		// window.location.href =  path + $(this).attr('data-catergory') + '.html?' + $(this).attr('data-name');

	});	
}

/***********************************************
	Function:	Content Builder
	Author: 	Adam Lawrence
	Contact: 	adam@adamlawrencedesign.com	
*************************************************/

function ContentBuilder(wrap, obj, callback)
{
	this.wrap = wrap;
	this.obj = obj;
	this.callback = callback;
	this.init();
}

ContentBuilder.prototype.init = function()
{
	var wrap;

	wrap = document.getElementById(this.wrap);
	$(wrap).find('h1').html(this.obj.Title);
	$(wrap).find('h2').html(this.obj.SubHeading)


	console.log('Content Builder called');
	console.log(this.wrap);
	console.log(this.obj)

};
/*
* Initialise Products
*/

$(function()
{
    Parse.initialize("7evCbPbxwHD1x53LoIAN3pyRx8wLIek4Gf7HSAxs", "H7LuMPGDwv9VPRm0jH7cIhfbgVWlDOofmbmwmEyn");

    // Weeds

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
    		var obj = [];

    		for(var i = 0; i < results.length; i++)
    		{
          obj.push({'Name' : results[i]._serverData.SubOption, 'Parent': results[i]._serverData.PinOptionString });  
    		}
        var weedMenu = new ListBuilder('menu-weeds', obj, 'menu', false, false);


        if(document.title == 'Weeds | Turf Pro')
        {
          var index, path, title;

          index = window.location.href.indexOf('Weeds.html?') + 11;
          path = window.location.href.slice(index, window.location.href.length);
          title = path.replace(/%20/g, ' ');
          console.log(title);

          for(var i = 0; i < results.length; i++)
          { 
              if(title == results[i]._serverData.SubOption)
              {
                var infoObj;
                console.log(infoObj);
                infoObj = {
                          'Title':results[i]._serverData.SubOption, 
                          'SubHeading': results[i]._serverData.SubOptionLatinName
                        };
                var contentInit = new ContentBuilder('description', infoObj, false);
                var diseaseSideBar = new ListBuilder('sideNav', obj, 'menu', false, false); 

              }
          }
        }
   	},
        error: function(error)
        {
	            alert("Error: " + error.code + " " + error.message);
        }
    });

   // Pests 

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
        var obj = [];
        for(var i = 0; i < results.length; i++)
        {
          obj.push({'Name' : results[i]._serverData.SubOption, 'Parent': results[i]._serverData.PinOptionString });  
        }
        var pestMenu = new ListBuilder('menu-pests', obj, 'menu', false, false);

        if(document.title == 'Pests | Turf Pro')
        {
          var index, path, title;

          index = window.location.href.indexOf('Pests.html?') + 11;
          path = window.location.href.slice(index, window.location.href.length);
          title = path.replace(/%20/g, ' ');
          console.log(path);
          console.log(title);
          for(var i = 0; i < results.length; i++)
          {
              if(title == results[i]._serverData.SubOption)
              {
                var infoObj;

                infoObj = {
                          'Title':results[i]._serverData.SubOption, 
                          'SubHeading': results[i]._serverData.SubOptionLatinName
                        };
                console.log(results[i]._serverData);
                var contentInit = new ContentBuilder('description', infoObj, false);
                var pestSideBar = new ListBuilder('sideNav', obj, 'menu', false, false); 

              }
          }
        };  
        
      },
          error: function(error) {
            alert("Error: " + error.code + " " + error.message);
          }
    });

    //Query for Diseases

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
        var obj;
        obj = [];

        for(var i = 0; i < results.length; i++)
        {
          obj.push({'Name' : results[i]._serverData.SubOption, 'Parent': results[i]._serverData.PinOptionString });  
        }
        
        var diseaseMenu = new ListBuilder('menu-diseases', obj, 'menu', false, false);       

        if(document.title == 'Diseases | Turf Pro')
        {
          var index, path, title;

          index = window.location.href.indexOf('Disease.html?') + 13;
          path = window.location.href.slice(index, window.location.href.length);
          title = path.replace(/%20/g, ' ');

          for(var i = 0; i < results.length; i++)
          { 
              if(title == results[i]._serverData.SubOption)
              {
                var infoObj;

                console.log('match found');
                infoObj = {
                          'Title':results[i]._serverData.SubOption, 
                          'SubHeading': results[i]._serverData.SubOptionLatinName
                        };
                var contentInit = new ContentBuilder('description', infoObj, false);
                var diseaseSideBar = new ListBuilder('sideNav', obj, 'menu', false, false); 

              }
          }
        };

      },
          error: function(error) {
            alert("Error: " + error.code + " " + error.message);
          }
    });

});
