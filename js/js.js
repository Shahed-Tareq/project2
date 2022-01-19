$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });
  new WOW().init();
 let print = document.getElementById('print');
 let all = document.getElementById('all');
 let media = document.getElementById('media');
 let illu = document.getElementById('illustrator');
 let web = document.getElementById('web');
  
  var img = document.getElementById('img_print')
  var img1 = document.getElementById('img_print1')
  var img2 = document.getElementById('img_print2')
  var img3 = document.getElementById('img_print3')
  var img4 = document.getElementById('img_print4')
  var img5 = document.getElementById('img_print5')
 
 
function show_print(){
    img.style.display="none";
    img2.style.display="none";
    img3.style.display="none";
    img1.style.display="block"
    img4.style.display="block"
    img5.style.display="block"
}
function show_media(){
    img1.style.display="none";
    img4.style.display="none";
    img5.style.display="none";
    img.style.display="block"
    img2.style.display="block"
    img3.style.display="block"
}
function show_web(){
    img3.style.display="none";
    img5.style.display="none";
    img1.style.display="block"
    img.style.display="block"
    img2.style.display="block"
    img4.style.display="block"
}
function show_illu(){
    img.style.display="none";
    img4.style.display="none";
    img1.style.display="none";
    img2.style.display="block"
    img3.style.display="block"
    img5.style.display="block"

}
function show_all(){
    img2.style.display="block"
    img3.style.display="block"
    img5.style.display="block"
    img.style.display="block"
    img4.style.display="block"
    img1.style.display="block"

}
all.addEventListener('click' , show_all,false)
print.addEventListener('click' , show_print, false);
media.addEventListener('click' , show_media , false);
illu.addEventListener('click' , show_illu , false);
web.addEventListener('click' , show_web,false);
 