/***********************************************
	Function:	Weed Query
	Author: 	Adam Lawrence
	Contact: 	adam@adamlawrencedesign.com	
*************************************************/

function Weeds()
{
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
        /*
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
        */
   	},
        error: function(error)
        {
	            alert("Error: " + error.code + " " + error.message);
        }
    });
};