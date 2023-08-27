window.onload = choosePic;

var myPix = new Array("images/bg_images/img_view_01.jpg",
"images/bg_images/img_view_02.jpg",
"images/bg_images/img_view_03.jpg",
"images/bg_images/img_view_04.jpg",
"images/bg_images/img_view_05.jpg",
"images/bg_images/img_view_06.jpg",
"images/bg_images/img_view_07.jpg",
"images/bg_images/img_view_08.jpg",
"images/bg_images/img_view_09.jpg",
"images/bg_images/img_view_10.jpg",
"images/bg_images/img_view_11.jpg",
"images/bg_images/img_view_12.jpg",
"images/bg_images/img_view_13.jpg",
"images/bg_images/img_view_14.jpg",
"images/bg_images/img_view_15.jpg",
"images/bg_images/img_view_16.jpg",
"images/bg_images/img_view_17.jpg",
"images/bg_images/img_view_18.jpg",
"images/bg_images/img_view_19.jpg",
"images/bg_images/img_view_20.jpg",
"images/bg_images/img_view_21.jpg",
"images/bg_images/img_view_22.jpg",
"images/bg_images/img_view_23.jpg",
"images/bg_images/img_view_24.jpg",
"images/bg_images/img_view_25.jpg",
"images/bg_images/img_view_26.jpg",
"images/bg_images/img_view_27.jpg",
"images/bg_images/img_view_28.jpg",
"images/bg_images/img_view_29.jpg",
"images/bg_images/img_view_30.jpg",
"images/bg_images/img_view_31.jpg",
"images/bg_images/img_view_32.jpg",
"images/bg_images/img_view_33.jpg",
"images/bg_images/img_view_34.jpg",
"images/bg_images/img_view_35.jpg",
"images/bg_images/img_view_36.jpg",
"images/bg_images/img_view_37.jpg",
"images/bg_images/img_view_38.jpg",
"images/bg_images/img_view_39.jpg",
"images/bg_images/img_view_40.jpg",
"images/bg_images/img_view_41.jpg",
"images/bg_images/img_view_42.jpg",
"images/bg_images/img_view_43.jpg",
"images/bg_images/img_view_44.jpg",
"images/bg_images/img_view_45.jpg",
"images/bg_images/img_view_46.jpg",
"images/bg_images/img_view_47.jpg",
"images/bg_images/img_view_48.jpg",
"images/bg_images/img_view_49.jpg",
"images/bg_images/img_view_50.jpg");


function choosePic() {
     var randomNum1 = Math.floor(Math.random() * myPix.length);
     document.getElementById("myPicture_1").src = myPix[randomNum1];
     //document.getElementById("myPicture_1").style.backgroundImage = myPix[randomNum];
     }     


//Coin Flipimg Program
jQuery(document).ready(function($){

     $('#coin').on('click', function(){
       var flipResult = Math.random();
       $('#coin').removeClass();
       setTimeout(function(){
         if(flipResult <= 0.5){
           $('#coin').addClass('heads');
           console.log('it is head');
         }
         else{
           $('#coin').addClass('tails');
           console.log('it is tails');
         }
       }, 100);
     });

//Animatins Buttons
const index_iframe = $("#main_iframe_id");
const a_path = "animation_html/color_ball_background.html";
const b_path = "animation_html/square_effect_background.html";
const c_path = "animation_html/desert_aura.html";
const d_path = "animation_html/diagonals_background.html";
const e_path = "animation_html/psp_game_play_effect.html";
const f_path = "animation_html/rainbow_lines.html";
const g_path = "animation_html/lava_blob_floating.html";
const h_path = "animation_html/particles_moving.html";
const i_path = "animation_html/canva_white_particles.html";
const j_path = "animation_html/long_shadow.html";


$("#a_try_but").click(function(){
 index_iframe.attr("src", a_path); 
});

$("#b_try_but").click(function(){
 index_iframe.attr("src", b_path); 
});

$("#c_try_but").click(function(){
 index_iframe.attr("src", c_path); 
});

$("#d_try_but").click(function(){
 index_iframe.attr("src", d_path); 
});

$("#e_try_but").click(function(){
 index_iframe.attr("src", e_path); 
});

$("#f_try_but").click(function(){
 index_iframe.attr("src", f_path); 
});

$("#g_try_but").click(function(){
 index_iframe.attr("src", g_path); 
});

$("#h_try_but").click(function(){
 index_iframe.attr("src", h_path); 
});

$("#i_try_but").click(function(){
 index_iframe.attr("src", i_path); 
});

$("#j_try_but").click(function(){
 index_iframe.attr("src", j_path); 
});     
     });

//Second Random Image Display     
var randomNum2 = Math.floor(Math.random() * myPix.length);     
document.getElementById("myPicture_2").src = myPix[randomNum2];     