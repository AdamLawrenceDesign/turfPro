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