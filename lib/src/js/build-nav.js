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

