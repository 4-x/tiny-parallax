window.addEventListener('scroll', function(evt){
    document.querySelector('html').style.setProperty('--scroll', window.pageYOffset + 'px');
});

window.addEventListener('load', function(evt){
    // Set horizontal and vertical offsets for every element that is out of view so that its transform is zero when it reaches the bottom of the page
    var elements = document.querySelectorAll('[class*="par-"]');
    elements.forEach(function(lmnt){
        var top_position = lmnt.getBoundingClientRect().top;
        if (top_position > window.innerHeight) {
            lmnt.style.setProperty('--top-position', top_position-window.innerHeight+'px');
        }
    });
});
