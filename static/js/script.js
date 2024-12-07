// $(document).ready(function(){
//  /* This code is executed after the DOM has been completely loaded */
// 
//  $('nav a,footer a.up').click(function(e){
// 
//      // If a link has been clicked, scroll the page to the link's hash target:
// 
//      $.scrollTo( this.hash || 0, 1500);
//      e.preventDefault();
//  });
// 
// });

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-1680375-1']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();