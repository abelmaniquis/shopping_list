/* $("#items p").wrap("<strike>");*/

$(document).ready(function(){
        
        //append items to list
        $("#btn1").click(function(){
        $(".list").append('<li>' + $(".list-input").val() + '</li>') 
        });
        
        //strike and unstrike (check) items on the list
        
        $('ul').on('click','li',function(event){
         $(this).toggleClass("stroked")
        });
     
        //remove items
        $('ul').on('dblclick','li',function(event){
            $(this).hide();
        });
        
        //Clear List
        $("#btn2").click(function(){
            $("ul").empty();
        })
     
     //Just some functionality for later
        $("button").mouseenter(function(){
            $(this).css('color','blue');
        $("button").mouseleave(function(){
            $(this).css('color','white');
        })
     }); 
});   
/*App should do these things:

Append items to the list
allow users to check it off
Allow users to remove items on list

*/