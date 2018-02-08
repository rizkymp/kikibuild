/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
     
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
         window.open("#page_12_1"); 
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
	
	 
      $$('#play').on('click', function () {
    myApp.showPreloader('Mohon Tunggu')
    setTimeout(function () {
        myApp.hidePreloader();
        window.open("baru/index.html")
    }, 5000);
});

	$$('#petaku').on('click', function () {
    myApp.showPreloader('Mohon Tunggu')
    setTimeout(function () {
        myApp.hidePreloader();
        window.open("petaku.html")
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
    $(document).on("click", "#back-map", function(evt)
    {
         /*global activate_subpage */
         window.open("#mainpage"); 
         return false;
    });
     

    /*Exit Modals */
     
$('#exit').on('click', function () {
  var modal = myApp.modal({
    title: '<center>Konfirmasi Keluar</center>',
    text: '<center>Apakah Anda Yakin ?</center>',
    afterText:  '<center><img src="images/mapfol.gif" width="50%" height="50%" style="display:block"></center>',
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





	$(document).on("click", "#b_setu", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#page_12_1");
         return false;
    }); 
    
        /* button  #back-peta */
    $(document).on("click", "#back-peta", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  #btn-side */
    $(document).on("click", "#btn-side", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#sidebar21"));  
         return false;
    });
    
        /* button  #side-btn */
    
    
        /* button  #bck-peta */
    $(document).on("click", "#bck-peta", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
        /* button  #bck-peta */
    $(document).on("click", "#bck-peta", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#page_77_6"); 
         return false;
    });
    
        /* button  #side-btn */
    
    
        /* button  #side-btn */
    
    
        /* button  #side-btn */
    $(document).on("click", "#side-btn", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#sidebar21"));  
         return false;
    });
    
        /* button  #bck-map */
    $(document).on("click", "#bck-map", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#mainpage"); 
         return false;
    });
    var maps;
var jakarta = {lat:-5.7773029, lng:106.1174805};

function addYourLocationButton(maps, marker) 
{
    var controlDiv = document.createElement('div');

    var firstChild = document.createElement('button');
    firstChild.style.backgroundColor = '#fff';
    firstChild.style.border = 'none';
    firstChild.style.outline = 'none';
    firstChild.style.width = '28px';
    firstChild.style.height = '28px';
    firstChild.style.borderRadius = '2px';
    firstChild.style.boxShadow = '0 1px 4px rgba(0,0,0,0.3)';
    firstChild.style.cursor = 'pointer';
    firstChild.style.marginRight = '10px';
    firstChild.style.padding = '0px';
    firstChild.title = 'Your Location';
    controlDiv.appendChild(firstChild);

    var secondChild = document.createElement('div');
    secondChild.style.margin = '5px';
    secondChild.style.width = '18px';
    secondChild.style.height = '18px';
    secondChild.style.backgroundImage = 'url(https://maps.gstatic.com/tactile/mylocation/mylocation-sprite-1x.png)';
    secondChild.style.backgroundSize = '180px 18px';
    secondChild.style.backgroundPosition = '0px 0px';
    secondChild.style.backgroundRepeat = 'no-repeat';
    secondChild.id = 'you_location_img';
    firstChild.appendChild(secondChild);

    google.maps.event.addListener(maps, 'dragend', function() {
        $('#you_location_img').css('background-position', '0px 0px');
    });

    firstChild.addEventListener('click', function() {
        var imgX = '0';
        var animationInterval = setInterval(function(){
            if(imgX == '-18') imgX = '0';
            else imgX = '-18';
            $('#you_location_img').css('background-position', imgX+'px 0px');
        }, 500);
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                marker.setPosition(latlng);
                maps.setCenter(latlng);
                clearInterval(animationInterval);
                $('#you_location_img').css('background-position', '-144px 0px');
            });
        }
        else{
            clearInterval(animationInterval);
            $('#you_location_img').css('background-position', '0px 0px');
        }
    });

    controlDiv.index = 1;
    maps.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(controlDiv);
}

function initMap() {
    maps = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: faisalabad
    });
    var myMarker = new google.maps.Marker({
        maps: map,
        animation: google.maps.Animation.DROP,
        position: jakarta
    });
    addYourLocationButton(maps, myMarker);
}

$(document).ready(function(e) {
    initMap();
}); 
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();

document.addEventListener("backbutton",function(e){
    if($("#page_37_8").is(":visible")){
        e.preventDefault();
        activate_page("#page_87_8");
    }
},false);
document.addEventListener("backbutton",function(e){
    if($("#page_87_8").is(":visible")){
        e.preventDefault();
        activate_page("#mainpage");
    }
},false);


