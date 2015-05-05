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