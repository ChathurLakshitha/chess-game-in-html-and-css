

//------------------------------------------------add chess componat-----------------------------
$("#main-Div").addClass('name');


function reload(){
    var word = new Array('a','b','g','h');
    for (var i = 0; i < 4; i++) {
        $("#"+word[i]).val(word[i]);
        for (var x = 0; x < 4; x++) {
            switch (word[i]){
                case 'a': 
                        $("#"+word[i]+"-"+1).removeClass("selected").addClass("selected").val("b-rook");
                        $("#"+word[i]+"-"+2).removeClass("selected").addClass("selected").val("b-knight");
                        $("#"+word[i]+"-"+3).removeClass("selected").addClass("selected").val("b-bishop");
                        $("#"+word[i]+"-"+4).removeClass("selected").addClass("selected").val("b-queen");
                        $("#"+word[i]+"-"+5).removeClass("selected").addClass("selected").val("b-king");
                        $("#"+word[i]+"-"+6).removeClass("selected").addClass("selected").val("b-bishop");
                        $("#"+word[i]+"-"+7).removeClass("selected").addClass("selected").val("b-knight");
                        $("#"+word[i]+"-"+8).removeClass("selected").addClass("selected").val("b-rook");
                     break;
                case 'b':
                        $("#"+word[i]+"-"+1).removeClass("selected").addClass("selected").val("b-pawn");
                        $("#"+word[i]+"-"+2).removeClass("selected").addClass("selected").val("b-pawn");
                        $("#"+word[i]+"-"+3).removeClass("selected").addClass("selected").val("b-pawn");
                        $("#"+word[i]+"-"+4).removeClass("selected").addClass("selected").val("b-pawn");
                        $("#"+word[i]+"-"+5).removeClass("selected").addClass("selected").val("b-pawn");
                        $("#"+word[i]+"-"+6).removeClass("selected").addClass("selected").val("b-pawn");
                        $("#"+word[i]+"-"+7).removeClass("selected").addClass("selected").val("b-pawn");
                        $("#"+word[i]+"-"+8).removeClass("selected").addClass("selected").val("b-pawn");
                    break;
                case 'g':
                        $("#"+word[i]+"-"+1).removeClass("selected").addClass("selected").val("w-pawn");
                        $("#"+word[i]+"-"+2).removeClass("selected").addClass("selected").val("w-pawn");
                        $("#"+word[i]+"-"+3).removeClass("selected").addClass("selected").val("w-pawn");
                        $("#"+word[i]+"-"+4).removeClass("selected").addClass("selected").val("w-pawn");
                        $("#"+word[i]+"-"+5).removeClass("selected").addClass("selected").val("w-pawn");
                        $("#"+word[i]+"-"+6).removeClass("selected").addClass("selected").val("w-pawn");
                        $("#"+word[i]+"-"+7).removeClass("selected").addClass("selected").val("w-pawn");
                        $("#"+word[i]+"-"+8).removeClass("selected").addClass("selected").val("w-pawn");
                    break;
                case 'h':
                        $("#"+word[i]+"-"+1).removeClass("selected").addClass("selected").val("w-rook");
                        $("#"+word[i]+"-"+2).removeClass("selected").addClass("selected").val("w-knight");
                        $("#"+word[i]+"-"+3).removeClass("selected").addClass("selected").val("w-bishop");
                        $("#"+word[i]+"-"+4).removeClass("selected").addClass("selected").val("w-queen");
                        $("#"+word[i]+"-"+5).removeClass("selected").addClass("selected").val("w-king");
                        $("#"+word[i]+"-"+6).removeClass("selected").addClass("selected").val("w-bishop");
                        $("#"+word[i]+"-"+7).removeClass("selected").addClass("selected").val("w-knight");
                        $("#"+word[i]+"-"+8).removeClass("selected").addClass("selected").val("w-rook");
                    break;        
            }
        } 
    }
}

$(document).ready(reload);
 //-------------------------------------call pieces------------------------------------------
   
var Gochees = {
             wait : true,
             nextcolor : '',
             previec_peices_val :'',
             previce_peice_id :'',
             remove_class : new Array(),
             tem :'',
             tem2:'',
                        
    impliment_pieces : function (){  
        //    for (var i = 0; i < Gochees.remove_class.length; i++) {
                if(Gochees.remove_class.length>0){
              //  if(Gochees.remove_class[i] === Gochees.tem){
                   var vv = $("#"+Gochees.tem).data('color');
                   var class_count =  $("#"+Gochees.tem).attr('class').length;
                   if(class_count > 0){  
                         for (var i = 0; i < class_count; i++) { 
                              var temp = $("#"+Gochees.tem).attr('class').split(' ')[i];
                             if(( temp !== 'col-md-1' )){
                                 var temp_class = $("#"+Gochees.tem).attr('class').split(' ')[i];
                                  $("#"+Gochees.tem).removeClass(temp_class);
                             }
                    }      
                   }
                   var use_class = Gochees.previec_peices_val.split("-")[0]+"_"+Gochees.previec_peices_val.split("-")[1];
                   $("#"+Gochees.tem).addClass(use_class);
                    $("#"+Gochees.tem).val(Gochees.previec_peices_val);
                    $("#"+Gochees.tem).css("background-color",vv);
                    var class_count2 =  $("#"+Gochees.previce_peice_id).attr('class').length;
                   if(class_count2 > 0){  
                         for (var y = 0; y < class_count2; y++) { 
                              var temp3 = $("#"+Gochees.previce_peice_id).attr('class').split(' ')[y];
                             if(( temp3 !== 'col-md-1' )){
                                 var temp_class3 = $("#"+Gochees.previce_peice_id).attr('class').split(' ')[y];
                                  $("#"+Gochees.previce_peice_id).removeClass(temp_class3);
                             }
                    }
                   }
                   $("#"+Gochees.previce_peice_id).val("");
                    for (var x = 0; x < Gochees.remove_class.length; x++) {
                              //  if(!(Gochees.remove_class[x] === Gochees.tem)){
                                      var vvv = $("#"+Gochees.remove_class[x]).data('color');
                                      $("#"+Gochees.remove_class[x]).removeClass("box_shadow");
                                      $("#"+Gochees.remove_class[x]).css("background-color",vvv);
                                      $("#"+Gochees.remove_class[x]).unbind('click'); 
                           //     }
                                  }
                                  $("#"+Gochees.previce_peice_id).unbind('click'); 
                               Gochees.wait = true;
//                               Gochees.previce_peice_id = '';
//                               Gochees.previec_peices_val = '';
//                               Gochees.remove_class = new Array();
                               
                             //  Gochees.tem ='';
              //  }
            }
      //  }
      },
      
      clearPreview : function (){
             

            for (var i = 0; i < Gochees.remove_class.length; i++) {
                  var vvv = $("#"+Gochees.remove_class[i]).data('color');
                  $("#"+Gochees.remove_class[i]).css("background-color",vvv);
                  $("#"+Gochees.remove_class[i]).removeClass("box_shadow");
                  $("#"+Gochees.remove_class[i]).unbind();   
               }
               Gochees.wait = true;
               Gochees.previce_peice_id = '';
               Gochees.previec_peices_val = '';
               Gochees.remove_class = new Array();
               if(Gochees.nextcolor === 'b'){
                 Gochees.nextcolor = 'w';
             }else{
                 Gochees.nextcolor = 'b';
             }
             $("#"+Gochees.tem2).unbind();
      }
};

var Chesspieces = {
      peice_value:'',
      peice_id:'',
      peice_color:'',
      peices_classes : new Array(),
      click_color:'',
      remove_class_id : '',
      remove_class_array : new Array(),
      pieces_Values: function (peice_id,peice_value, peice_color){
          
          this.peice_id = peice_id;
          this.peice_value = peice_value;
          this.peice_color = peice_color;
          if(Gochees.nextcolor ===  this.peice_color || Gochees.nextcolor === ''){
             if((this.peice_value.split("-")[1]) === 'knight'){
              this.gokinght();
          }
          if((this.peice_value.split("-")[1]) === 'rook'){
//              $("#main-Div").removeClass("shake-little");
              this.goroock();
               // alert();
          }
          if(this.peice_value.split("-")[1] === 'bishop'){
//              $("#main-Div").removeClass("shake-little");
              this.gobisop();
          }
          if(this.peice_value.split("-")[1] === 'queen'){
//              $("#main-Div").removeClass("shake-little");
              this.goqueen();
          }
          if(this.peice_value.split("-")[1]  === 'king'){
//              $("#main-Div").removeClass("shake-little");
              this.goking();
          }
          if(this.peice_value.split("-")[1] === 'pawn'){
//              $("#main-Div").removeClass("shake-little");
              this.gopawn();
          }
          }else{
              $(".next").trigger('play');
//                 $("#main-Div").addClass("shake-little");
//         $("#main-Div").mouseleave(function (){
//             $("#main-Div").removeClass("shake-little");
//         });
          } 
          
      },
      
      
   gokinght:function (){
     var words = new Array('a','b','c','d','e','f','g','h');
     var numbers = new Array(1,2,2,1);
     var color = this.peice_color;
     var chars = this.peice_id.split("-")[0]; 
     var index= parseInt(this.peice_id.split("-")[1]);
     var char_index = words.indexOf(chars) - 2;
     var remove_class = new Array();
      var reg1 = new RegExp('^[a-zA-Z]\\-[a-zA-Z]+$');
     for (var i = 0; i < 4; i++) {
        var row = words[(char_index + i)];
        if(row === chars){
            char_index = words.indexOf(chars) - 1;
            row = words[(char_index + i)];
        }
          if(!(row === undefined) ){             
            var count = numbers[i]+index;
            if( count > 0 && count <9){
                var color1 = $("#"+row+"-"+count).val().split("-")[0];
                if(!(color1 === color) ){
                    if(color1 === ''){
                       var getcolor = $("#"+row+"-"+count).css('background-color');
                    $("#"+row+"-"+count).css("background-color","rgba(0, 255, 0, 1)");                 
                    remove_class.push($("#"+row+"-"+count).data('color',getcolor).attr('id'));   
                    }else{
                    var getcolor = $("#"+row+"-"+count).css('background-color');
                    $("#"+row+"-"+count).css("background-color","red");                 
                    remove_class.push($("#"+row+"-"+count).data('color',getcolor).attr('id'));   
                }
            }
            }
          var count2 = index - numbers[i];
            if( count2 > 0 && count2<9){
                 var color2 = $("#"+row+"-"+count2).val().split("-")[0];
                 if(!(color === color2)){
                     if(color2 === ""){
                     var getcolor = $("#"+row+"-"+count2).css('background-color');
                    $("#"+row+"-"+count2).css("background-color","rgba(0, 255, 0, 1)");                 
                    remove_class.push($("#"+row+"-"+count2).data('color',getcolor).attr('id'));   
                      //$("#"+row+"-"+count2).css("background-color","red");
                 }else{
                     var getcolor = $("#"+row+"-"+count2).css('background-color');
                    $("#"+row+"-"+count2).css("background-color","red");                 
                    remove_class.push($("#"+row+"-"+count2).data('color',getcolor).attr('id')); 
                 }
             }
               
            }
        }
     }     
             if(remove_class.length > 0){
             if(this.peice_color === 'b'){
                 Gochees.nextcolor = 'w';
             }else{
                 Gochees.nextcolor = 'b';
             }
             Gochees.previce_peice_id = this.peice_id;
             Gochees.previec_peices_val = this.peice_value;
             Gochees.remove_class = remove_class;
             Gochees.wait = false;
             for (var i = 0; i < Gochees.remove_class.length; i++) {
                 $("#"+Gochees.remove_class[i]).addClass("box_shadow");
                $("#"+Gochees.remove_class[i]).on("click",function (){
                    Gochees.tem = $(this).attr('id');
                    Gochees.impliment_pieces();
//                    $("#"+Gochees.remove_class[i]).mouseleave(function (){
//             $("#"+Gochees.remove_class[i]).removeClass("shake-little");
//         });
                });
        }
           $("#"+ Gochees.previce_peice_id).on("click",function () {
               Gochees.tem2 = $(this).attr('id');
                    Gochees.clearPreview();
                });
    }
   },
   
   goRookFirst: function (){
     var words = new Array('a','b','c','d','e','f','g','h');
     var color = this.peice_color;
     var chars = this.peice_id.split("-")[0]; 
     var index= parseInt(this.peice_id.split("-")[1]);
     var char_index = words.indexOf(chars);
     var down = 7 - char_index;
     var remove_class = new Array();
     // ----------------------------------go up-----------  
      if(!(char_index === 0)){
       for (var i = 0; i < char_index ; i++) {
           var temp =$("#"+words[(char_index -1)-i]+"-"+index).val();
            var reg1 = new RegExp('^[a-zA-Z]\\-[a-zA-Z]+$');
            if(reg1.test(temp)){
                 if(temp.split("-")[0] !== color) {
                     var getcolor = $("#"+words[(char_index -1)-i]+"-"+index).css('background-color');
                     $("#"+words[(char_index -1)-i]+"-"+index).css("background-color","red");
                    remove_class.push($("#"+words[(char_index -1)-i]+"-"+index).data('color',getcolor).attr('id'));
                      i = char_index;
                 } else{ 
                       i = char_index;
                 }
            }else{
                var getcolor = $("#"+words[(char_index -1)-i]+"-"+index).css('background-color');
                $("#"+words[(char_index -1)-i]+"-"+index).css("background-color","rgba(0, 255, 0, 1)");
                remove_class.push($("#"+words[(char_index -1)-i]+"-"+index).data('color',getcolor).attr('id'));
                
            }
        }   
      }
      // ----------------go down
      if(!(char_index === 7)){
            for (var i = 0; i < down; i++) {
                var temp2 = $("#"+words[(char_index + 1) +i]+"-"+index).val();
                
                if(!(temp2 === '')){
                 if(((temp2.split("-")[0]) === color )) {
                      i= 10;
                 } else{
                     var getcolor = $("#"+words[(char_index + 1) +i]+"-"+index).css('background-color');
                     $("#"+words[(char_index + 1) +i]+"-"+index).css("background-color","red");
                    remove_class.push($("#"+words[(char_index + 1) +i]+"-"+index).data('color',getcolor).attr('id'));
                     i = 10;
                 }
            }else{
                var getcolor = $("#"+words[(char_index + 1) +i]+"-"+index).css('background-color');
                $("#"+words[(char_index + 1) +i]+"-"+index).css("background-color","rgba(0, 255, 0, 1)");
                remove_class.push($("#"+words[(char_index + 1) +i]+"-"+index).data('color',getcolor).attr('id'));   
            }
            }
            }
            
           // --------------go right 
           
           if(!(index === 8)){
               for (var i = 0; i < (8 - index); i++) {
                var next = index + 1 ;
                var temp3 = $("#"+chars+"-"+(next+i)).val();
                var reg1 = new RegExp('^[a-zA-Z]\\-[a-zA-Z]+$');
                if(reg1.test(temp3)){
                 if(temp3.split("-")[0] !== color ) {
                     var getcolor = $("#"+chars+"-"+(next+i)).css('background-color');
                    $("#"+chars+"-"+(next+i)).css("background-color","red");
                    remove_class.push($("#"+chars+"-"+(next+i)).data('color',getcolor).attr('id')); 
                      i= 8;
                 }else{ 
                    i= 8;
                 }
            }else{
                var getcolor = $("#"+chars+"-"+(next+i)).css('background-color');
                $("#"+chars+"-"+(next+i)).css("background-color","rgba(0, 255, 0, 1)");
                remove_class.push($("#"+chars+"-"+(next+i)).data('color',getcolor).attr('id'));                 
            }
           }
         }
           // -----------go left 
           if(!(index === 1)){
                for (var i = 0; i < (index- 1); i++) {
                var temp3 = $("#"+chars+"-"+(index - 1 - i)).val();
                if(!(temp3 === '')){
                 if(((temp3.split("-")[0]) === color )) {
                      i= 10;
                 } else{ 
                     var getcolor = $("#"+chars+"-"+(index - 1 - i)).css('background-color');
                     $("#"+chars+"-"+(index - 1 - i)).css("background-color","red");
                     remove_class.push($("#"+chars+"-"+(index - 1 - i)).data('color',getcolor).attr('id'));                    
                     i = 10;
                 }
            }else{
                var getcolor = $("#"+chars+"-"+(index - 1 - i)).css('background-color');
                $("#"+chars+"-"+(index - 1 - i)).css("background-color","rgba(0, 255, 0, 1)");
                remove_class.push($("#"+chars+"-"+(index - 1 - i)).data('color',getcolor).attr('id'));   
            }
            }
           }
           
           return remove_class;
   },
   
   goroock : function (){
              var remove = new Array();
              remove = this.goRookFirst();
               if((remove.length)> 0){
            if(this.peice_color === 'b'){
                 Gochees.nextcolor = 'w';
             }else{
                 Gochees.nextcolor = 'b';
             }
             Gochees.previce_peice_id = this.peice_id;
             Gochees.previec_peices_val = this.peice_value;
             Gochees.remove_class = remove;
             Gochees.wait = false;
             for (var i = 0; i < Gochees.remove_class.length; i++) {
                 $("#"+Gochees.remove_class[i]).addClass("box_shadow");
                $("#"+Gochees.remove_class[i]).on("click",function (){
                    Gochees.tem = $(this).attr('id');
                    Gochees.impliment_pieces();
                });
        }
        $("#"+ Gochees.previce_peice_id).on("click",function () {
               Gochees.tem2 = $(this).attr('id');
                    Gochees.clearPreview();
                });
    }
   },
   
   gobisop1 : function (){
       var words = new Array('a','b','c','d','e','f','g','h');
                 var color = this.peice_color;
                 var chars = this.peice_id.split("-")[0]; 
                 var index= parseInt(this.peice_id.split("-")[1]);
                 var char_index = words.indexOf(chars);
                 var up = char_index ;
                 var down = 8 - (char_index + 1);
                 var up_right_val = index - 1;
                 var up_left_val = index + 1;
                 var down_rigth_val = index - 1;
                 var down_left_val = index + 1;
                 var remove_class = new Array();
                 var reg1 = new RegExp('[a-zA-Z]{1}$');
                 
                   for (var i = 0; i < 7; i++) {
                   if((up < 8) && ( up > 0))  {
                       var color1 ='';
                       if(up_right_val > 0){
                       color1 = $("#"+words[(char_index - (i+1))]+"-"+up_right_val).val().split("-")[0];
                       if( color1 === color){
                      // $("#"+words[(char_index - (i+1))]+"-"+up_right_val).css("background-color","green");
                       up_right_val = 0;
                       }else{
                      //  $("#"+words[(char_index - (i+1))]+"-"+up_right_val).css("background-color","red");
                      
                      if(reg1.test(color1)){
                         var getcolor = $("#"+words[(char_index - (i+1))]+"-"+up_right_val).css('background-color');
                    $("#"+words[(char_index - (i+1))]+"-"+up_right_val).css("background-color","red");                 
                    remove_class.push($("#"+words[(char_index - (i+1))]+"-"+up_right_val).data('color',getcolor).attr('id'));
                         up_right_val = up_right_val - 1;
                         up_right_val = 0;
                         }else{
                            var getcolor = $("#"+words[(char_index - (i+1))]+"-"+up_right_val).css('background-color');
                    $("#"+words[(char_index - (i+1))]+"-"+up_right_val).css("background-color","rgba(0, 255, 0, 1)");                
                    remove_class.push($("#"+words[(char_index - (i+1))]+"-"+up_right_val).data('color',getcolor).attr('id'));
                         up_right_val = up_right_val - 1;  
                         }
                     }
                       }
                       if(up_left_val < 9){
                       var color2 = $("#"+words[(char_index - (i+1))]+"-"+up_left_val).val().split("-")[0];
                       if(color === color2){
                     //  $("#"+words[(char_index - (i+1))]+"-"+up_left_val).css("background-color","green");
                       up_left_val = 9;
                        }else{
                            if(reg1.test(color2)){
                                var getcolor =  $("#"+words[(char_index - (i+1))]+"-"+up_left_val).css('background-color');
                     $("#"+words[(char_index - (i+1))]+"-"+up_left_val).css("background-color","red");                 
                    remove_class.push( $("#"+words[(char_index - (i+1))]+"-"+up_left_val).data('color',getcolor).attr('id'));  
                       up_left_val = up_left_val +1; 
                       up_left_val = 9;
                            }else{
                               var getcolor =  $("#"+words[(char_index - (i+1))]+"-"+up_left_val).css('background-color');
                     $("#"+words[(char_index - (i+1))]+"-"+up_left_val).css("background-color","rgba(0, 255, 0, 1)");                
                    remove_class.push( $("#"+words[(char_index - (i+1))]+"-"+up_left_val).data('color',getcolor).attr('id'));  
                       up_left_val = up_left_val +1;   
                            }
                           //  $("#"+words[(char_index - (i+1))]+"-"+up_left_val).css("background-color","red");
                             
                       }
                      }
                       up = up -1;
                   }  
                   if((down < 8) && ( down > 0)){
                       var color3 ='';
                       if(down_rigth_val > 0){
                       color3 =$("#"+words[(8 - down)]+"-"+down_rigth_val).val().split("-")[0];
                        if( color === color3){
                      // $("#"+words[(8 - down)]+"-"+down_rigth_val).css("background-color","green");
                       down_rigth_val = 0;
                       }else{
                           if(reg1.test(color3)){
                               var getcolor = $("#"+words[(8 - down)]+"-"+down_rigth_val).css('background-color');
                    $("#"+words[(8 - down)]+"-"+down_rigth_val).css("background-color","red");                 
                    remove_class.push($("#"+words[(8 - down)]+"-"+down_rigth_val).data('color',getcolor).attr('id'));  
                       down_rigth_val = down_rigth_val - 1;
                       down_rigth_val = 0;
                           }else{
                              var getcolor = $("#"+words[(8 - down)]+"-"+down_rigth_val).css('background-color');
                    $("#"+words[(8 - down)]+"-"+down_rigth_val).css("background-color","rgba(0, 255, 0, 1)");                
                    remove_class.push($("#"+words[(8 - down)]+"-"+down_rigth_val).data('color',getcolor).attr('id'));  
                       down_rigth_val = down_rigth_val - 1; 
                           }
                      // $("#"+words[(8 - down)]+"-"+down_rigth_val).css("background-color","red");
                        
                   }
                      }
                      if(down_left_val < 9){
                       var color4 =  $("#"+words[(8 - down)]+"-"+down_left_val).val().split("-")[0];
                       if (color === color4){
                          
                     //  $("#"+words[(8 - down)]+"-"+down_left_val).css("background-color","green");
                       down_left_val = 9;
                        }else{
                            if(reg1.test(color4)){
                               var getcolor =$("#"+words[(8 - down)]+"-"+down_left_val).css('background-color');
                    $("#"+words[(8 - down)]+"-"+down_left_val).css("background-color","red");                 
                    remove_class.push($("#"+words[(8 - down)]+"-"+down_left_val).data('color',getcolor).attr('id'));  
                       down_left_val = down_left_val + 1; 
                       down_left_val = 9;
                            }else{
                                var getcolor =$("#"+words[(8 - down)]+"-"+down_left_val).css('background-color');
                    $("#"+words[(8 - down)]+"-"+down_left_val).css("background-color","rgba(0, 255, 0, 1)");                
                    remove_class.push($("#"+words[(8 - down)]+"-"+down_left_val).data('color',getcolor).attr('id'));  
                       down_left_val = down_left_val + 1; 
                            }
                      // $("#"+words[(8 - down)]+"-"+down_left_val).css("background-color","red");
                        
                   }
                       }
                       down = down - 1;
                   }
        }
        
        return remove_class;
   },
   
   gobisop : function (){
                var remove_class = this.gobisop1();
        if((remove_class.length)> 0){
             if(this.peice_color === 'b'){
                 Gochees.nextcolor = 'w';
             }else{
                 Gochees.nextcolor = 'b';
             }
             Gochees.previce_peice_id = this.peice_id;
             Gochees.previec_peices_val = this.peice_value;
             Gochees.remove_class = remove_class;
             Gochees.wait = false;
             for (var i = 0; i < Gochees.remove_class.length; i++) {
                 $("#"+Gochees.remove_class[i]).addClass("box_shadow");
                $("#"+Gochees.remove_class[i]).on("click",function (){
                    Gochees.tem = $(this).attr('id');
                    Gochees.impliment_pieces();
                });
        }
        $("#"+ Gochees.previce_peice_id).on("click",function () {
               Gochees.tem2 = $(this).attr('id');
                    Gochees.clearPreview();
                });
    }
   },
   
   goqueen : function (){
       var remove1 =this.gobisop1();
       var remove2 =this.goRookFirst();
       var remove = new Array();
       
       if(remove1.length> 0 ){
            for (var i = 0; i < remove1.length; i++) {
                remove.push(remove1[i]);
            }
       }
       if (remove2.length > 0 ){
            for (var y = 0; y < remove2.length; y++) {
                remove.push(remove2[y]);
            }
       }
       
       if(remove.length>0){
             if(this.peice_color === 'b'){
                 Gochees.nextcolor = 'w';
             }else{
                 Gochees.nextcolor = 'b';
             }
             Gochees.previce_peice_id = this.peice_id;
             Gochees.previec_peices_val = this.peice_value;
             Gochees.remove_class = remove;
             Gochees.wait = false;
             for (var i = 0; i < Gochees.remove_class.length; i++) {
                 $("#"+Gochees.remove_class[i]).addClass("box_shadow");
                $("#"+Gochees.remove_class[i]).on("click",function (){
                    Gochees.tem = $(this).attr('id');
                    Gochees.impliment_pieces();
                });
        }
        $("#"+ Gochees.previce_peice_id).on("click",function () {
               Gochees.tem2 = $(this).attr('id');
                    Gochees.clearPreview();
                });
       }
       
   },
   
   goking : function (){
                 var words = new Array('a','b','c','d','e','f','g','h');
                 var color = this.peice_color;
                 var chars = this.peice_id.split("-")[0]; 
                 var index= parseInt(this.peice_id.split("-")[1]);
                 var char_index = words.indexOf(chars);
                 var startking_index = char_index - 1;
                 var remove_class = new Array();
                 
                 for (var i = 0; i < 3; i++) {
                    var row = words[(startking_index + i)];
                    for (var x = 0; x < 3; x++) {
                        if(!(row === undefined)){
                            if((row === chars)){
                               if( x !== 1){ 
                                   var color1 =  $("#"+row+"-"+((index - 1)+x)).val().split("-")[0];
                                   if(color === color1){
                                   //  $("#"+row+"-"+((index - 1)+x)).css("background-color","green");
                                  }else{
                                      if(color1 ===''){
                                         var getcolor = $("#"+row+"-"+((index - 1)+x)).css('background-color');
                    $("#"+row+"-"+((index - 1)+x)).css("background-color","rgba(0, 255, 0, 1)");                
                    remove_class.push( $("#"+row+"-"+((index - 1)+x)).data('color',getcolor).attr('id'));   
                                      }else{
                                      // $("#"+row+"-"+((index - 1)+x)).css("background-color","red");
                                        var getcolor = $("#"+row+"-"+((index - 1)+x)).css('background-color');
                    $("#"+row+"-"+((index - 1)+x)).css("background-color","red");                 
                    remove_class.push( $("#"+row+"-"+((index - 1)+x)).data('color',getcolor).attr('id'));  
                                  }
                              }
                               }
                            }else{
                                   var color2 =  $("#"+row+"-"+((index - 1)+x)).val().split("-")[0];
                                   if( color === color2){
                                       //$("#"+row+"-"+((index - 1)+x)).css("background-color","green");
                                    }else{
                                        if(color2 === ''){
                                        // $("#"+row+"-"+((index - 1)+x)).css("background-color","red");
                                          var getcolor =  $("#"+row+"-"+((index - 1)+x)).css('background-color');
                    $("#"+row+"-"+((index - 1)+x)).css("background-color","rgba(0, 255, 0, 1)");                
                    remove_class.push( $("#"+row+"-"+((index - 1)+x)).data('color',getcolor).attr('id'));  
                                    }else{
                                     var getcolor =  $("#"+row+"-"+((index - 1)+x)).css('background-color');
                    $("#"+row+"-"+((index - 1)+x)).css("background-color","red");                 
                    remove_class.push( $("#"+row+"-"+((index - 1)+x)).data('color',getcolor).attr('id'));     
                                    }
                                }
                            }
                       }
            }
        }
         if((remove_class.length)> 0){
             if(this.peice_color === 'b'){
                 Gochees.nextcolor = 'w';
             }else{
                 Gochees.nextcolor = 'b';
             }
             Gochees.previce_peice_id = this.peice_id;
             Gochees.previec_peices_val = this.peice_value;
             Gochees.remove_class = remove_class;
             Gochees.wait = false;
             for (var i = 0; i < Gochees.remove_class.length; i++) {
                 $("#"+Gochees.remove_class[i]).addClass("box_shadow");
                $("#"+Gochees.remove_class[i]).on("click",function (){
                    Gochees.tem = $(this).attr('id');
                    Gochees.impliment_pieces();
                });
        }
        $("#"+ Gochees.previce_peice_id).on("click",function () {
               Gochees.tem2 = $(this).attr('id');
                    Gochees.clearPreview();
                });
    }
                 
   },
   
   gopawn : function (){
                 var words = new Array('h','g','f','e','d','c','b','a');
                 var color = this.peice_color;
                 var chars = this.peice_id.split("-")[0]; 
                 var index= parseInt(this.peice_id.split("-")[1]);
                 var char_index = words.indexOf(chars);
                 var remove_class = new Array();
                 
                 if(this.peice_color === 'b'){
                     var temp1 = $("#"+words[(char_index - 1)]+"-"+(index - 1)).val();
                     var reg1 = new RegExp('^[a-zA-Z]\\-[a-zA-Z]+$');
                     if(reg1.test(temp1) && index !== 1){  
                         if(temp1.split("-")[0] !== color){
                             var getcolor =  $("#"+words[(char_index - 1)]+"-"+(index - 1)).css('background-color');
                              $("#"+words[(char_index - 1)]+"-"+(index - 1)).css("background-color","red");                 
                             remove_class.push( $("#"+words[(char_index - 1)]+"-"+(index - 1)).data('color',getcolor).attr('id'));  
                           }
                        }
                   var temp2 = $("#"+words[(char_index - 1)]+"-"+(index + 1)).val(); 
                   
                   var reg1 = new RegExp('^[a-zA-Z]\\-[a-zA-Z]+$');
                     if(reg1.test(temp2)&& index !==8 ){
                             if(temp2.split("-")[0] !== color){
                              var getcolor = $("#"+words[(char_index - 1)]+"-"+(index + 1)).css('background-color');
                             $("#"+words[(char_index - 1)]+"-"+(index + 1)).css("background-color","red");                 
                             remove_class.push($("#"+words[(char_index - 1)]+"-"+(index + 1)).data('color',getcolor).attr('id')); 
                           }
                        }  
                     for (var i = 1; i < 3; i++) {
                     var row = words[(char_index - i)];
                     if (row !== undefined){
                         var color1 = $("#"+row+"-"+index).val().split("-")[0];
                         if(color1 === ''){
                           var getcolor = $("#"+row+"-"+index).css('background-color');
                        $("#"+row+"-"+index).css("background-color","rgba(0, 255, 0, 1)");                
                       remove_class.push($("#"+row+"-"+index).data('color',getcolor).attr('id'));
                         }
                         var reg1 = new RegExp('[a-zA-Z]+$');
                         if(reg1.test(color1)){
                             i = 4;
                         }
                     }
                  }
                 }else{
                     var temp1 = $("#"+words[(char_index + 1)]+"-"+(index - 1)).val();
                     if(temp1 !== '' && index !== 1){  
                          var reg1 = new RegExp('^[a-zA-Z]\\-[a-zA-Z]+$');
                         if(reg1.test(temp1)){
                         if(temp1.split("-")[0] !== color){
                             var getcolor =  $("#"+words[(char_index + 1)]+"-"+(index - 1)).css('background-color');
                              $("#"+words[(char_index + 1)]+"-"+(index - 1)).css("background-color","red");                 
                             remove_class.push( $("#"+words[(char_index + 1)]+"-"+(index - 1)).data('color',getcolor).attr('id'));  
                           }
                       }
                        }
                   var temp2 = $("#"+words[(char_index + 1)]+"-"+(index + 1)).val(); 
                    var reg1 = new RegExp('^[a-zA-Z]\\-[a-zA-Z]+$');
                     if(reg1.test(temp2) && index!==8){
                         if(temp2.split("-")[0] !== color){ 
                              var getcolor = $("#"+words[(char_index + 1)]+"-"+(index + 1)).css('background-color');
                             $("#"+words[(char_index + 1)]+"-"+(index + 1)).css("background-color","red");             
                             remove_class.push($("#"+words[(char_index + 1)]+"-"+(index + 1)).data('color',getcolor).attr('id')); 
                           }
                        } 
                     for (var i = 1; i < 3; i++) {
                         var row = words[(char_index + i)];
                         if(row !== undefined){
                           var color2 = $("#"+row+"-"+index).val().split("-")[0];
                           if(color2 === ''){
                              var getcolor = $("#"+row+"-"+index).css('background-color');
                    $("#"+row+"-"+index).css("background-color","rgba(0, 255, 0, 1)");                
                    remove_class.push($("#"+row+"-"+index).data('color',getcolor).attr('id'));   
                           }
                           var reg1 = new RegExp('[a-zA-Z]+$');
                           if(reg1.test(color2)){
                               i = 4;
                           }
                         }
                    }
                 }
             if((remove_class.length)> 0){
             if(this.peice_color === 'b'){
                 Gochees.nextcolor = 'w';
             }else{
                 Gochees.nextcolor = 'b';
             }
             Gochees.previce_peice_id = this.peice_id;
             Gochees.previec_peices_val = this.peice_value;
             Gochees.remove_class = remove_class;
             Gochees.wait = false;
             for (var i = 0; i < Gochees.remove_class.length; i++) {
                $("#"+Gochees.remove_class[i]).addClass("box_shadow");
                $("#"+Gochees.remove_class[i]).on("click",function (){
                    Gochees.tem = $(this).attr('id');
                    Gochees.impliment_pieces();
                });
        }
        $("#"+ Gochees.previce_peice_id).on("click",function () {
               Gochees.tem2 = $(this).attr('id');
                    Gochees.clearPreview();
                });
        
    }
                 
   }
}
 $("#main-Div div div").on("click",function (){
          if(!(($(this).val()) === '') && Gochees.wait ){  
//                $("#main-Div").removeClass("shake-little");
                 var color = $(this).val().split("-")[0].trim();
                 var piece_id = $(this).attr('id').trim();
                 var piece_value = $(this).val().trim();
                 Chesspieces.pieces_Values(piece_id,piece_value,color);
     }else{
         var presh_id = $(this).attr('id');
         var isTrue = true;
         if(Gochees.remove_class.length>0){
             for (var i = 0; i < Gochees.remove_class.length; i++) {
                if(presh_id === Gochees.remove_class[i]){
                    isTrue = false;
                    
                }
            }
         }
         
         if(isTrue){
             $(".audioDemo").trigger('play');
         }else{
             $(".go_ahead").trigger('play');
         }
     }
 });
 $(".go_ahead").hide();
 $(".audioDemo").hide();
 $(".next").hide();


