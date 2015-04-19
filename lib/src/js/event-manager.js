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
