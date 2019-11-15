'use strict'
// scroll function for window screen
$(window).scroll(() =>
{
	//console.log($(this).scrollTop())
	$(this).scrollTop() > 100 ? $('#scroll-top').css({"opacity": 1}) : $('#scroll-top').css({"opacity": 0})
})


// smooth croll function
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	  // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
		  var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


$(document).ready(function() 
{
  var pulseSection = document.getElementById('pulse');
  var sectionTags = document.getElementsByTagName('section');

  //calculating the total height of sections above #pulse seciton
  let height = 0;
  for(let i = 0; i < sectionTags.length -1 ; i++)
  {
    height += sectionTags[i].clientHeight;
  }
  
  var pulse = function() 
  {
    var e = document.createElement('div');
    e.setAttribute('class', 'circle');
    pulseSection.appendChild(e);
    e.style.top = event.pageY - height + 'px';// have two section above
    e.style.left = event.pageX + 'px';// have two section above
    setTimeout(function () {
      pulseSection.removeChild(e)
    }, 1000)
  }
  
  pulseSection.addEventListener('click',pulse);
});
