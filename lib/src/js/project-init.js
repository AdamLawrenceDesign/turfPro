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
