"use strict";$(document).ready(function(){$(".navbar a, .footer_nav, a[href='#top']").on("click",function(){if(""!==this.hash){event.preventDefault();var t=this.hash;$("html, body").animate({scrollTop:$(t).offset().top},900,function(){window.location.hash=t})}})});
//# sourceMappingURL=scrolling.js.map
