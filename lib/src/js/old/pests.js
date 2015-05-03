/***********************************************
  Function: Pest Query
  Author:   Adam Lawrence
  Contact:  adam@adamlawrencedesign.com 
*************************************************/

function Pests()
{
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
        var parseData = new ParseData(results, 'pests');
        /*
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
        */
      },
          error: function(error) {
            alert("Error: " + error.code + " " + error.message);
          }
    });
};