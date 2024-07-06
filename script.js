window.onload=function(){

}
'use strict';
var is_sidebar_open=true;

function touch_map(){
    if(is_sidebar_open==true){
        document.getElementById("for_Mobile").className = 'sidebar_nav_off';
        is_sidebar_open=false;
    }else{
        document.getElementById("for_Mobile").className = 'sidebar_nav';
        is_sidebar_open=true;
    }

}