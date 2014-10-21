// function to maptime logo-ify some text. Requires jQuery
//

function MaptimeLogoify (logoText = "#maptime!", //text for logo
                         targetClass="logo", //div class to put the logo in) 
                         targetClassStyle //optional CSS for the target div, using jQuery's css() method
                        ) {
  var target = "div." + targetClass
  var colors = [["red","#ff0000"], 
                ["orange","#ffa500"], 
                ["yellow","#ffff00"], 
                ["green","#008000"], 
                ["blue","#00dddd"], 
                ["indigo","#800080"]];
  
  for (i = 0; i < 5; i++ ) {
    var cssAttribs = {"color":colors[i][1], 
                     "z-index":"inherit+" + String(i), 
                     "position":"absolute",
                     "top":String(index*0.4) + "em",
                     "left":String(index*0.2) + "em"
                     };
    
    $(target).append($("<div></div>")
                                 .addClass(colors[i][0])
                                 .text(logoText)
                                 .css(cssAttribs)
                               );
  };
  if (targetClassStyle !== undefined & targetClassStyle !== null & targetClassStyle !== "") {
    $(target).css(targetClassStyle)
  };

};
