/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
        /* graphic button  #petaku*/ 
    $(document).on("click", "#petaku", function(evt)
    {
         /*global activate_subpage*/
         activate_subpage("#page_42_52"); 
         return false;
    });
     
        /* graphic button  #time */
    $(document).on("click", "#time", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#page_87_8"); 
         return false;
    });
     
      $$('#login').on('click', function () {
    myApp.alert('Hanya admin yang dapat masuk!', 'Login Admin', function () {
          activate_subpage("#page_37_8");
    });
});
	
    /* graphic button  #markpeta */
    $(document).on("click", "#se", function(evt)
    {
         /*global activate_subpage */
         window.open("baru/data/data1.html"); 
         return false;
    });
     
	$(document).on("click", "#mo", function(evt)
    {
         /*global activate_subpage */
         window.open("baru/data/data13.html"); 
         return false;
    }); 
	
	$(document).on("click", "#ko", function(evt)
    {
         /*global activate_subpage */
         window.open("baru/data/data8.html"); 
         return false;
    }); 
	
	$(document).on("click", "#wa", function(evt)
    {
         /*global activate_subpage */
         window.open("baru/data/data9.html"); 
         return false;
    }); 
	
	$(document).on("click", "#na", function(evt)
    {
         /*global activate_subpage */
         window.open("baru/data/data14.html"); 
         return false;
    }); 
	
	$(document).on("click", "#an", function(evt)
    {
         /*global activate_subpage */
         window.open("baru/data/data20.html"); 
         return false;
    }); 
	
	$(document).on("click", "#ra", function(evt)
    {
         /*global activate_subpage */
         window.open("baru/data/data2.html"); 
         return false;
    }); 
	$(document).on("click", "#tm", function(evt)
    {
         /*global activate_subpage */
         window.open("baru/data/data4.html"); 
         return false;
    }); 
	$(document).on("click", "#lb", function(evt)
    {
         /*global activate_subpage */
         window.open("baru/data/data5.html"); 
         return false;
    }); 
	
	$(document).on("click", "#la", function(evt)
    {
         /*global activate_subpage */
         window.open("baru/data/data3.html"); 
         return false;
    }); 
	
	$(document).on("click", "#ga", function(evt)
    {
         /*global activate_subpage */
         window.open("baru/data/data15.html"); 
         return false;
    }); 
	
	$(document).on("click", "#kr", function(evt)
    {
         /*global activate_subpage */
         window.open("baru/data/data11.html"); 
         return false;
    }); 
	
	$(document).on("click", "#mt", function(evt)
    {
         /*global activate_subpage */
         window.open("baru/data/data12.html"); 
         return false;
    }); 
	
	$(document).on("click", "#mg", function(evt)
    {
         /*global activate_subpage */
         window.open("baru/data/data19.html"); 
         return false;
    }); 
	
	$(document).on("click", "#wi", function(evt)
    {
         /*global activate_subpage */
         window.open("baru/data/data6.html"); 
         return false;
    }); 
	
	$(document).on("click", "#wb", function(evt)
    {
         /*global activate_subpage */
         window.open("baru/data/data18.html"); 
         return false;
    }); 
	
	$(document).on("click", "#pt", function(evt)
    {
         /*global activate_subpage */
         window.open("baru/data/data17.html"); 
         return false;
    }); 
	
	$(document).on("click", "#cb", function(evt)
    {
         /*global activate_subpage */
         window.open("baru/data/data7.html"); 
         return false;
    }); 
	
	$(document).on("click", "#pm", function(evt)
    {
         /*global activate_subpage */
         window.open("baru/data/data16.html"); 
         return false;
    }); 
	
	  /* graphic button  #petaku */
    $(document).on("click", "#petaku", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#page_42_52"); 
         return false;
    });
	 
	 
      $$('#play').on('click', function () {
    myApp.showPreloader('Mohon Tunggu')
    setTimeout(function () {
        myApp.hidePreloader();
        window.open("baru/index.html")
    }, 5000);
});
    
        /* button  #bck-event */
    $(document).on("click", "#bck-event", function(evt)
    {
         /*global activate_page */
         activate_subpage("#page_87_8");  
         return false;
    });
    
	       /* button  #bck-user */
    $(document).on("click", "#bck-user", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
        /* button  #bck-peta */
    $(document).on("click", "#bck-peta", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });


    /*Exit Modals */
     
$('#exit').on('click', function () {
  var modal = myApp.modal({
    title: '<center>Konfirmasi Keluar</center>',
    text: '<center>Apakah Anda Yakin ?</center>',
    afterText:  '<center><img src="images/warning.gif" width="100%" height="150" style="display:block"></center>',
    buttons: [
      {
        text: 'Tidak'
      },
      {
        text: 'Ya !',
        bold: true,
        onClick: function () {
          navigator.app.exitApp();
        }
      },
    ]
  });
});




    
        /* button  #back-peta */
    $(document).on("click", "#back-peta", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
