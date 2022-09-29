
jQuery(function(){

      jQuery(".card").flip({
        trigger: "click",
        axis: 'y',
        speed:200        
      });


  // EFEITO DE CONTRASTE 
    var Contrast = {
        storage: 'contrastState',
        cssClass: 'contraste',
        currentState: null,
        check: checkContrast,
        getState: getContrastState,
        setState: setContrastState,
        toogle: toogleContrast,
        updateView: updateViewContrast
    };

    window.toggleContrast = function () { Contrast.toogle(); };
    Contrast.check();
    function checkContrast() {
        this.updateView();
    }
    function getContrastState() {
        return localStorage.getItem(this.storage) === 'true';
    }
    function setContrastState(state) {
        localStorage.setItem(this.storage, '' + state);
        this.currentState = state;
        this.updateView();
    }
    function updateViewContrast() {
        var body = document.body;

        if (this.currentState === null)
            this.currentState = this.getState();
        if (this.currentState)
            body.classList.add(this.cssClass);
        else
            body.classList.remove(this.cssClass);
    }
    function toogleContrast() {
        this.setState(!this.currentState);
    }



    //controla parallax da imagem de fundo

    //controla parallax da imagem de fundo
   jQuery('.plataformas').each(function(){
      var obj = jQuery(this);
      jQuery(window).scroll(function() {
         var yPos = -(jQuery(window).scrollTop() / obj.data('speed')); 
         var bgpos = '30% '+ yPos + 'px';
         obj.css('background-position', bgpos );

      }); 
   }); 


   




        // Interações do menu para a versão Mobile 
          var lagura = screen.width, altura = screen.height;
             if(lagura < 767) {             
              
              jQuery(window).scroll(function() {
                if (jQuery(".navbar").offset().top > 20) {
                  jQuery(".navbar-header button").stop().animate({ top: "50px" }, 200).css("opacity","0.8");
                  jQuery(".busca").stop().animate({ top: "45px" }, 200).css("opacity","0.8");
                    

                  }else{

                  jQuery(".navbar-header button").stop().animate({ top: "85px" }, 200).css("opacity","1");
                  jQuery(".busca").stop().animate({ top: "78px" }, 200).css("opacity","1");
                  
                    

                  }
                });
              }

    // Interações do menu para a versão Mobile 
    var lagura = screen.width, altura = screen.height;
       if(lagura < 767) { 
        jQuery(".interna .logoMenu").hide();
        jQuery(".interna .menu-interno").addClass("top-menu");
        jQuery(".interna .menu-interno").removeClass("menu-interno");
      }
             



       // BUSCA
  
          jQuery(function(){

              jQuery('.busca').click(function(){

                jQuery(".modal-busca").show();
                jQuery("body").attr("style","overflow:hidden;");
                jQuery('#mod-search-searchword').focus();
                 

              });
                  
              jQuery(".fechar-modal").click(function(){
                
                
              jQuery(".modal-busca").hide();
            
                  jQuery("body").removeAttr("style");
          
          });

          });


    // Oculta a logomarca pequena do menu 
   jQuery(".logoMenu").hide().css("z-index","-300");

    // Oculta os itens do menu topp    
   jQuery(".itens-menu").hide(); 

   // interações menu das páginas internas
   jQuery(".interna .top-menu").addClass("menu-interno");
   jQuery(".interna .menu-interno").removeClass("top-menu");
   jQuery(".interna .logoMenu").show();
   jQuery(".interna .itens-menu").show(); 


 



        
   jQuery(window).scroll(function(){
       var window_scrolltop = jQuery(this).scrollTop();       
       var top = jQuery(window).scrollTop();       

       if(top > 300){ // verifica a posição da página           
           
            jQuery(".logoMenu").show();
            jQuery(".logoMenu").css({"z-index":"100"});
            jQuery(".onpage .top-menu").addClass("menu-scroll");
            jQuery(".onpage .menu-scroll").removeClass("top-menu"); 
            jQuery(".onpage .menu-scroll").stop().animate({ top: "40px" }, 200); // aqui vc aplica o fade no menu
            jQuery(".onpage .menu-scroll").addClass("navbar-fixed-top");
            jQuery(".itens-menu").show(); 
            jQuery(".menu-scroll").show();
            jQuery(".busca").addClass("busca-scroll")
            

            var lagura = screen.width, altura = screen.height;
             if(lagura < 767) {
              jQuery(".logoMenu").hide();
              jQuery(".onpage .menu-scroll").stop().animate({ top: "0px" }, 200); // aqui vc aplica o fade no menu
              jQuery(".navbar-fixed-top").removeClass("menu-scroll");
              jQuery(".navbar-fixed-top").addClass("top-menu");
              jQuery(".busca").removeClass("busca-scroll")


             }
              

      }else{ 
            jQuery(".logoMenu").hide();           
            jQuery(".itens-menu").hide(); 
            jQuery(".onpage .menu-scroll").stop().animate({ top: "0px" }, 0); // aqui vc aplica o fade no menu
            jQuery(".onpage .menu-scroll").addClass("top-menu");
            jQuery(".onpage .top-menu").removeClass("menu-scroll"); 
            jQuery(".busca").removeClass("busca-scroll")

             
       }  
            
       if(top > 0){
        jQuery(".interna .logoMenu").show();
        jQuery(".interna .itens-menu").show();
        jQuery(".interna .menu-interno").stop().animate({ top: "0px" }, 0); 

          var lagura = screen.width, altura = screen.height;
             if(lagura < 767) {             
              jQuery(".interna .logoMenu").hide();
             }
             
         

       } 
       else{
          var lagura = screen.width, altura = screen.height;
             if(lagura < 767) {             
             jQuery(".interna .logoMenu").removeClass("logoMenu");
             }
        jQuery(".interna .logoMenu").show();
        jQuery(".interna .itens-menu").show(); 
        jQuery(".interna .menu-interno").stop().animate({ top: "65px" }, 0); 

       }    

            



   }); 


    //ocultar menu mobile
    jQuery(".top-menu a").click(function() {
        
        jQuery(".navbar-toggle").addClass('collapsed');
         
    });
   
  

    jQuery('.banner').animate({right:"0px"},1000,function() {
      jQuery(this).find('div').fadeIn('slow');
    });

    jQuery('a.page-scroll').click(function() {
         jQuery('a.page-scroll').removeClass("active");    
         jQuery(this).addClass("active"); 
    });



    //ocultar menu mobile
    jQuery("#menu a").click(function() {
         jQuery(".navbar-collapse").removeClass("in"); 
         jQuery(".navbar-collapse").slideUp();       
    });

    


    ///jQuery to collapse the navbar on scroll
      jQuery(function() {
          jQuery('a.page-scroll').bind('click', function(event) {
              var $anchor = jQuery(this);
          //alert($anchor);
              jQuery('html, body').stop().animate({
                  scrollTop: jQuery($anchor.attr('href')).offset().top
              }, 1500, 'easeInOutExpo');
              event.preventDefault();

          jQuery('h1.header').css('display','none'); 

          });
      });



    //ocultar menu mobile
    jQuery(".navbar-nav").click(function() {
        jQuery("#menu").addClass("in"); 
                
    });




 



});




