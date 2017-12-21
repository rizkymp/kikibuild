/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
        /*Exit Modals */
     
$('#exit').on('click', function () {
  var modal = myApp.modal({
    title: '<center>Konfirmasi Keluar</center>',
    text: '<center>Apakah Anda Yakin ?</center>',
    afterText:  '<center><img src="images/warning.gif" width="30%" height="30px" style="display:block"></center>',
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

     /* graphic button  #play */
    $(document).on("click", "#play", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#page_47_32"); 
         return false;
    });
    

    
        /* graphic button  #petaku */
    $(document).on("click", "#petaku", function(evt)
    {
         /*global activate_subpage */
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
	
	  /* button  #bck-peta */
    $(document).on("click", "#bck-peta", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
     
    $$('#login').on('click', function () {
    myApp.alert('Hanya admin yang dapat masuk!', 'Login Admin', function () {
          activate_subpage("#page_37_8");
    });
});

    /* button  #bck-mulai*/
    $(document).on("click", "#bck-mulai", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
     
    $$('#list-data1').on('click', function () {
    myApp.showPreloader('Mohon Tunggu')
    setTimeout(function () {
        myApp.hidePreloader();
        window.open("data/data1.html")
    }, 5000);
});   

$$('#list-data2').on('click', function () {
    myApp.showPreloader('Mohon Tunggu')
    setTimeout(function () {
        myApp.hidePreloader();
        window.open("data/data2.html")
    }, 7000);
});   
    
	$$('#list-data3').on('click', function () {
    myApp.showPreloader('Mohon Tunggu')
    setTimeout(function () {
        myApp.hidePreloader();
        window.open("data/data3.html")
    }, 5000);
});   

$$('#list-data4').on('click', function () {
    myApp.showPreloader('Mohon Tunggu')
    setTimeout(function () {
        myApp.hidePreloader();
        window.open("data/data4.html")
    }, 7000);
});   

$$('#list-data5').on('click', function () {
    myApp.showPreloader('Mohon Tunggu')
    setTimeout(function () {
        myApp.hidePreloader();
        window.open("data/data5.html")
    }, 7000);
});  

$$('#list-data6').on('click', function () {
    myApp.showPreloader('Mohon Tunggu')
    setTimeout(function () {
        myApp.hidePreloader();
        window.open("data/data6.html")
    }, 7000);
});  

$$('#list-data7').on('click', function () {
    myApp.showPreloader('Mohon Tunggu')
    setTimeout(function () {
        myApp.hidePreloader();
        window.open("data/data7.html")
    }, 7000);
});  

$$('#list-data7').on('click', function () {
    myApp.showPreloader('Mohon Tunggu')
    setTimeout(function () {
        myApp.hidePreloader();
        window.open("data/data7.html")
    }, 7000);
});

$$('#list-data8').on('click', function () {
    myApp.showPreloader('Mohon Tunggu')
    setTimeout(function () {
        myApp.hidePreloader();
        window.open("data/data8.html")
    }, 7000);
});

$$('#list-data9').on('click', function () {
    myApp.showPreloader('Mohon Tunggu')
    setTimeout(function () {
        myApp.hidePreloader();
        window.open("data/data9.html")
    }, 7000);
});

$$('#list-data9').on('click', function () {
    myApp.showPreloader('Mohon Tunggu')
    setTimeout(function () {
        myApp.hidePreloader();
        window.open("data/data9.html")
    }, 7000);
});
$$('#list-data7').on('click', function () {
    myApp.showPreloader('Mohon Tunggu')
    setTimeout(function () {
        myApp.hidePreloader();
        window.open("data/data9.html")
    }, 7000);
});
$$('#list-data10').on('click', function () {
    myApp.showPreloader('Mohon Tunggu')
    setTimeout(function () {
        myApp.hidePreloader();
        window.open("data/data10.html")
    }, 7000);
});

$$('#list-data11').on('click', function () {
    myApp.showPreloader('Mohon Tunggu')
    setTimeout(function () {
        myApp.hidePreloader();
        window.open("data/data11.html")
    }, 7000);
});

$$('#list-data12').on('click', function () {
    myApp.showPreloader('Mohon Tunggu')
    setTimeout(function () {
        myApp.hidePreloader();
        window.open("data/data12.html")
    }, 7000);
});

$$('#list-data13').on('click', function () {
    myApp.showPreloader('Mohon Tunggu')
    setTimeout(function () {
        myApp.hidePreloader();
        window.open("data/data13.html")
    }, 7000);
});

$$('#list-data14').on('click', function () {
    myApp.showPreloader('Mohon Tunggu')
    setTimeout(function () {
        myApp.hidePreloader();
        window.open("data/data14.html")
    }, 7000);
});

$$('#list-data15').on('click', function () {
    myApp.showPreloader('Mohon Tunggu')
    setTimeout(function () {
        myApp.hidePreloader();
        window.open("data/data15.html")
    }, 7000);
});

$$('#list-data16').on('click', function () {
    myApp.showPreloader('Mohon Tunggu')
    setTimeout(function () {
        myApp.hidePreloader();
        window.open("data/data16.html")
    }, 7000);
});

$$('#list-data17').on('click', function () {
    myApp.showPreloader('Mohon Tunggu')
    setTimeout(function () {
        myApp.hidePreloader();
        window.open("data/data17.html")
    }, 7000);
});
$$('#list-data18').on('click', function () {
    myApp.showPreloader('Mohon Tunggu')
    setTimeout(function () {
        myApp.hidePreloader();
        window.open("data/data18.html")
    }, 7000);
});

$$('#list-data19').on('click', function () {
    myApp.showPreloader('Mohon Tunggu')
    setTimeout(function () {
        myApp.hidePreloader();
        window.open("data/data19.html")
    }, 7000);
});

$$('#list-data20').on('click', function () {
    myApp.showPreloader('Mohon Tunggu')
    setTimeout(function () {
        myApp.hidePreloader();
        window.open("data/data20.html")
    }, 7000);
});


/* graphic button  #setu */
    $(document).on("click", "#se", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#page_12_1"); 
         return false;
    });
     
	$(document).on("click", "#mo", function(evt)
    {
         /*global activate_subpage */
        activate_page("#monas"); 
         return false;
    }); 
	
	$(document).on("click", "#ko", function(evt)
    {
         /*global activate_subpage */
         activate_page("#kotu");
         return false;
    }); 
	
	$(document).on("click", "#wa", function(evt)
    {
         /*global activate_subpage */
         activate_page("#wayang");
         return false;
    }); 
	
	$(document).on("click", "#na", function(evt)
    {
         /*global activate_subpage */
         activate_page("#galnas"); 
         return false;
    }); 
	
	$(document).on("click", "#an", function(evt)
    {
         /*global activate_subpage */
        activate_page("#ancol"); 
         return false;
    }); 
	
	$(document).on("click", "#ra", function(evt)
    {
         /*global activate_subpage */
         activate_page("#ragunan"); 
         return false;
    }); 
	$(document).on("click", "#tm", function(evt)
    {
         /*global activate_subpage */
         activate_page("#tamini");
         return false;
    }); 
	$(document).on("click", "#lb", function(evt)
    {
         /*global activate_subpage */
         activate_page("#buaya");
         return false;
    }); 
	
	$(document).on("click", "#la", function(evt)
    {
         /*global activate_subpage */
         activate_page("#layangan");
         return false;
    }); 
	
	$(document).on("click", "#ga", function(evt)
    {
         /*global activate_subpage */
        activate_page("#gajah");
         return false;
    }); 
	
	$(document).on("click", "#kr", function(evt)
    {
         /*global activate_subpage */
         activate_page("#kramik"); 
         return false;
    }); 
	
	$(document).on("click", "#mt", function(evt)
    {
         /*global activate_subpage */
         activate_page("#tekstil");
         return false;
    }); 
	
	$(document).on("click", "#mg", function(evt)
    {
         /*global activate_subpage */
         activate_page("#mangrove");
         return false;
    }); 
	
	$(document).on("click", "#wi", function(evt)
    {
         /*global activate_subpage */
         activate_page("#bunga"); 
         return false;
    }); 
	
	$(document).on("click", "#wb", function(evt)
    {
         /*global activate_subpage */
         activate_page("#waterbom");
         return false;
    }); 
	
	$(document).on("click", "#pt", function(evt)
    {
         /*global activate_subpage */
         activate_page("#planet"); 
         return false;
    }); 
	
	$(document).on("click", "#cb", function(evt)
    {
         /*global activate_subpage */
         activate_page("#garden");
         return false;
    }); 
	
	$(document).on("click", "#pm", function(evt)
    {
         /*global activate_subpage */
        activate_page("#pemuda"); 
         return false;
    }); 
	
	
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
