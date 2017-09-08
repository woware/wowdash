var listener = {
  elements:$(document).find("[action]"),

  listen: function() {

    $(listener.elements).each(function(){

      var target = $(this).attr("target");
      var action = $(this).attr("action");
      var attribute = $(this).attr("attribute");

      if(target!=null){
        $(this).click(function() {
          if(attribute!=null){
            $(target).toggleClass(attribute);
          }else{
            $(target).toggleClass("changed");
          }

        });
      }
    });//$

  }//listen

};//listener

listener.listen()
