`use strict`;

 function setColor(ctx, next){
   console.log(ctx);
   $('#thebutton').css('background-color', `#${ctx.params.color}`);
   $('form')[0].color.value = ctx.params.color;
   next();
 }

 function setRadius(ctx, next) {
   $('#thebutton').css('border-radius', `${ctx.params.radius}px`);
   $('form')[0].radius.value = ctx.params.radius;
   next();
 }

 function setPhrase(ctx){
   $('#thebutton').text(ctx.params.phrase);
   $('form')[0].phrase.value = ctx.params.phrase;
   $('#buttoncode').text($('#thebutton')[0].outerHTML);
  //  ^^ pushing that into the outerHTML on the page
 }

// ctx.params.color
 page('/:color/:radius/:phrase', setColor, setRadius, setPhrase);

// an alternate way to write document.ready, its like a jquery IIFE, its our executable code that will be running on page load.
$(function() {
  const f = $('form')[0];
  page();

// event delegation - setting up event listeners that adds flexibility, when we add that second argument we are adding delegation that gives us flexibility
  $('body').on('change', 'input', function() {
    let path = [f.color.value, f.radius.value, f.phrase.value]..filter( v => v).join('/');
    page.show(`/${path}`);
  })
})
