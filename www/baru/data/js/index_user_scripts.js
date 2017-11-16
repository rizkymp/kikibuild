/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
 
        /* button  .uib_w_65 */
    $(document).on("click", ".uib_w_65", function(evt)
    {
        window.open("../index.html");
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();

/*START BACK BUTTON ACTION ALL PAGE*/

document.addEventListener("backbutton",function(e){
        
         if($("#mainpage").is(":visible")){
             e.preventDefault();
             $(".uib_w_5").modal();
         }
        
     },false);

/*END BACK BUTTON ACTION ALL PAGE*/
