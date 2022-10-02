_peluqueria = document.getElementById("selector_peluqueria");
_estetica = document.getElementById("selector_estetica");
_manicura =  document.getElementById("selector_manicura");
_masaje = document.getElementById("selector_masaje");

 function seleccion_peluqueria(){
   _peluqueria.className = "peluqueria_select";
   _estetica.className = "estetica";
   _manicura.className = "manicura";
   _masaje.className = "masaje";
 }

 function seleccion_estetica(){
   _estetica.className = "estetica_select";
   _manicura.className = "manicura";
   _masaje.className = "masaje";
   _peluqueria.className = "peluqueria";        
 }

 function seleccion_manicura(){
   _manicura.className = "manicura_select";
   _masaje.className = "masaje";
   _peluqueria.className = "peluqueria";
   _estetica.className = "estetica";        
 }

 function seleccion_masaje(){
   _masaje.className = "masaje_select";
   _peluqueria.className = "peluqueria";
   _estetica.className = "estetica";
   _manicura.className = "manicura";                
 }

 $(document).ready(function (){ 

  $(document).on("click", ".selector",function(){
   
    $(".salir").hide();
  }); 
  
  $(document).on("click", "#volver_1",function(){
   
    $(".calendar").hide();
    $(".selector_categoria").toggle(1000);
    $(".salir").delay(500).show("fold");
   
  });
  
  $(document).on("click", "#volver_2",function(){
   
    $(".calendar_hours").hide();
    $(".calendar").toggle(1000);
   
  });  

 $(document).on("click", ".selector",function(){
   
   $(".selector_categoria").hide(1000);
   /*$(this).show(1000);*/
   $("#calendar").toggle(1000);
   
 });

 $(document).on("click", ".days",function(){
   
   $("#calendar").hide(1000);
   /*$(this).show(1000);*/
   $("#calendar_hours").toggle(1000);
  
 });


 });