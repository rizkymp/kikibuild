/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* graphic button  #play */
    $(document).on("click", "#play", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#page_47_32"); 
         return false;
    });
    
        /* graphic button  #time */
    
    
        /* graphic button  #petaku */
    
    
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
	
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
