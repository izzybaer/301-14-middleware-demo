`use strict`;

 function setColor(){
   let colorVal = `#${$('form')[0].color.value}`;
   $('#thebutton').css('background-color', colorVal)
 }

 function setRadius() {
   let radVal = `${$('form')[0].radius.value}px`;
   $('#thebutton').css('border-radius', radVal);
 }

 function setPhrase(){
   let phraseVal = $('form')[0].phrase.value;
   $('#thebutton').text(phraseVal);
 }

 $('form').on('change', function(){
   setColor();
   setRadius();
   setPhrase();
   $('#buttoncode').text(document.getElementById('thebutton').outerHTML);
 })
