
Rotated = {
    count:0,
    
    rotated_done : function (){
        if(this.count === 0){
            this.count = 1;
            $("#main-Div").removeClass("main-div-rotaed-left")
            $("#main-Div").addClass("main-div-rotaed-rigth");
        }else{
            this.count = 0;
            $("#main-Div").removeClass("main-div-rotaed-rigth")
            $("#main-Div").addClass("main-div-rotaed-left") ;
        }
    }
};

$("#rotate-div").on("click",function (){
    Rotated.rotated_done();
});

$("#up").on("click",function (){
    $("#main-Div").removeClass("div_down");
     $("#main-Div div div").removeClass("div_down");
    $("#main-Div div div").addClass("div_up");
    $("#main-Div").addClass("div_up");
});

$("#down").on("click",function (){
    $("#main-Div").removeClass("div_up");
     $("#main-Div div div").removeClass("div_up");
    $("#main-Div div div").addClass("div_down");
    $("#main-Div").addClass("div_down");
});

$("#reload_button").click(function (){
    location.reload(true);
});



