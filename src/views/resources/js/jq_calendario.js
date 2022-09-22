_peluqueria = document.getElementById("selector_peluqueria");
_estetica = document.getElementById("selector_estetica");
_manicura =  document.getElementById("selector_manicura");
_masaje = document.getElementById("selector_masaje");
/*
 function seleccion_peluqueria(){
    document.getElementById("selector_peluqueria").style = 'background: linear-gradient(to right, hsla(340, 95%, 50%, 0.412), hsla(317, 45%, 52%, 0.621)),  url("../../assets/images/card\ peluqueria.jpg");'      
 }
*/  
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
   
   $(".selector").hide(1000);
   /*$(this).show(1000);*/
   $("#calendar").toggle(1000);
 });

 $(document).on("click", ".days",function(){
   
   $("#calendar").hide(1000);
   /*$(this).show(1000);*/
   $("#calendar_hours").toggle(1000);
 });


 });