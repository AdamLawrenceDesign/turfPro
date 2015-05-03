/***********************************************
  Function: Diseases Query
  Author:   Adam Lawrence
  Contact:  adam@adamlawrencedesign.com 
*************************************************/

function Diseases()
{
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
      	// console.log('start');
      	var parseData = new ParseData(results, 'diseases');
      	/*
        var obj;
        obj = [];

        for(var i = 0; i < results.length; i++)
        {

        	if (typeof results[i].id !== "undefined") console.log('çatch undefined');

        	obj.push({'Name' : results[i]._serverData.SubOption, 'Parent': results[i]._serverData.PinOptionString, 'ProblemID': results[i].id });  
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
                var infoObj, problemID;
                console.log(results[i]);

                console.log(results[i]._serverData.SubOptionDescription);
                
                infoObj = {
                          'Title':results[i]._serverData.SubOption, 
                          'SubHeading': results[i]._serverData.SubOptionLatinName,
                          'Description': results[i]._serverData.SubOptionDescription,
                          'References': results[i]._serverData.SubOptionReferences,
                          'ImageURL': results[i]._serverData.SubOptionImage._url
                        };
                var contentInit = new ContentBuilder('description', infoObj, false);
                var diseaseSideBar = new ListBuilder('sideNav', obj, 'menu', false, false); 
				
              }
          }
        };
        */
      },
          error: function(error) {
            alert("Error: " + error.code + " " + error.message);
          }
    });	
};